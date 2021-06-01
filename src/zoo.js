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

function getSpeciesByIds(...ids) {
  // seu código aqui
  console.log(data);
  return species.filter((speci, index) => speci.id === ids[index]);
}

function getAnimalsOlderThan() {
  // seu código aqui
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
