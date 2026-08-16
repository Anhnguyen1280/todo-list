const toast = document.querySelector(".toast");
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

const editPriorityInput =
  document.querySelector("#edit-priority-input");

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
const searchInput = document.querySelector("#search-input");
const sortInput = document.querySelector("#sort-input");
const dueDateInput = document.querySelector("#due-date-input");
const priorityInput = document.querySelector("#priority-input");
const clearCompletedButton = document.querySelector(".clear-completed-button");
const taskForm = document.querySelector(".task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");
const taskCount = document.querySelector(".task-count");
const filterButtons = document.querySelectorAll(".filter-button");
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
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let editingTaskId = null;
let deletingTaskId = null;
let lastFocusedElement = null;
const savedTheme =
  localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeButton.textContent = "Light Mode";
}
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}
function saveTasks() { localStorage.setItem("tasks", JSON.stringify(tasks)); }
function updateTaskCount() {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(function (task) {
    return task.completed;
  }).length;

  const remainingTasks = totalTasks - completedTasks;

  const taskWord = remainingTasks === 1 ? "task" : "tasks";

  taskCount.textContent =
    `${remainingTasks} ${taskWord} remaining`;

  let progressPercentage = 0;

  if (totalTasks > 0) {
    progressPercentage = Math.round(
      (completedTasks / totalTasks) * 100
    );
  }

  progressText.textContent =
    `${progressPercentage}% completed`;

  progressBar.style.width =
    `${progressPercentage}%`;
}
function createTaskElement(task) {
  const taskItem = document.createElement("li"); taskItem.classList.add("task-item"); taskItem.dataset.taskId = task.id; taskItem.classList.toggle("completed", task.completed);
  const taskLabel = document.createElement("div"); taskLabel.classList.add("task-label");
  const checkbox = document.createElement("input"); checkbox.type = "checkbox"; checkbox.checked = task.completed;
  checkbox.setAttribute(
  "aria-label",
  `Mark "${task.text}" as complete`
);
  const taskName = document.createElement("span"); taskName.textContent = task.text;
  const taskContent = document.createElement("div"); taskContent.classList.add("task-content"); taskContent.append(taskName);
  if (task.dueDate) {
    const dueDate = document.createElement("small"); dueDate.classList.add("due-date");
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(`${task.dueDate}T00:00:00`));
    dueDate.textContent = `Due: ${formattedDate}`; taskContent.append(dueDate);
    const today = new Date(); today.setHours(0, 0, 0, 0); const taskDueDate = new Date(`${task.dueDate}T00:00:00`);
    if (taskDueDate < today && !task.completed) { const overdueLabel = document.createElement("small"); overdueLabel.classList.add("overdue-label"); overdueLabel.textContent = "Overdue"; taskContent.append(overdueLabel); taskItem.classList.add("overdue"); }
  }
  const priority = document.createElement("small"); priority.classList.add("task-priority", `priority-${task.priority || "medium"}`); priority.textContent = `${task.priority || "medium"} priority`; taskContent.append(priority);
  const editButton = document.createElement("button"); editButton.classList.add("edit-button"); editButton.type = "button"; editButton.textContent = "Edit";editButton.setAttribute(
  "aria-label",
  `Edit "${task.text}"`
);
  const deleteButton = document.createElement("button"); deleteButton.classList.add("delete-button"); deleteButton.type = "button"; deleteButton.textContent = "Delete";deleteButton.setAttribute(
  "aria-label",
  `Delete "${task.text}"`
);
  const taskActions = document.createElement("div"); taskActions.classList.add("task-actions"); taskActions.append(editButton, deleteButton);
  taskLabel.append(checkbox, taskContent); taskItem.append(taskLabel, taskActions); return taskItem;
}
resetButton.addEventListener("click", function () {
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

  tasks = [];

  localStorage.removeItem("tasks");

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
  let visibleTasks = tasks.filter(function (task) { return currentFilter === "all" || (currentFilter === "active" && !task.completed) || (currentFilter === "completed" && task.completed); });
  const searchText = searchInput.value.trim().toLowerCase();
  if (searchText !== "") visibleTasks = visibleTasks.filter(function (task) { return task.text.toLowerCase().includes(searchText); });
  if (sortInput.value === "priority") { const priorityOrder = { high: 1, medium: 2, low: 3 }; visibleTasks.sort(function (a, b) { return priorityOrder[a.priority || "medium"] - priorityOrder[b.priority || "medium"]; }); }
  if (sortInput.value === "due-date") visibleTasks.sort(function (a, b) { if (!a.dueDate) return 1; if (!b.dueDate) return -1; return a.dueDate.localeCompare(b.dueDate); });
 if (visibleTasks.length === 0) {
  emptyState.hidden = false;

  const searchText = searchInput.value.trim();

  if (tasks.length === 0) {
    emptyState.textContent =
      "No tasks yet. Add your first task!";
  } else if (searchText !== "") {
    emptyState.textContent =
      "No matching tasks found.";
  } else if (currentFilter === "completed") {
    emptyState.textContent =
      "No completed tasks.";
  } else if (currentFilter === "active") {
    emptyState.textContent =
      "No active tasks.";
  } else {
    emptyState.textContent =
      "No tasks found.";
  }
} else {
  emptyState.hidden = true;
}

visibleTasks.forEach(function (task) {
  const taskItem = createTaskElement(task);
  taskList.append(taskItem);
});

const allTasksCompleted =
  tasks.length > 0 &&
  tasks.every(function (task) {
    return task.completed;
  });

toggleAllButton.textContent = allTasksCompleted
  ? "Uncomplete All"
  : "Complete All";

const hasTasks = tasks.length > 0;

const hasCompletedTasks = tasks.some(function (task) {
  return task.completed;
});

toggleAllButton.disabled = !hasTasks;
resetButton.disabled = !hasTasks;
clearCompletedButton.disabled = !hasCompletedTasks;

updateTaskCount();
}



taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  const selectedDate = dueDateInput.value;

  formError.hidden = true;
  formError.textContent = "";

  if (taskText === "") {
    formError.textContent =
      "Please enter a task name.";

    formError.hidden = false;
    taskInput.focus();
    return;
  }

  if (
    selectedDate !== "" &&
    selectedDate < todayString
  ) {
    formError.textContent =
      "Due date cannot be in the past.";

    formError.hidden = false;
    dueDateInput.focus();
    return;
  }

  tasks.push({
    id: Date.now(),
    text: taskText,
    dueDate: selectedDate,
    priority: priorityInput.value,
    completed: false
  });

  saveTasks();
  renderTasks();

  showToast("Task added successfully.");
  taskInput.value = "";
  dueDateInput.value = "";
  priorityInput.value = "medium";

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
  editPriorityInput.value =
    task.priority || "medium";

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
toggleAllButton.addEventListener("click", function () {
  if (tasks.length === 0) {
    alert("There are no tasks.");
    return;
  }

  const allTasksCompleted = tasks.every(function (task) {
    return task.completed;
  });

  tasks.forEach(function (task) {
    task.completed = !allTasksCompleted;
  });
  

  saveTasks();
  renderTasks();
});

taskList.addEventListener("change", function (event) { if (event.target.type !== "checkbox") return; const taskItem = event.target.closest(".task-item"); const taskId = Number(taskItem.dataset.taskId); const task = tasks.find(function (task) { return task.id === taskId; }); task.completed = event.target.checked; saveTasks(); renderTasks(); });
filterButtons.forEach(function (button) { button.addEventListener("click", function () { currentFilter = button.dataset.filter; filterButtons.forEach(function (filterButton) { filterButton.classList.toggle("active", filterButton === button); }); renderTasks(); }); });
clearCompletedButton.addEventListener("click", function () { tasks = tasks.filter(function (task) { return !task.completed; }); saveTasks(); renderTasks(); });
sortInput.addEventListener("change", renderTasks);
searchInput.addEventListener("input", renderTasks);
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  const isDarkMode =
    document.body.classList.contains("dark-theme");

  themeButton.textContent = isDarkMode
    ? "Light Mode"
    : "Dark Mode";

  localStorage.setItem(
    "theme",
    isDarkMode ? "dark" : "light"
  );
});
editForm.addEventListener("submit", function (event) {
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

  editFormError.hidden = true;
  editFormError.textContent = "";

  if (newText === "") {
    editFormError.textContent =
      "Task name cannot be empty.";

    editFormError.hidden = false;
    editTaskInput.focus();
    return;
  }

  if (
    newDueDate !== "" &&
    newDueDate < todayString
  ) {
    editFormError.textContent =
      "Due date cannot be in the past.";

    editFormError.hidden = false;
    editDueDateInput.focus();
    return;
  }

  task.text = newText;
  task.dueDate = newDueDate;
  task.priority = newPriority;

  saveTasks();
  renderTasks();
  closeEditModal();

  showToast("Task updated successfully.");
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
  if (event.key !== "Escape") {
    return;
  }document.addEventListener("keydown", function (event) {
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

  if (!editModal.hidden) {
    closeEditModal();
  }

  if (!deleteModal.hidden) {
    closeDeleteModal();
  }
});
deleteModalConfirm.addEventListener(
  "click",
  function () {
    const taskExists = tasks.some(function (task) {
      return task.id === deletingTaskId;
    });

    if (!taskExists) {
      closeDeleteModal();
      return;
    }

    tasks = tasks.filter(function (task) {
      return task.id !== deletingTaskId;
    });

    saveTasks();
    renderTasks();
    closeDeleteModal();

    showToast("Task deleted successfully.");
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
renderTasks();
