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

const { species } = data;

const getSpeciesByIds = (...ids) => ids.map((id) => species.find((specie) => specie.id === id));

function getAnimalsOlderThan() {
  // seu código aqui
  // animal, age
}

function getEmployeeByName() {
  // seu código aqui
  // employeeName
}

function createEmployee() {
  // seu código aqui
  // personalInfo, associatedWith
}

function isManager() {
  // seu código aqui
  // id
}

function addEmployee() {
  // seu código aqui
  // id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui
  // especies
}

function calculateEntry() {
  // seu código aqui
  // entrants
}

function getAnimalMap() {
  // seu código aqui
  // options
}

function getSchedule() {
  // seu código aqui
  // dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui
  // id
}

function increasePrices() {
  // seu código aqui
  // percentage
}

function getEmployeeCoverage() {
  // seu código aqui
  // idOrName
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
