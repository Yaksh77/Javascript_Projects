document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.getElementById("add-btn");
  const deleteTaskButton = document.getElementById("delete-btn");
  const todoInput = document.getElementById("todo-input");
  const taskList = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    todoInput.value = "";
    renderTasks(newTask);
    saveTasks();
  });

  function renderTasks(task) {
    let li = document.createElement("li");
    li.setAttribute("data-it", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button id='delete-btn'>Delete</button>`;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("#delete-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      task = tasks.filter((t) => t.id !== task.id);
      li.remove();
      localStorage.removeItem("tasks");
    });
    taskList.appendChild(li);
  }
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
