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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesById = species.filter((specie, i) => specie.id === ids[i]);
  return speciesById;
}
console.log(getSpeciesByIds());

function getAnimalsOlderThan() {
  // seu código aqui animal, age
}

function getEmployeeByName() {
  // seu código aqui employeeName
}

function createEmployee() {
  // seu código aqui personalInfo, associatedWith
}

function isManager() {
  // seu código aqui id
}

function addEmployee() {
  // seu código aqui id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui species
}

function calculateEntry() {
  // seu código aqui entrants
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
