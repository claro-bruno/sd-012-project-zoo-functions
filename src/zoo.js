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

// const { get } = require('cypress/types/lodash');
const { species, employees } = require('./data');
const data = require('./data');

// Referência: Natalia Souza - turma 11.
function getSpeciesByIds(...ids) {
  const animalsIds = (animals) => ids.find((animalId) => animals.id === animalId);
  return data.species.filter(animalsIds);
}

// Referência: Natalia Souza - turma 11.
function getAnimalsOlderThan(animal, age) {
  const findAnimalName = (specie) => (specie.name === animal);
  const checkAnimalsAge = (specieAge) => (specieAge.age >= age);
  return species.find(findAnimalName).residents.every(checkAnimalsAge);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const employeeFider = (name) => name.firstName === employeeName || name.lastName === employeeName;
  return employees.find(employeeFider);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Referência: Natalia Souza - turma 11.
function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(species1) {
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
