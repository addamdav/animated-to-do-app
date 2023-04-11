// initializing all the variables

let toDo = document.getElementById("to-do");
let text = document.getElementById("text");
let button = document.getElementById("button");
let tasks = document.getElementById("tasks");
tasks.classList.add("hidden");
let index = 0;
let showTasks = document.querySelector(".showTasks");

// Functions that remove and add tasks

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

//All the event listeners

toDo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!text.value) {
    alert("Enter a task!");
    return;
  }
  addTask();
  text.value = "";
});

showTasks.addEventListener(("click"), () => {
  tasks.classList.remove("hidden");
});