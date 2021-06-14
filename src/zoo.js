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

const { species, employees } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((itemIds) => species.find((itemArray) => itemArray.id === itemIds));
}

// console.log(getSpeciesByIds());

function getAnimalsOlderThan(animal, age) {
  return species.some((itemArray) => itemArray.name === animal
  && itemArray.residents.every((itemResi) => itemResi.age >= age));
}
// console.log(getAnimalsOlderThan('lions', 12));

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((itemArray) => itemArray.firstName === employeeName
  || itemArray.lastName === employeeName);
}

// console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

console.log(createEmployee());

function isManager(id) {
  document.getElementById('stephanieId');
  id.some();
}

function addEmployee() {
  // id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // species
}

function calculateEntry() {
  // entrants
}

function getAnimalMap() {
  // options
}

function getSchedule() {
  // dayName
}

function getOldestFromFirstSpecies() {
  // id
}

function increasePrices() {
  // percentage
}

function getEmployeeCoverage() {
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
