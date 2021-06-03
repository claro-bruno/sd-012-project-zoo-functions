/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const {species, employees} = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const findId = species.filter((specie) => ids.find((id) => id === specie.id)); // O filter já retorna um array vazio se nçao recebe nenhum parâmetro.
  return findId;
}
console.log(getSpeciesByIds('tigersId'));