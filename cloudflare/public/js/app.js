const translations = {
  en: {
    title: "Weekly To-Do List", welcome: "Welcome",
    authDescription: "Log in or create an account to manage your tasks.",
    login: "Log In", register: "Register", email: "Email", password: "Password",
    createAccount: "Create Account", logout: "Log Out", today: "Today",
    addNewTask: "Add a new task", taskPlaceholder: "Task name...", dueDate: "Due date", datePlaceholder: "MM/DD/YYYY",
    priority: "Priority", category: "Category", low: "Low", medium: "Medium", high: "High",
    personal: "Personal", work: "Work", study: "Study", addTask: "Add Task",
    searchPlaceholder: "Search tasks...", all: "All", weeklyProgress: "Weekly Progress",
    defaultOrder: "Default order", dueDateSort: "Due date", todaySummary: "Today's summary",
    todayMessage: "Stay focused and make it a productive day!", noTasksYet: "No tasks yet. Add your first task!",
    completeWeek: "Complete Week", uncompleteWeek: "Uncomplete Week",
    clearCompleted: "Clear Completed", resetAll: "Reset All Data", editTask: "Edit task",
    taskName: "Task name", cancel: "Cancel", saveChanges: "Save changes", deleteTaskQuestion: "Delete task?",
    deletePrompt: "Are you sure you want to delete", delete: "Delete", edit: "Edit",
    language: "Language", dark: "Dark", light: "Light", switchDark: "Switch to dark mode", switchLight: "Switch to light mode",
    loadingTasks: "Loading tasks...", loading: "Loading...", adding: "Adding...", saving: "Saving...", deleting: "Deleting...",
    tasksCompleted: "{done} of {total} completed", taskCount: "{count} task", tasksCount: "{count} tasks",
    noTasksPlanned: "No tasks planned", overdue: "Overdue", due: "Due: {date}", markComplete: "Mark \"{task}\" as complete",
    editNamed: "Edit \"{task}\"", deleteNamed: "Delete \"{task}\"", closeEdit: "Close edit modal",
    previousWeek: "Previous week", nextWeek: "Next week", weekNavigation: "Week navigation",
    searchTasks: "Search tasks", filterCategory: "Filter tasks by category", sortTasks: "Sort tasks",
    pleaseTask: "Please enter a task name.", pleaseDate: "Please choose a date for this task.", pastDate: "Due date cannot be in the past.",
    emptyTask: "Task name cannot be empty.", added: "Task added successfully.", updated: "Task updated successfully.",
    deleted: "Task deleted successfully.", loginSuccess: "Login successful.", logoutSuccess: "Logout successful.",
    accountCreated: "Account created. You can now log in.", loggingIn: "Logging in...", loggingOut: "Logging out...", creating: "Creating..."
  },
  ja: {
    title: "週間 To-Do リスト", welcome: "ようこそ", authDescription: "ログインまたはアカウントを作成して、タスクを管理しましょう。",
    login: "ログイン", register: "新規登録", email: "メールアドレス", password: "パスワード",
    createAccount: "アカウントを作成", logout: "ログアウト", today: "今日",
    addNewTask: "新しいタスクを追加", taskPlaceholder: "タスク名...", dueDate: "期限", datePlaceholder: "年/月/日", priority: "優先度", category: "カテゴリー",
    low: "低", medium: "中", high: "高", personal: "個人", work: "仕事", study: "勉強", addTask: "タスクを追加",
    searchPlaceholder: "タスクを検索...", all: "すべて", weeklyProgress: "週間の進捗", defaultOrder: "標準順", dueDateSort: "期限順",
    todaySummary: "今日の概要", todayMessage: "集中して、充実した一日にしましょう！", noTasksYet: "タスクはまだありません。最初のタスクを追加しましょう！",
    completeWeek: "今週をすべて完了", uncompleteWeek: "今週を未完了に戻す", clearCompleted: "完了済みを削除", resetAll: "全データをリセット",
    editTask: "タスクを編集", taskName: "タスク名", cancel: "キャンセル", saveChanges: "変更を保存", deleteTaskQuestion: "タスクを削除しますか？",
    deletePrompt: "このタスクを削除してもよろしいですか：", delete: "削除", edit: "編集", language: "言語",
    dark: "ダーク", light: "ライト", switchDark: "ダークモードに切り替え", switchLight: "ライトモードに切り替え",
    loadingTasks: "タスクを読み込み中...", loading: "読み込み中...", adding: "追加中...", saving: "保存中...", deleting: "削除中...",
    tasksCompleted: "{total}件中{done}件完了", taskCount: "{count}件", tasksCount: "{count}件", noTasksPlanned: "予定なし",
    overdue: "期限切れ", due: "期限：{date}", markComplete: "「{task}」を完了にする", editNamed: "「{task}」を編集", deleteNamed: "「{task}」を削除",
    closeEdit: "編集画面を閉じる", previousWeek: "前の週", nextWeek: "次の週", weekNavigation: "週の移動", searchTasks: "タスクを検索",
    filterCategory: "カテゴリーで絞り込む", sortTasks: "タスクを並べ替える", pleaseTask: "タスク名を入力してください。", pleaseDate: "日付を選択してください。",
    pastDate: "過去の日付は選択できません。", emptyTask: "タスク名を入力してください。", added: "タスクを追加しました。", updated: "タスクを更新しました。",
    deleted: "タスクを削除しました。", loginSuccess: "ログインしました。", logoutSuccess: "ログアウトしました。", accountCreated: "アカウントを作成しました。ログインできます。",
    loggingIn: "ログイン中...", loggingOut: "ログアウト中...", creating: "作成中..."
  },
  vi: {
    title: "Danh sách việc trong tuần", welcome: "Chào mừng", authDescription: "Đăng nhập hoặc tạo tài khoản để quản lý công việc của bạn.",
    login: "Đăng nhập", register: "Đăng ký", email: "Email", password: "Mật khẩu", createAccount: "Tạo tài khoản", logout: "Đăng xuất", today: "Hôm nay",
    addNewTask: "Thêm công việc mới", taskPlaceholder: "Tên công việc...", dueDate: "Hạn hoàn thành", datePlaceholder: "DD/MM/YYYY", priority: "Ưu tiên", category: "Danh mục",
    low: "Thấp", medium: "Trung bình", high: "Cao", personal: "Cá nhân", work: "Công việc", study: "Học tập", addTask: "Thêm việc",
    searchPlaceholder: "Tìm công việc...", all: "Tất cả", weeklyProgress: "Tiến độ tuần", defaultOrder: "Thứ tự mặc định", dueDateSort: "Theo hạn",
    todaySummary: "Tóm tắt hôm nay", todayMessage: "Hãy tập trung để có một ngày thật hiệu quả!", noTasksYet: "Chưa có công việc. Hãy thêm công việc đầu tiên!",
    completeWeek: "Hoàn thành cả tuần", uncompleteWeek: "Bỏ hoàn thành cả tuần", clearCompleted: "Xóa việc đã xong", resetAll: "Xóa toàn bộ dữ liệu",
    editTask: "Sửa công việc", taskName: "Tên công việc", cancel: "Hủy", saveChanges: "Lưu thay đổi", deleteTaskQuestion: "Xóa công việc?",
    deletePrompt: "Bạn có chắc muốn xóa", delete: "Xóa", edit: "Sửa", language: "Ngôn ngữ", dark: "Tối", light: "Sáng",
    switchDark: "Chuyển sang giao diện tối", switchLight: "Chuyển sang giao diện sáng", loadingTasks: "Đang tải công việc...", loading: "Đang tải...",
    adding: "Đang thêm...", saving: "Đang lưu...", deleting: "Đang xóa...", tasksCompleted: "Đã xong {done}/{total}", taskCount: "{count} việc", tasksCount: "{count} việc",
    noTasksPlanned: "Chưa có việc", overdue: "Quá hạn", due: "Hạn: {date}", markComplete: "Đánh dấu \"{task}\" là hoàn thành",
    editNamed: "Sửa \"{task}\"", deleteNamed: "Xóa \"{task}\"", closeEdit: "Đóng cửa sổ chỉnh sửa", previousWeek: "Tuần trước", nextWeek: "Tuần sau",
    weekNavigation: "Chuyển tuần", searchTasks: "Tìm công việc", filterCategory: "Lọc theo danh mục", sortTasks: "Sắp xếp công việc",
    pleaseTask: "Vui lòng nhập tên công việc.", pleaseDate: "Vui lòng chọn ngày cho công việc.", pastDate: "Không thể chọn ngày trong quá khứ.",
    emptyTask: "Tên công việc không được để trống.", added: "Đã thêm công việc.", updated: "Đã cập nhật công việc.", deleted: "Đã xóa công việc.",
    loginSuccess: "Đăng nhập thành công.", logoutSuccess: "Đăng xuất thành công.", accountCreated: "Đã tạo tài khoản. Bạn có thể đăng nhập.",
    loggingIn: "Đang đăng nhập...", loggingOut: "Đang đăng xuất...", creating: "Đang tạo..."
  }
};

const supportedLanguages = ["en", "ja", "vi"];
let currentLanguage = localStorage.getItem("language") || "en";
if (!supportedLanguages.includes(currentLanguage)) currentLanguage = "en";

function t(key, values = {}) {
  let text = translations[currentLanguage][key] || translations.en[key] || key;
  Object.entries(values).forEach(function ([name, value]) {
    text = text.replaceAll(`{${name}}`, value);
  });
  return text;
}

function getLocale() {
  return { en: "en-US", ja: "ja-JP", vi: "vi-VN" }[currentLanguage];
}

function syncDateDisplay(dateInput, displayInput) {
  displayInput.placeholder = t("datePlaceholder");

  if (!dateInput.value) {
    displayInput.value = "";
    return;
  }

  const date = new Date(`${dateInput.value}T00:00:00`);

  displayInput.value = new Intl.DateTimeFormat(getLocale(), {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

const toast = document.querySelector(".toast");
const authPanel =
  document.querySelector(".auth-panel");

const authTabs =
  document.querySelectorAll(".auth-tab");

const loginForm =
  document.querySelector(".login-form");

const registerForm =
  document.querySelector(".register-form");

const authMessage =
  document.querySelector(".auth-message");

const loginEmailInput =
  document.querySelector("#login-email");
const loginPasswordInput =
  document.querySelector("#login-password");

const loginSubmitButton =
  loginForm.querySelector(
    'button[type="submit"]'
  );

const userBar =
  document.querySelector(".user-bar");

const userEmail =
  document.querySelector(".user-email");

const logoutButton =
  document.querySelector(".logout-button");

const todoPanel =
  document.querySelector(".todo-panel");
const weekRange =
  document.querySelector(".week-range");

const previousWeekButton =
  document.querySelector(
    ".previous-week-button"
  );

const currentWeekButton =
  document.querySelector(
    ".current-week-button"
  );

const nextWeekButton =
  document.querySelector(
    ".next-week-button"
  );
  const registerEmailInput =
  document.querySelector("#register-email");
const registerPasswordInput =
  document.querySelector(
    "#register-password"
  );

const registerSubmitButton =
  registerForm.querySelector(
    'button[type="submit"]'
  );
  const deleteModal =
  document.querySelector(".delete-modal");

const deleteModalBackdrop =
  document.querySelector(".delete-modal-backdrop");

const deleteTaskName =
  document.querySelector(".delete-task-name");

const deleteModalCancel =
  document.querySelector(".delete-modal-cancel");

const deleteModalConfirm =
  document.querySelector(".delete-modal-confirm");
const editModal =
  document.querySelector(".edit-modal");

const editForm =
  document.querySelector(".edit-form");

const editTaskInput =
  document.querySelector("#edit-task-input");

const editDueDateInput =
  document.querySelector("#edit-due-date-input");
const editDueDateDisplay =
  document.querySelector("#edit-due-date-display");

const editPriorityInput =
  document.querySelector("#edit-priority-input");

const editCategoryInput =
  document.querySelector("#edit-category-input");

const editFormError =
  document.querySelector(".edit-form-error");

const modalCloseButton =
  document.querySelector(".modal-close-button");

const modalCancelButton =
  document.querySelector(".modal-cancel-button");

const modalBackdrop =
  document.querySelector(".modal-backdrop");
const themeButton =
  document.querySelector(".theme-button");
const toggleAllButton = document.querySelector(
  ".toggle-all-button"
);const formError = document.querySelector(".form-error");
const resetButton = document.querySelector(".reset-button");
const emptyState = document.querySelector(".empty-state");
const progressText = document.querySelector(".progress-text");
const progressBar = document.querySelector(".progress-bar");
const todayDate = document.querySelector(".today-date");
const todayTaskCount = document.querySelector(
  ".today-task-count"
);
const todayCompletedCount = document.querySelector(
  ".today-completed-count"
);
const searchInput = document.querySelector("#search-input");
const sortInput = document.querySelector("#sort-input");
const dueDateInput = document.querySelector("#due-date-input");
const dueDateDisplay = document.querySelector("#due-date-display");
const priorityInput = document.querySelector("#priority-input");
const categoryInput =
  document.querySelector("#category-input");
const clearCompletedButton = document.querySelector(".clear-completed-button");
const taskForm = document.querySelector(".task-form");
const addTaskButton =
  taskForm.querySelector('button[type="submit"]');
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".task-count");
const filterButtons = document.querySelectorAll(".filter-button");
const editSaveButton =
  editForm.querySelector('button[type="submit"]');
const languageButtons =
  document.querySelectorAll(".language-button");
const today = new Date();

const currentYear = today.getFullYear();
const currentMonth = String(
  today.getMonth() + 1
).padStart(2, "0");

const currentDay = String(
  today.getDate()
).padStart(2, "0");

const todayString =
  `${currentYear}-${currentMonth}-${currentDay}`;

dueDateInput.min = todayString;
const API_URL = "/api/tasks";

let tasks = [];
let displayedWeekStart =
  getStartOfWeek(new Date());
let currentFilter = "all";
let editingTaskId = null;
let deletingTaskId = null;
let lastFocusedElement = null;
function getStartOfWeek(date) {
  const start = new Date(date);

  start.setHours(0, 0, 0, 0);

  const day = start.getDay();

  const daysFromMonday =
    day === 0 ? 6 : day - 1;

  start.setDate(
    start.getDate() - daysFromMonday
  );

  return start;
}

function getEndOfWeek(weekStart) {
  const end = new Date(weekStart);

  end.setDate(end.getDate() + 6);

  return end;
}

function formatWeekDate(date) {
  return new Intl.DateTimeFormat(
    getLocale(),
    {
      month: "short",
      day: "numeric",
      year: "numeric"
    }
  ).format(date);
}

function toDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getDisplayedWeekTasks() {
  const weekStart = toDateString(displayedWeekStart);
  const weekEnd = toDateString(
    getEndOfWeek(displayedWeekStart)
  );

  return tasks.filter(function (task) {
    return task.dueDate >= weekStart && task.dueDate <= weekEnd;
  });
}

function updateWeekRange() {
  const weekEnd =
    getEndOfWeek(displayedWeekStart);

  weekRange.textContent =
    `${formatWeekDate(displayedWeekStart)} — ` +
    `${formatWeekDate(weekEnd)}`;
}

function changeDisplayedWeek(days) {
  const newWeekStart =
    new Date(displayedWeekStart);

  newWeekStart.setDate(
    newWeekStart.getDate() + days
  );

  displayedWeekStart = newWeekStart;

  updateWeekRange();
  renderTasks();
}
const savedTheme =
  localStorage.getItem("theme");

function updateThemeButton(isDarkMode) {
  const label =
    themeButton.querySelector(".theme-label");

  label.textContent = isDarkMode ? t("light") : t("dark");

  const action = isDarkMode ? t("switchLight") : t("switchDark");

  themeButton.setAttribute("aria-label", action);
  themeButton.title = action;
}

function setText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key);
}

function setOptionText(selector, value, key) {
  const option = document.querySelector(`${selector} option[value="${value}"]`);
  if (option) option.textContent = t(key);
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("title");

  setText(".app-header h1", "title");
  setText("#auth-title", "welcome");
  setText(".auth-description", "authDescription");
  setText('[data-auth-view="login"]', "login");
  setText('[data-auth-view="register"]', "register");
  setText('label[for="login-email"]', "email");
  setText('label[for="login-password"]', "password");
  setText('label[for="register-email"]', "email");
  setText('label[for="register-password"]', "password");
  setText('.login-form button[type="submit"]', "login");
  setText('.register-form button[type="submit"]', "createAccount");
  setText(".logout-button", "logout");
  setText(".current-week-button", "today");
  setText('label[for="task-input"]', "addNewTask");
  setText(".task-form button[type=submit]", "addTask");
  setText(".task-progress strong", "weeklyProgress");
  setText(".today-summary h2", "today");
  setText(".today-summary div:first-child > span", "todayMessage");
  setText(".empty-state", "noTasksYet");
  setText("#edit-modal-title", "editTask");
  setText('label[for="edit-task-input"]', "taskName");
  setText('label[for="edit-due-date-input"]', "dueDate");
  setText('label[for="edit-priority-input"]', "priority");
  setText('label[for="edit-category-input"]', "category");
  setText(".modal-cancel-button", "cancel");
  setText(".modal-save-button", "saveChanges");
  setText("#delete-modal-title", "deleteTaskQuestion");
  setText(".delete-modal-cancel", "cancel");
  setText(".delete-modal-confirm", "delete");

  document.querySelector("#delete-modal-message").firstChild.textContent = `${t("deletePrompt")} `;
  taskInput.placeholder = t("taskPlaceholder");
  searchInput.placeholder = t("searchPlaceholder");
  syncDateDisplay(dueDateInput, dueDateDisplay);
  syncDateDisplay(editDueDateInput, editDueDateDisplay);
  dueDateInput.setAttribute("aria-label", t("dueDate"));
  priorityInput.setAttribute("aria-label", t("priority"));
  categoryInput.setAttribute("aria-label", t("category"));
  searchInput.setAttribute("aria-label", t("searchTasks"));
  sortInput.setAttribute("aria-label", t("sortTasks"));
  previousWeekButton.setAttribute("aria-label", t("previousWeek"));
  nextWeekButton.setAttribute("aria-label", t("nextWeek"));
  document.querySelector(".week-navigation").setAttribute("aria-label", t("weekNavigation"));
  document.querySelector(".filters").setAttribute("aria-label", t("filterCategory"));
  document.querySelector(".today-summary").setAttribute("aria-label", t("todaySummary"));
  modalCloseButton.setAttribute("aria-label", t("closeEdit"));
  document.querySelector(".language-switcher").setAttribute("aria-label", t("language"));

  ["#priority-input", "#edit-priority-input"].forEach(function (selector) {
    ["low", "medium", "high"].forEach(function (value) { setOptionText(selector, value, value); });
  });
  ["#category-input", "#edit-category-input"].forEach(function (selector) {
    ["personal", "work", "study"].forEach(function (value) { setOptionText(selector, value, value); });
  });
  setOptionText("#sort-input", "default", "defaultOrder");
  setOptionText("#sort-input", "priority", "priority");
  setOptionText("#sort-input", "due-date", "dueDateSort");

  filterButtons.forEach(function (button) {
    const dot = button.querySelector(".filter-dot");
    const text = t(button.dataset.filter);
    if (dot) {
      button.replaceChildren(dot, document.createTextNode(text));
    } else {
      button.textContent = text;
    }
  });

  languageButtons.forEach(function (button) {
    const selected = button.dataset.language === currentLanguage;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  updateThemeButton(document.body.classList.contains("dark-theme"));
  updateWeekRange();
  renderTasks();
}

function setUserEmail(email = "") {
  userEmail.textContent = email;
  userEmail.title = email;
}

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
}

updateThemeButton(savedTheme === "dark");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}

function setButtonLoading(
  button,
  isLoading,
  loadingText
) {
  if (isLoading) {
    button.dataset.originalText = button.textContent;
    button.textContent = loadingText;
    button.disabled = true;
    return;
  }

  button.textContent =
    button.dataset.originalText || button.textContent;
  button.disabled = false;
  delete button.dataset.originalText;
}

function setTaskFormLoading(
  isLoading,
  loadingText = t("adding")
) {
  taskInput.disabled = isLoading;
  dueDateInput.disabled = isLoading;
  priorityInput.disabled = isLoading;
  categoryInput.disabled = isLoading;

  setButtonLoading(
    addTaskButton,
    isLoading,
    loadingText
  );
}

async function loadTasks() {
  emptyState.hidden = false;
  emptyState.textContent = t("loadingTasks");
  setTaskFormLoading(true, t("loading"));

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Cannot load tasks.");
    }

    tasks = await response.json();
    renderTasks();
  } catch (error) {
    console.error(error);

    tasks = [];
    taskList.innerHTML = "";
    emptyState.hidden = false;
    emptyState.textContent =
      "Unable to load tasks. Make sure the backend is running.";

    toggleAllButton.disabled = true;
    resetButton.disabled = true;
    clearCompletedButton.disabled = true;
    updateTaskCount();

    showToast(
      "Unable to connect to the backend."
    );
  } finally {
    setTaskFormLoading(false);
  }
}

async function checkAuthSession() {
  try {
    const response = await fetch("/api/auth/me");

    if (!response.ok) {
      authPanel.hidden = false;
      userBar.hidden = true;
      todoPanel.hidden = true;
      return;
    }

    const data = await response.json();

    authPanel.hidden = true;
    userBar.hidden = false;
    todoPanel.hidden = false;
    setUserEmail(data.user.email);

    await loadTasks();
  } catch (error) {
    console.error(error);
    authPanel.hidden = false;
    userBar.hidden = true;
    todoPanel.hidden = true;
  }
}

async function createTaskOnServer(taskData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskData)
  });

  if (!response.ok) {
    throw new Error("Cannot create task.");
  }

  return response.json();
}

async function updateTaskOnServer(task) {
  const response = await fetch(
    `${API_URL}/${task.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    }
  );

  if (!response.ok) {
    throw new Error("Cannot update task.");
  }

  return response.json();
}

async function deleteTaskOnServer(taskId) {
  const response = await fetch(
    `${API_URL}/${taskId}`,
    { method: "DELETE" }
  );

  if (!response.ok) {
    throw new Error("Cannot delete task.");
  }

  return response.json();
}

function updateTaskCount() {
  const weekTasks = getDisplayedWeekTasks();
  const totalTasks = weekTasks.length;

  const completedTasks = weekTasks.filter(function (task) {
    return task.completed;
  }).length;

  taskCount.textContent =
    t("tasksCompleted", { done: completedTasks, total: totalTasks });

  let progressPercentage = 0;

  if (totalTasks > 0) {
    progressPercentage = Math.round(
      (completedTasks / totalTasks) * 100
    );
  }

  progressText.textContent =
    `${progressPercentage}%`;

  progressBar.style.width =
    `${progressPercentage}%`;

  const todayTasks = tasks.filter(function (task) {
    return task.dueDate === todayString;
  });

  const todayCompleted = todayTasks.filter(function (task) {
    return task.completed;
  }).length;

  todayDate.textContent = new Intl.DateTimeFormat(getLocale(), {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(today);

  todayTaskCount.textContent = t(
    todayTasks.length === 1 ? "taskCount" : "tasksCount",
    { count: todayTasks.length }
  );
  todayCompletedCount.textContent =
    t("tasksCompleted", { done: todayCompleted, total: todayTasks.length });
}
function createTaskElement(task) {
  const taskItem = document.createElement("li"); taskItem.classList.add("task-item"); taskItem.dataset.taskId = task.id; taskItem.classList.toggle("completed", task.completed);
  const taskLabel = document.createElement("div"); taskLabel.classList.add("task-label");
  const checkbox = document.createElement("input"); checkbox.type = "checkbox"; checkbox.checked = task.completed;
  checkbox.setAttribute(
  "aria-label",
  t("markComplete", { task: task.text })
);
  const taskName = document.createElement("span"); taskName.textContent = task.text;
  const taskContent = document.createElement("div"); taskContent.classList.add("task-content"); taskContent.append(taskName);
  if (task.dueDate) {
    const dueDate = document.createElement("small"); dueDate.classList.add("due-date");
    const formattedDate = new Intl.DateTimeFormat(getLocale(), { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${task.dueDate}T00:00:00`));
    dueDate.textContent = t("due", { date: formattedDate }); taskContent.append(dueDate);
    const today = new Date(); today.setHours(0, 0, 0, 0); const taskDueDate = new Date(`${task.dueDate}T00:00:00`);
    if (taskDueDate < today && !task.completed) { const overdueLabel = document.createElement("small"); overdueLabel.classList.add("overdue-label"); overdueLabel.textContent = t("overdue"); taskContent.append(overdueLabel); taskItem.classList.add("overdue"); }
  }
  const priority = document.createElement("small"); priority.classList.add("task-priority", `priority-${task.priority || "medium"}`); priority.textContent = t(task.priority || "medium"); taskContent.append(priority);

  const category = document.createElement("small");

category.classList.add(
  "task-category",
  `category-${task.category || "personal"}`
);

const categoryName =
  task.category || "personal";

category.textContent = t(categoryName);

taskContent.append(category);
  const editButton = document.createElement("button"); editButton.classList.add("edit-button"); editButton.type = "button"; editButton.textContent = t("edit");editButton.setAttribute(
  "aria-label",
  t("editNamed", { task: task.text })
);
  const deleteButton = document.createElement("button"); deleteButton.classList.add("delete-button"); deleteButton.type = "button"; deleteButton.textContent = t("delete");deleteButton.setAttribute(
  "aria-label",
  t("deleteNamed", { task: task.text })
);
  const taskActions = document.createElement("div"); taskActions.classList.add("task-actions"); taskActions.append(editButton, deleteButton);
  taskLabel.append(checkbox, taskContent); taskItem.append(taskLabel, taskActions); return taskItem;
}
resetButton.addEventListener("click", async function () {
  if (tasks.length === 0) {
    alert("There are no tasks to reset.");
    return;
  }

  const shouldReset = confirm(
    "Are you sure you want to delete all tasks?"
  );

  if (!shouldReset) {
    return;
  }

  try {
    await Promise.all(
      tasks.map(function (task) {
        return deleteTaskOnServer(task.id);
      })
    );

    tasks = [];
  } catch (error) {
    console.error(error);
    showToast("Unable to reset tasks.");
    return;
  }

  searchInput.value = "";
  currentFilter = "all";
  sortInput.value = "default";

  filterButtons.forEach(function (button) {
    button.classList.toggle(
      "active",
      button.dataset.filter === "all"
    );
  });

  renderTasks();
});
function renderTasks() {
  taskList.innerHTML = "";
  const weekStartString = toDateString(displayedWeekStart);
  const weekEndString = toDateString(
    getEndOfWeek(displayedWeekStart)
  );

  let visibleTasks = tasks.filter(function (task) {
    const isInWeek =
      task.dueDate >= weekStartString &&
      task.dueDate <= weekEndString;

    return isInWeek && (
      currentFilter === "all" ||
      (task.category || "personal") === currentFilter
    );
  });
  const searchText = searchInput.value.trim().toLowerCase();
  if (searchText !== "") visibleTasks = visibleTasks.filter(function (task) { return task.text.toLowerCase().includes(searchText); });
  if (sortInput.value === "priority") { const priorityOrder = { high: 1, medium: 2, low: 3 }; visibleTasks.sort(function (a, b) { return priorityOrder[a.priority || "medium"] - priorityOrder[b.priority || "medium"]; }); }
  if (sortInput.value === "due-date") visibleTasks.sort(function (a, b) { if (!a.dueDate) return 1; if (!b.dueDate) return -1; return a.dueDate.localeCompare(b.dueDate); });

  for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
    const dayDate = new Date(displayedWeekStart);
    dayDate.setDate(dayDate.getDate() + dayIndex);

    const dayDateString = toDateString(dayDate);
    const dayTasks = visibleTasks.filter(function (task) {
      return task.dueDate === dayDateString;
    });

    const section = document.createElement("li");
    section.className = "week-day-section";
    section.classList.toggle(
      "is-today",
      dayDateString === todayString
    );

    const header = document.createElement("header");
    header.className = "day-header";

    const dayName = document.createElement("h3");
    dayName.textContent = new Intl.DateTimeFormat(getLocale(), {
      weekday: "long"
    }).format(dayDate);

    const dateLabel = document.createElement("span");
    dateLabel.className = "day-date";
    dateLabel.textContent = new Intl.DateTimeFormat(getLocale(), {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(dayDate);

    const count = document.createElement("span");
    count.className = "day-count";
    count.textContent = t(
      dayTasks.length === 1 ? "taskCount" : "tasksCount",
      { count: dayTasks.length }
    );

    header.append(dayName, dateLabel);

    if (dayDateString === todayString) {
      const todayBadge = document.createElement("span");
      todayBadge.className = "today-badge";
      todayBadge.textContent = t("today");
      header.append(todayBadge);
    }

    header.append(count);

    const dayList = document.createElement("ul");
    dayList.className = "day-task-list";

    if (dayTasks.length === 0) {
      const emptyDay = document.createElement("li");
      emptyDay.className = "day-empty";
      emptyDay.textContent = t("noTasksPlanned");
      dayList.append(emptyDay);
    } else {
      dayTasks.forEach(function (task) {
        dayList.append(createTaskElement(task));
      });
    }

    const completedDayTasks = dayTasks.filter(function (task) {
      return task.completed;
    }).length;

    const dayProgressPercentage = dayTasks.length === 0
      ? 0
      : Math.round((completedDayTasks / dayTasks.length) * 100);

    const dayProgress = document.createElement("footer");
    dayProgress.className = "day-progress";
    dayProgress.innerHTML = `
      <span class="day-progress-track">
        <span class="day-progress-bar" style="width: ${dayProgressPercentage}%"></span>
      </span>
      <span>${completedDayTasks}/${dayTasks.length}</span>
    `;

    section.append(header, dayList, dayProgress);
    taskList.append(section);
  }

  emptyState.hidden = true;

  const weekTasks = getDisplayedWeekTasks();
  const allTasksCompleted =
  weekTasks.length > 0 &&
  weekTasks.every(function (task) {
    return task.completed;
  });

toggleAllButton.textContent = allTasksCompleted
  ? t("uncompleteWeek")
  : t("completeWeek");

clearCompletedButton.textContent = t("clearCompleted");
resetButton.textContent = t("resetAll");

const hasTasks = weekTasks.length > 0;

const hasCompletedTasks = weekTasks.some(function (task) {
  return task.completed;
});

toggleAllButton.disabled = !hasTasks;
resetButton.disabled = tasks.length === 0;
clearCompletedButton.disabled = !hasCompletedTasks;

updateTaskCount();
}

dueDateInput.addEventListener("change", function () {
  syncDateDisplay(dueDateInput, dueDateDisplay);
});

editDueDateInput.addEventListener("change", function () {
  syncDateDisplay(editDueDateInput, editDueDateDisplay);
});


taskForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  const selectedDate = dueDateInput.value;

  formError.hidden = true;
  formError.textContent = "";

  if (taskText === "") {
    formError.textContent =
      t("pleaseTask");

    formError.hidden = false;
    taskInput.focus();
    return;
  }

  if (selectedDate === "") {
    formError.textContent =
      t("pleaseDate");

    formError.hidden = false;
    dueDateInput.focus();
    return;
  }

  if (
    selectedDate !== "" &&
    selectedDate < todayString
  ) {
    formError.textContent =
      t("pastDate");

    formError.hidden = false;
    dueDateInput.focus();
    return;
  }

  setTaskFormLoading(true);

  try {
   const newTask = await createTaskOnServer({
  text: taskText,
  dueDate: selectedDate,
  priority: priorityInput.value,
  category: categoryInput.value
});


    tasks.unshift(newTask);
    displayedWeekStart = getStartOfWeek(
      new Date(`${selectedDate}T00:00:00`)
    );
    updateWeekRange();
    renderTasks();
  } catch (error) {
    console.error(error);
    showToast("Unable to add task.");
    return;
  } finally {
    setTaskFormLoading(false);
  }

  showToast(t("added"));
  taskInput.value = "";
  dueDateInput.value = "";
  syncDateDisplay(dueDateInput, dueDateDisplay);
  priorityInput.value = "medium";
  categoryInput.value = "personal";
  taskInput.focus();
});
 taskList.addEventListener("click", function (event) {
  const taskItem = event.target.closest(".task-item");

  if (!taskItem) {
    return;
  }

  const taskId = Number(taskItem.dataset.taskId);

  if (event.target.classList.contains("delete-button")) {
    lastFocusedElement = event.target;
    const task = tasks.find(function (task) {
      return task.id === taskId;
    });

    if (!task) {
      return;
    }

    deletingTaskId = taskId;
    deleteTaskName.textContent = `"${task.text}"`;

    deleteModal.hidden = false;
    document.body.classList.add("modal-open");

    deleteModalConfirm.focus();
  }

  if (event.target.classList.contains("edit-button")) {
    lastFocusedElement = event.target;
    startEditingTask(taskItem, taskId);
  }
});

function startEditingTask(taskItem, taskId) {
  const task = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!task) {
    return;
  }

  editingTaskId = taskId;

  editTaskInput.value = task.text;
  editDueDateInput.value = task.dueDate || "";
  syncDateDisplay(editDueDateInput, editDueDateDisplay);
  editPriorityInput.value =
    task.priority || "medium";

  editCategoryInput.value =
  task.category || "personal";  

  editDueDateInput.min = todayString;

  editFormError.hidden = true;
  editFormError.textContent = "";

  editModal.hidden = false;
  document.body.classList.add("modal-open");

  editTaskInput.focus();
  editTaskInput.select();
}
function closeEditModal() {
  editModal.hidden = true;
  document.body.classList.remove("modal-open");

  editingTaskId = null;

  editForm.reset();
  syncDateDisplay(editDueDateInput, editDueDateDisplay);

  editFormError.hidden = true;
  editFormError.textContent ="";
if (lastFocusedElement) {
  lastFocusedElement.focus();
  lastFocusedElement = null;
}
  
}
function closeDeleteModal() {
  deleteModal.hidden = true;
  document.body.classList.remove("modal-open");

  deletingTaskId = null;
  deleteTaskName.textContent = "";
  if (lastFocusedElement) {
  lastFocusedElement.focus();
  lastFocusedElement = null;
}
}
toggleAllButton.addEventListener("click", async function () {
  const weekTasks = getDisplayedWeekTasks();

  if (weekTasks.length === 0) {
    alert("There are no tasks in this week.");
    return;
  }

  const allTasksCompleted = weekTasks.every(function (task) {
    return task.completed;
  });

  const previousTasks = tasks.map(function (task) {
    return { ...task };
  });

  weekTasks.forEach(function (task) {
    task.completed = !allTasksCompleted;
  });

  try {
    await Promise.all(
      weekTasks.map(updateTaskOnServer)
    );
    renderTasks();
  } catch (error) {
    console.error(error);
    tasks = previousTasks;
    renderTasks();
    showToast("Unable to update tasks.");
  }
});

taskList.addEventListener("change", async function (event) {
  if (event.target.type !== "checkbox") return;

  const taskItem = event.target.closest(".task-item");
  const taskId = Number(taskItem.dataset.taskId);
  const task = tasks.find(function (task) {
    return task.id === taskId;
  });

  if (!task) return;

  const previousCompleted = task.completed;
  task.completed = event.target.checked;

  try {
    await updateTaskOnServer(task);
    renderTasks();
  } catch (error) {
    console.error(error);
    task.completed = previousCompleted;
    renderTasks();
    showToast("Unable to update task.");
  }
});
filterButtons.forEach(function (button) { button.addEventListener("click", function () { currentFilter = button.dataset.filter; filterButtons.forEach(function (filterButton) { filterButton.classList.toggle("active", filterButton === button); }); renderTasks(); }); });
clearCompletedButton.addEventListener("click", async function () {
  const weekTaskIds = new Set(
    getDisplayedWeekTasks().map(function (task) {
      return task.id;
    })
  );

  const completedTasks = tasks.filter(function (task) {
    return task.completed && weekTaskIds.has(task.id);
  });

  try {
    await Promise.all(
      completedTasks.map(function (task) {
        return deleteTaskOnServer(task.id);
      })
    );

    const deletedIds = new Set(
      completedTasks.map(function (task) {
        return task.id;
      })
    );

    tasks = tasks.filter(function (task) {
      return !deletedIds.has(task.id);
    });
    renderTasks();
  } catch (error) {
    console.error(error);
    showToast("Unable to clear completed tasks.");
  }
});
sortInput.addEventListener("change", renderTasks);
searchInput.addEventListener("input", renderTasks);
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  const isDarkMode =
    document.body.classList.contains("dark-theme");

  updateThemeButton(isDarkMode);

  localStorage.setItem(
    "theme",
    isDarkMode ? "dark" : "light"
  );
});

languageButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentLanguage = button.dataset.language;
    localStorage.setItem("language", currentLanguage);
    applyTranslations();
  });
});
editForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const task = tasks.find(function (task) {
    return task.id === editingTaskId;
  });

  if (!task) {
    closeEditModal();
    return;
  }

  const newText = editTaskInput.value.trim();
  const newDueDate = editDueDateInput.value;
  const newPriority = editPriorityInput.value;
  const newCategory = editCategoryInput.value;

  editFormError.hidden = true;
  editFormError.textContent = "";

  if (newText === "") {
    editFormError.textContent =
      t("emptyTask");

    editFormError.hidden = false;
    editTaskInput.focus();
    return;
  }

  if (
    newDueDate !== "" &&
    newDueDate < todayString
  ) {
    editFormError.textContent =
      t("pastDate");

    editFormError.hidden = false;
    editDueDateInput.focus();
    return;
  }

  const previousTask = { ...task };

  task.text = newText;
  task.dueDate = newDueDate;
  task.priority = newPriority;
  task.category = newCategory;

  setButtonLoading(
    editSaveButton,
    true,
    t("saving")
  );

  try {
    const updatedTask = await updateTaskOnServer(task);
    Object.assign(task, updatedTask);
    renderTasks();
  } catch (error) {
    console.error(error);
    Object.assign(task, previousTask);
    showToast("Unable to update task.");
    return;
  } finally {
    setButtonLoading(
      editSaveButton,
      false,
      t("saving")
    );
  }
  closeEditModal();

  showToast(t("updated"));
});

modalCloseButton.addEventListener(
  "click",
  closeEditModal
);

modalCancelButton.addEventListener(
  "click",
  closeEditModal
);

modalBackdrop.addEventListener(
  "click",
  closeEditModal
);

document.addEventListener("keydown", function (event) {
  let activeModal = null;

  if (!editModal.hidden) {
    activeModal = editModal;
  } else if (!deleteModal.hidden) {
    activeModal = deleteModal;
  }

  if (!activeModal) {
    return;
  }

  // Đóng modal bằng Escape
  if (event.key === "Escape") {
    if (activeModal === editModal) {
      closeEditModal();
    } else {
      closeDeleteModal();
    }

    return;
  }

  // Chỉ xử lý thêm khi nhấn Tab
  if (event.key !== "Tab") {
    return;
  }

  const focusableElements =
    activeModal.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled])'
    );

  if (focusableElements.length === 0) {
    return;
  }

  const firstElement = focusableElements[0];

  const lastElement =
    focusableElements[
      focusableElements.length - 1
    ];

  // Shift + Tab tại phần tử đầu
  if (
    event.shiftKey &&
    document.activeElement === firstElement
  ) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  // Tab tại phần tử cuối
  if (
    !event.shiftKey &&
    document.activeElement === lastElement
  ) {
    event.preventDefault();
    firstElement.focus();
  }
});
deleteModalConfirm.addEventListener(
  "click",
  async function () {
    const taskExists = tasks.some(function (task) {
      return task.id === deletingTaskId;
    });

    if (!taskExists) {
      closeDeleteModal();
      return;
    }

    setButtonLoading(
      deleteModalConfirm,
      true,
      t("deleting")
    );

    try {
      await deleteTaskOnServer(deletingTaskId);

      tasks = tasks.filter(function (task) {
        return task.id !== deletingTaskId;
      });

      renderTasks();
    } catch (error) {
      console.error(error);
      showToast("Unable to delete task.");
      return;
    } finally {
      setButtonLoading(
        deleteModalConfirm,
        false,
        t("deleting")
      );
    }
    closeDeleteModal();

    showToast(t("deleted"));
  }
);
deleteModalCancel.addEventListener(
  "click",
  closeDeleteModal
);

deleteModalBackdrop.addEventListener(
  "click",
  closeDeleteModal
);
logoutButton.addEventListener(
  "click",
  async function () {
    setButtonLoading(
      logoutButton,
      true,
      t("loggingOut")
    );

    try {
      const response = await fetch(
        "/api/auth/logout",
        {
          method: "POST"
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Unable to log out."
        );
      }

      tasks = [];
      taskList.innerHTML = "";

      setUserEmail();

      userBar.hidden = true;
      todoPanel.hidden = true;
      authPanel.hidden = false;

      loginForm.hidden = false;
      registerForm.hidden = true;

      authTabs.forEach(function (tab) {
        tab.classList.toggle(
          "active",
          tab.dataset.authView === "login"
        );
      });

      authMessage.hidden = true;
      authMessage.textContent = "";
      authMessage.classList.remove("success");

      loginEmailInput.focus();

      showToast(t("logoutSuccess"));
    } catch (error) {
      console.error(error);
      showToast(
        error.message ||
        "Unable to log out."
      );
    } finally {
      setButtonLoading(
        logoutButton,
        false,
        t("loggingOut")
      );
    }
  }
);
loginForm.addEventListener(
  "submit",
  async function (event) {
    event.preventDefault();

    const email =
      loginEmailInput.value.trim();

    const password =
      loginPasswordInput.value;

    authMessage.hidden = true;
    authMessage.textContent = "";
    authMessage.classList.remove("success");

    setButtonLoading(
      loginSubmitButton,
      true,
      t("loggingIn")
    );

    try {
      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Unable to log in."
        );
      }

      loginForm.reset();

      authPanel.hidden = true;
      userBar.hidden = false;
      todoPanel.hidden = false;

      setUserEmail(data.user.email);

      await loadTasks();

      showToast(t("loginSuccess"));
    } catch (error) {
      console.error(error);

      authMessage.textContent =
        error.message;

      authMessage.classList.remove("success");
      authMessage.hidden = false;
    } finally {
      setButtonLoading(
        loginSubmitButton,
        false,
        t("loggingIn")
      );
    }
  }
);
registerForm.addEventListener(
  "submit",
  async function (event) {
    event.preventDefault();

    const email =
      registerEmailInput.value.trim();

    const password =
      registerPasswordInput.value;

    authMessage.hidden = true;
    authMessage.textContent = "";
    authMessage.classList.remove("success");

    setButtonLoading(
      registerSubmitButton,
      true,
      t("creating")
    );

    try {
      const response = await fetch(
        "/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Unable to create account."
        );
      }

      registerForm.reset();

      loginEmailInput.value = email;
      loginForm.hidden = false;
      registerForm.hidden = true;

      authTabs.forEach(function (tab) {
        tab.classList.toggle(
          "active",
          tab.dataset.authView === "login"
        );
      });

      authMessage.textContent =
        t("accountCreated");

      authMessage.classList.add("success");
      authMessage.hidden = false;

      loginEmailInput.focus();
    } catch (error) {
      console.error(error);

      authMessage.textContent =
        error.message;

      authMessage.classList.remove("success");
      authMessage.hidden = false;
    } finally {
      setButtonLoading(
        registerSubmitButton,
        false,
        t("creating")
      );
    }
  }
);

authTabs.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedView =
      button.dataset.authView;

    const showLogin =
      selectedView === "login";

    loginForm.hidden = !showLogin;
    registerForm.hidden = showLogin;

    authTabs.forEach(function (tab) {
      tab.classList.toggle(
        "active",
        tab === button
      );
    });

    authMessage.hidden = true;
    authMessage.textContent = "";
    authMessage.classList.remove("success");

    if (showLogin) {
      loginEmailInput.focus();
    } else {
      registerEmailInput.focus();
    }
  });
});

previousWeekButton.addEventListener(
  "click",
  function () {
    changeDisplayedWeek(-7);
  }
);

currentWeekButton.addEventListener(
  "click",
  function () {
    displayedWeekStart =
      getStartOfWeek(new Date());

    updateWeekRange();
    renderTasks();
  }
);

nextWeekButton.addEventListener(
  "click",
  function () {
    changeDisplayedWeek(7);
  }
);

applyTranslations();
checkAuthSession();

