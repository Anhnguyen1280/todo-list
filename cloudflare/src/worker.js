import {
  parseCookie,
  stringifySetCookie
} from "cookie";

const SESSION_COOKIE_NAME = "todo_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7;
const PASSWORD_ITERATIONS = 100000;

function bytesToBase64(bytes) {
  return btoa(
    String.fromCharCode(...bytes)
  );
}

function base64ToBytes(value) {
  const normalizedValue = value
    .replaceAll("-", "+")
    .replaceAll("_", "/");

  const paddedValue =
    normalizedValue.padEnd(
      Math.ceil(normalizedValue.length / 4) * 4,
      "="
    );

  return Uint8Array.from(
    atob(paddedValue),
    function (character) {
      return character.charCodeAt(0);
    }
  );
}

function createRandomValue(length = 32) {
  const bytes = new Uint8Array(length);

  crypto.getRandomValues(bytes);

  return bytesToBase64(bytes)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

async function hashPassword(password, salt) {
  const passwordKey =
    await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(password),
      "PBKDF2",
      false,
      ["deriveBits"]
    );

  const passwordHash =
    await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt: base64ToBytes(salt),
        iterations: PASSWORD_ITERATIONS,
        hash: "SHA-256"
      },
      passwordKey,
      256
    );

  return bytesToBase64(
    new Uint8Array(passwordHash)
  );
}

async function hashSessionToken(token) {
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(token)
  );

  return bytesToBase64(
    new Uint8Array(hash)
  );
}

function jsonResponse(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
async function registerUser(request, env) {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { message: "Invalid JSON data." },
      400
    );
  }

  const email =
    typeof body.email === "string"
      ? body.email.trim().toLowerCase()
      : "";

  const password =
    typeof body.password === "string"
      ? body.password
      : "";

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return jsonResponse(
      { message: "Please enter a valid email." },
      400
    );
  }

  if (
    password.length < 8 ||
    password.length > 128
  ) {
    return jsonResponse(
      {
        message:
          "Password must contain 8 to 128 characters."
      },
      400
    );
  }

  const existingUser = await env.DB.prepare(`
    SELECT id
    FROM users
    WHERE email = ?
  `)
    .bind(email)
    .first();

  if (existingUser) {
    return jsonResponse(
      { message: "Email is already registered." },
      409
    );
  }

  const passwordSalt =
    createRandomValue(16);

  const passwordHash =
    await hashPassword(
      password,
      passwordSalt
    );

  let result;

  try {
    result = await env.DB.prepare(`
      INSERT INTO users (
        email,
        password_hash,
        password_salt
      )
      VALUES (?, ?, ?)
    `)
      .bind(
        email,
        passwordHash,
        passwordSalt
      )
      .run();
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("UNIQUE")
    ) {
      return jsonResponse(
        {
          message:
            "Email is already registered."
        },
        409
      );
    }

    throw error;
  }

  return jsonResponse(
    {
      message:
        "Account created successfully.",
      user: {
        id: result.meta.last_row_id,
        email
      }
    },
    201
  );
}
async function loginUser(request, env) {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { message: "Invalid JSON data." },
      400
    );
  }

  const email =
    typeof body.email === "string"
      ? body.email.trim().toLowerCase()
      : "";

  const password =
    typeof body.password === "string"
      ? body.password
      : "";

  if (!email || !password) {
    return jsonResponse(
      {
        message:
          "Email and password are required."
      },
      400
    );
  }

  const user = await env.DB.prepare(`
    SELECT
      id,
      email,
      password_hash,
      password_salt
    FROM users
    WHERE email = ?
  `)
    .bind(email)
    .first();

  if (!user) {
    return jsonResponse(
      {
        message:
          "Email or password is incorrect."
      },
      401
    );
  }

  const enteredPasswordHash =
    await hashPassword(
      password,
      user.password_salt
    );

  const passwordMatches =
    crypto.subtle.timingSafeEqual(
      base64ToBytes(enteredPasswordHash),
      base64ToBytes(user.password_hash)
    );

  if (!passwordMatches) {
    return jsonResponse(
      {
        message:
          "Email or password is incorrect."
      },
      401
    );
  }

  const sessionToken =
    createRandomValue(32);

  const sessionTokenHash =
    await hashSessionToken(sessionToken);

  const expiresAt = new Date(
    Date.now() + SESSION_MAX_AGE * 1000
  ).toISOString();

  await env.DB.prepare(`
    INSERT INTO sessions (
      token_hash,
      user_id,
      expires_at
    )
    VALUES (?, ?, ?)
  `)
    .bind(
      sessionTokenHash,
      user.id,
      expiresAt
    )
    .run();

  const response = jsonResponse({
    message: "Login successful.",
    user: {
      id: user.id,
      email: user.email
    }
  });

  response.headers.set(
    "Set-Cookie",
    stringifySetCookie({
      name: SESSION_COOKIE_NAME,
      value: sessionToken,
      maxAge: SESSION_MAX_AGE,
      path: "/",
      httpOnly: true,
      secure:
        new URL(request.url).protocol ===
        "https:",
      sameSite: "lax"
    })
  );

  return response;
}

async function getCurrentUser(request, env) {
  const cookies = parseCookie(
    request.headers.get("Cookie") || ""
  );

  const sessionToken =
    cookies[SESSION_COOKIE_NAME];

  if (!sessionToken) {
    return null;
  }

  const sessionTokenHash =
    await hashSessionToken(sessionToken);

  const user = await env.DB.prepare(`
    SELECT
      users.id,
      users.email
    FROM sessions
    JOIN users
      ON users.id = sessions.user_id
    WHERE sessions.token_hash = ?
      AND sessions.expires_at > ?
  `)
    .bind(
      sessionTokenHash,
      new Date().toISOString()
    )
    .first();

  return user || null;
}

async function getMe(request, env) {
  const user = await getCurrentUser(
    request,
    env
  );

  if (!user) {
    return jsonResponse(
      { message: "Not authenticated." },
      401
    );
  }

  return jsonResponse({
    user: {
      id: user.id,
      email: user.email
    }
  });
}
async function logoutUser(request, env) {
  const cookies = parseCookie(
    request.headers.get("Cookie") || ""
  );

  const sessionToken =
    cookies[SESSION_COOKIE_NAME];

  if (sessionToken) {
    const sessionTokenHash =
      await hashSessionToken(sessionToken);

    await env.DB.prepare(`
      DELETE FROM sessions
      WHERE token_hash = ?
    `)
      .bind(sessionTokenHash)
      .run();
  }

  const response = jsonResponse({
    message: "Logout successful."
  });

  response.headers.append(
    "Set-Cookie",
    stringifySetCookie({
      name: SESSION_COOKIE_NAME,
      value: "",
      maxAge: 0,
      path: "/",
      httpOnly: true,
      secure:
        new URL(request.url).protocol === "https:",
      sameSite: "lax"
    })
  );

  return response;
}

function formatTask(task) {
  return {
    id: task.id,
    text: task.text,
    dueDate: task.dueDate || "",
    priority: task.priority || "medium",
    category: task.category || "personal",
    completed: Boolean(task.completed)
  };
}

function getTaskData(body) {
  const text =
    typeof body.text === "string"
      ? body.text.trim()
      : "";

  const dueDate =
    typeof body.dueDate === "string"
      ? body.dueDate
      : "";

  const validPriorities = [
    "low",
    "medium",
    "high"
  ];

  const priority = validPriorities.includes(
    body.priority
  )
    ? body.priority
    : "medium";

  const validCategories = [
    "personal",
    "work",
    "study"
  ];

  const category = validCategories.includes(
    body.category
  )
    ? body.category
    : "personal";

  const completed =
    body.completed === true ? 1 : 0;

  return {
    text,
    dueDate,
    priority,
    category,
    completed
  };
}

async function getTasks(env, userId) {
  const result = await env.DB.prepare(`
    SELECT
      id,
      text,
      due_date AS dueDate,
      priority,
      category,
      completed
    FROM tasks
    WHERE user_id = ?
    ORDER BY id DESC
  `)
    .bind(userId)
    .all();

  return jsonResponse(
    result.results.map(formatTask)
  );
}

async function createTask(
  request,
  env,
  userId
) {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { message: "Invalid JSON data." },
      400
    );
  }

  const taskData = getTaskData(body);

  if (!taskData.text) {
    return jsonResponse(
      { message: "Task name is required." },
      400
    );
  }

  const result = await env.DB.prepare(`
    INSERT INTO tasks (
      user_id,
      text,
      due_date,
      priority,
      category,
      completed
    )
    VALUES (?, ?, ?, ?, ?, 0)
  `)
    .bind(
      userId,
      taskData.text,
      taskData.dueDate,
      taskData.priority,
      taskData.category
    )
    .run();

  const newTask = await env.DB.prepare(`
    SELECT
      id,
      text,
      due_date AS dueDate,
      priority,
      category,
      completed
    FROM tasks
    WHERE id = ?
      AND user_id = ?
  `)
    .bind(
      result.meta.last_row_id,
      userId
    )
    .first();

  return jsonResponse(
    formatTask(newTask),
    201
  );
}

async function updateTask(
  request,
  env,
  userId,
  taskId
) {
  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      { message: "Invalid JSON data." },
      400
    );
  }

  const taskData = getTaskData(body);

  if (!taskData.text) {
    return jsonResponse(
      { message: "Task name is required." },
      400
    );
  }

  const result = await env.DB.prepare(`
    UPDATE tasks
    SET
      text = ?,
      due_date = ?,
      priority = ?,
      category = ?,
      completed = ?
    WHERE id = ?
      AND user_id = ?
  `)
    .bind(
      taskData.text,
      taskData.dueDate,
      taskData.priority,
      taskData.category,
      taskData.completed,
      taskId,
      userId
    )
    .run();

  if (result.meta.changes === 0) {
    return jsonResponse(
      { message: "Task not found." },
      404
    );
  }

  const updatedTask = await env.DB.prepare(`
    SELECT
      id,
      text,
      due_date AS dueDate,
      priority,
      category,
      completed
    FROM tasks
    WHERE id = ?
      AND user_id = ?
  `)
    .bind(taskId, userId)
    .first();

  return jsonResponse(
    formatTask(updatedTask)
  );
}

async function deleteTask(
  env,
  userId,
  taskId
) {
  const task = await env.DB.prepare(`
    SELECT
      id,
      text,
      due_date AS dueDate,
      priority,
      category,
      completed
    FROM tasks
    WHERE id = ?
      AND user_id = ?
  `)
    .bind(
      taskId,
      userId
    )
    .first();

  if (!task) {
    return jsonResponse(
      { message: "Task not found." },
      404
    );
  }

  await env.DB.prepare(`
    DELETE FROM tasks
    WHERE id = ?
      AND user_id = ?
  `)
    .bind(
      taskId,
      userId
    )
    .run();

  return jsonResponse({
    message: "Task deleted successfully.",
    task: formatTask(task)
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {

if (pathname === "/api/auth/register") {
  if (request.method === "POST") {
    return await registerUser(
      request,
      env
    );
  }

  return jsonResponse(
    { message: "Method not allowed." },
    405
  );
}

if (pathname === "/api/auth/login") {
  if (request.method === "POST") {
    return await loginUser(
      request,
      env
    );
  }

  return jsonResponse(
    { message: "Method not allowed." },
    405
  );
}

if (pathname === "/api/auth/logout") {
  if (request.method === "POST") {
    return await logoutUser(
      request,
      env
    );
  }

  return jsonResponse(
    { message: "Method not allowed." },
    405
  );
}

if (pathname === "/api/auth/me") {
  if (request.method === "GET") {
    return await getMe(request, env);
  }

  return jsonResponse(
    { message: "Method not allowed." },
    405
  );
}


     if (pathname === "/api/tasks") {
  const currentUser = await getCurrentUser(
    request,
    env
  );

  if (!currentUser) {
    return jsonResponse(
      { message: "Not authenticated." },
      401
    );
  }

  if (request.method === "GET") {
    return await getTasks(
      env,
      currentUser.id
    );
  }

  if (request.method === "POST") {
    return await createTask(
      request,
      env,
      currentUser.id
    );
  }

  return jsonResponse(
    { message: "Method not allowed." },
    405
  );
}
      const taskRoute =
        pathname.match(
          /^\/api\/tasks\/(\d+)$/
        );

      if (taskRoute) {
        const taskId = Number(taskRoute[1]);
        const currentUser = await getCurrentUser(
  request,
  env
);

if (!currentUser) {
  return jsonResponse(
    { message: "Not authenticated." },
    401
  );
}
        if (request.method === "PUT") {
          return await updateTask(
            request,
            env,
            currentUser.id,
            taskId
          );
        }

        if (request.method === "DELETE") {
          return await deleteTask(
            env,
            currentUser.id,
            taskId
          );
        }

        return jsonResponse(
          { message: "Method not allowed." },
          405
        );
      }

      if (pathname.startsWith("/api/")) {
        return jsonResponse(
          { message: "API route not found." },
          404
        );
      }

      return env.ASSETS.fetch(request);
    } catch (error) {
      console.error(
        JSON.stringify({
          event: "api_error",
          path: pathname,
          message:
            error instanceof Error
              ? error.message
              : "Unknown error"
        })
      );

      return jsonResponse(
        { message: "Internal server error." },
        500
      );
    }
  }
};
