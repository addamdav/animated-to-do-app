let toDo = document.getElementById("to-do");
let texto = document.getElementById("texto");
let botao = document.getElementById("botao");
let tarefas = document.getElementById("tarefas");
let index = 0;

function addTarefa() {
  let novoElemento = document.createElement("div");
  novoElemento.innerText = texto.value;
  novoElemento.id = `id${++index}`;
  let novoBotao = document.createElement("button");
  novoBotao.innerText = "remover tarefa";
  novoBotao.id = `id${index}`;
  novoBotao.setAttribute("onclick", "removerTarefa(event)");
  tarefas.appendChild(novoElemento);
  novoElemento.appendChild(novoBotao);
}

function removerTarefa(event) {
  let novoElemento = document.getElementById(event.target.id);
  novoElemento.parentNode.removeChild(novoElemento);
}

toDo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!texto.value) {
    alert("Insira uma tarefa!");
    return;
  }
  addTarefa();
  texto.value = "";
});
