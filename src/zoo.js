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

const { species } = require('./data');
const data = require('./data');

console.log(data);

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((speci, index) => speci.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // achar o nome da especie dentro do array (find e every)
  const specieName = species.find((specie) => specie.name === animal);
  return specieName.residents.every((specie) => specie.age > age);
}

function getEmployeeByName() {
  // seu código aqui
}

function createEmployee() {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee() {
  // seu código aqui
}

function countAnimals() {
  // seu código aqui
}

function calculateEntry() {
  // seu código aqui
}

function getAnimalMap() {
  // seu código aqui
}

function getSchedule() {
  // seu código aqui
}

function getOldestFromFirstSpecies() {
  // seu código aqui
}

function increasePrices() {
  // seu código aqui
}

function getEmployeeCoverage() {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
