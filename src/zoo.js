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
  const filterSpecies = species.filter((specie) => ids.some((id) => specie.id === id));
  return filterSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const filterAge = species.filter((specie) => specie.name === animal);
  return filterAge[0].residents.every((animal2) => animal2.age >= age);
}

function getEmployeeByName(employeeName = {}) {
  const filterEmployeeFirst = employees.find(({ firstName }) => firstName === employeeName);
  const filterEmployeeLast = employees.find(({ lastName }) => lastName === employeeName);

  return filterEmployeeFirst || filterEmployeeLast || employeeName;
}

// function createEmployee(personalInfo, associatedWith) {
// }

// function isManager(id) {
//   // seu código aqui
// }

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
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
