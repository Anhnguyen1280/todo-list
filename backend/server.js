const express = require("express");
const cors = require("cors");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const databasePath = path.join(
  __dirname,
  "tasks.db"
);

const database = new DatabaseSync(databasePath);

database.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    due_date TEXT DEFAULT '',
    priority TEXT DEFAULT 'medium',
    completed INTEGER DEFAULT 0
  )
`);

function formatTask(task) {
  return {
    id: task.id,
    text: task.text,
    dueDate: task.due_date,
    priority: task.priority,
    completed: Boolean(task.completed)
  };
}

app.get("/", function (request, response) {
  response.json({
    message: "Todo List backend is running!"
  });
});

app.get("/api/tasks", function (request, response) {
  const statement = database.prepare(`
    SELECT *
    FROM tasks
    ORDER BY id DESC
  `);

  const tasks = statement.all().map(formatTask);

  response.json(tasks);
});

app.post("/api/tasks", function (request, response) {
  const text = request.body.text?.trim();

  if (!text) {
    return response.status(400).json({
      message: "Task name is required."
    });
  }

  const dueDate = request.body.dueDate || "";
  const priority =
    request.body.priority || "medium";

  const statement = database.prepare(`
    INSERT INTO tasks (
      text,
      due_date,
      priority,
      completed
    )
    VALUES (?, ?, ?, 0)
  `);

  const result = statement.run(
    text,
    dueDate,
    priority
  );

  const newTask = database
    .prepare("SELECT * FROM tasks WHERE id = ?")
    .get(result.lastInsertRowid);

  response.status(201).json(
    formatTask(newTask)
  );
});

app.put("/api/tasks/:id", function (
  request,
  response
) {
  const taskId = Number(request.params.id);
  const text = request.body.text?.trim();

  if (!text) {
    return response.status(400).json({
      message: "Task name is required."
    });
  }

  const dueDate = request.body.dueDate || "";
  const priority =
    request.body.priority || "medium";
  const completed =
    request.body.completed === true ? 1 : 0;

  const statement = database.prepare(`
    UPDATE tasks
    SET
      text = ?,
      due_date = ?,
      priority = ?,
      completed = ?
    WHERE id = ?
  `);

  const result = statement.run(
    text,
    dueDate,
    priority,
    completed,
    taskId
  );

  if (Number(result.changes) === 0) {
    return response.status(404).json({
      message: "Task not found."
    });
  }

  const updatedTask = database
    .prepare("SELECT * FROM tasks WHERE id = ?")
    .get(taskId);

  response.json(formatTask(updatedTask));
});

app.delete("/api/tasks/:id", function (
  request,
  response
) {
  const taskId = Number(request.params.id);

  const task = database
    .prepare("SELECT * FROM tasks WHERE id = ?")
    .get(taskId);

  if (!task) {
    return response.status(404).json({
      message: "Task not found."
    });
  }

  database
    .prepare("DELETE FROM tasks WHERE id = ?")
    .run(taskId);

  response.json({
    message: "Task deleted successfully.",
    task: formatTask(task)
  });
});

app.listen(PORT, function () {
  console.log(
    `Server is running at http://localhost:${PORT}`
  );
});