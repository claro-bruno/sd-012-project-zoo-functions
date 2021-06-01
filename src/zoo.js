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

function getSpeciesByIds(...animals) {
  return species.filter((specie) => animals.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((animals) => animals.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName) : {};
}

// function createEmployee(personalInfo, associatedWith) {

// }

// function isManager(id) {
//   seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   seu código aqui
// }

// function countAnimals(species) {
//   seu código aqui
// }

// function calculateEntry(entrants) {
//   seu código aqui
// }

// function getAnimalMap(options) {
//   seu código aqui
// }

// function getSchedule(dayName) {
//   seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   seu código aqui
// }

// function increasePrices(percentage) {
//   seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   seu código aqui
// }

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
