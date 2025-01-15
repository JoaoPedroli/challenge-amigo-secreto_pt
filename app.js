//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let names = [];
const inputEl = document.getElementById("amigo");
const listaAmigosEl = document.getElementById("listaAmigos");
const resultadoEl = document.getElementById("resultado");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const adicionarAmigoEl = (name) => {
  listaAmigosEl.innerHTML += `<li>${name}</li>`;
};

const adicionarAmigo = () => {
  const name = inputEl.value;
  if(name === "") {
    alert("Por favor, insira um nome.");
  } else {
    names.push(name);
    adicionarAmigoEl(name);
    inputEl.value = "";
  }
};

const sortearAmigo = () => {
  if(names.length === 0) {
    alert("A lista de amigos está vazia!");
  } else {
    const randomIndex = getRandomInt(names.length);
    resultadoEl.innerHTML = names[randomIndex];
    listaAmigosEl.innerHTML = "";
    names = [];
  }
};
