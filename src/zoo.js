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

// const { species, employees } = require('./data');
const data = require('./data');

const { species } = data;
const { employees } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  const findSpecie = species.filter((specie) =>
    ids.some((id) => specie.id === id));
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const verifyName = species.find((specie) => specie.name === animal);
  const verifyAnimals = verifyName.residents.every((verifyAge) => verifyAge.age >= age);
  return verifyAnimals;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName);
  return employees.find((findEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const verifyId = employees.find((employee) => employee.id === id).managers.length <= 1;
  return verifyId;
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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
