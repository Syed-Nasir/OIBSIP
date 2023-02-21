const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {
  const task = taskInput.value;
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `${task}<button onclick="completeTask(this.parentNode)">Complete</button><button onclick="deleteTask(this.parentNode)">Delete</button>`;
    pendingList.appendChild(li);
    taskInput.value = "";
  }
}

function completeTask(li) {
  completedList.appendChild(li);
  li.innerHTML = li.textContent;
}

function deleteTask(li) {
  li.parentNode.removeChild(li);
}

