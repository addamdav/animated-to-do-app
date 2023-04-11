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
  if (tasks.children.length == 0) {
     tasks.classList.add("hidden")
     showTasks.innerHTML = "show tasks"
  }
}

//events listeners

toDo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!text.value) {
    alert("Enter a task!");
    return;
  }
  addTask();
  text.value = "";
});

showTasks.addEventListener("click", () => {
  if (tasks.children.length == 0) {
    alert("Enter a task!");
    return;
  } else if (tasks.classList.contains("hidden")) {
    tasks.classList.remove("hidden");
    showTasks.innerHTML = "hide tasks";
    console.log(showTasks.innerHTML);
    return;
  } else {
    showTasks.innerHTML === "hide tasks";
    tasks.classList.add("hidden");
    showTasks.innerHTML = "show tasks";
  }

});







