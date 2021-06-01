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

function getSpeciesByIds(...ids) {
  return data.species.filter((animal, i) => animal.id === ids[i]);
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((e) => e.name === animal).residents.every((resi) => resi.age > age);
}

function getEmployeeByName(employeeName) {
  return !employeeName ? {}
    : data.employees.find(({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers: m }) => m.find((manID) => manID === id));
}

function addEmployee() {
  // seu código aqui (id, firstName, lastName, managers, responsibleFor)
}

function countAnimals() {
  // seu código aqui (species)
}

function calculateEntry() {
  // seu código aqui (entrants)
}

function getAnimalMap() {
  // seu código aqui (options)
}

function getSchedule() {
  // seu código aqui (dayName)
}

function getOldestFromFirstSpecies() {
  // seu código aqui (id)
}

function increasePrices() {
  // seu código aqui (percentage)
}

function getEmployeeCoverage() {
  // seu código aqui (idOrName)
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
