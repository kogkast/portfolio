document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  document.body.classList.remove("light-mode");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  renderTasks();
});


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
      span.classList.add("completed");
    }

    const tickBtn = document.createElement("button");
    tickBtn.textContent = "✔";

    tickBtn.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    const actions = document.createElement("div");
    actions.classList.add("actions");

    actions.appendChild(tickBtn);
    actions.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
  });

  updateCounter();
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  tasks.push({ text: text, completed: false });

  saveTasks();
  renderTasks();

  input.value = "";
}

document.getElementById("taskInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});



function updateCounter() {
  const counter = document.getElementById("counter");

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  counter.textContent = `Completed: ${completed} / ${total}`;
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});



function goBack() {
  document.body.style.opacity = "0";
  document.body.style.transform = "scale(0.98)";

  setTimeout(() => {
    window.location.href = "../index.html";
  }, 400);
}


