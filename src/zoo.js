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

function getSpeciesByIds(ids = []) {
  return ids.species.filter((id) => id.id);
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

function isManager() {
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
