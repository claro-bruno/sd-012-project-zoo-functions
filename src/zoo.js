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

function getSpeciesByIds(...ids) {
  return species.filter((value) => ids.includes(value.id));
} // ok

function getAnimalsOlderThan(animal, age) {
  return species
    .find((value) => value.name === animal).residents.every((value) => value.age >= age);
} // ok

function getEmployeeByName(employeeName) {
  if (employeeName === undefined){
    return {};
  }
  return employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
} // ok

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith}
} 

function isManager(id) {
  // seu código aqui
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(species) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
//   // seu código aqui
// }

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
