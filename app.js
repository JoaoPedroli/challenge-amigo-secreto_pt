//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let names = [];
const inputEl = document.getElementById("amigo");
const listaAmigosEl = document.getElementById("listaAmigos");
const resultadoEl = document.getElementById("resultado");

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const adicionarAmigo = () => {
  const name = inputEl.value;
  names.push(name);
  listaAmigosEl.innerHTML += `<li>${name}</li>`;
  inputEl.value = "";
};

const sortearAmigo = () => {
  const randomIndex = getRandomInt(names.length);
  resultadoEl.innerHTML = names[randomIndex];
  listaAmigosEl.innerHTML = "";
  names = [];
};
