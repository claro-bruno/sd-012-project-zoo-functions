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
const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

// Feito pela ajuda no slack por thread e visualização e entendimento de código do Luis Fernando //
const getAnimalsOlderThan = (animal, age) => {
  species.find((animals) => animals.name === animal)
    .residents.every((residentAge) => residentAge.age > age);
};

// function getEmployeeByName(employeeName) {
// seu código aqui
// }

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
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
//   calculateEntry,
//   getSchedule,
//   countAnimals,
//   getAnimalMap,
  getSpeciesByIds,
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
//   getOldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
};
