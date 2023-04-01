let toDo = document.getElementById("to-do");
let text = document.getElementById("text");
let button = document.getElementById("button");
let tasks = document.getElementById("tasks");
let index = 0;

function addTask() {
  let newElement = document.createElement("div");
  newElement.innerText = text.value;
  newElement.id = `id${++index}`;
  let newButton = document.createElement("button");
  newButton.innerText = "remove task";
  newButton.id = `id${index}`;
  newButton.setAttribute("onclick", "removeTask(event)");
  tasks.appendChild(newElement);
  newElement.appendChild(newButton);
}

function removeTask(event) {
  let newElement = document.getElementById(event.target.id);
  newElement.parentNode.removeChild(newElement);
}

toDo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!text.value) {
    alert("Enter a task!");
    return;
  }
  addTask();
  text.value = "";
});
