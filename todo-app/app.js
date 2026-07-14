const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Kuch likho pehle! 😅");
    return;
  }

  // Li banao
  const li = document.createElement("li");
  li.textContent = taskText;

  // Delete button banao
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.float = "right";
  deleteBtn.style.background = "transparent";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.fontSize = "16px";

  // Delete click
  deleteBtn.addEventListener("click", () => {
    li.remove();
    const total = taskList.children.length;
    taskCount.textContent = `Total tasks: ${total}`;
  });

  // Li mein delete button add karo
  li.appendChild(deleteBtn);
  
  // List mein li add karo
  taskList.appendChild(li);

  // Input clear karo
  taskInput.value = "";

  // Count update karo
  const total = taskList.children.length;
  taskCount.textContent = `Total tasks: ${total}`;
});

// Local Storage 


const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

// localStorage se tasks load karo
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Task render karne ka function
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.float = "right";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.fontSize = "16px";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  taskCount.textContent = `Total tasks: ${tasks.length}`;
}

// localStorage mein save karo
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Task add karo
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Kuch likho pehle! 😅");
    return;
  }

  tasks.push(taskText);
  saveTasks();
  renderTasks();
  taskInput.value = "";
});

// Pehli baar render karo
renderTasks();