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
  const managerFinder = (employee) => employee.managers.includes(id);
  return employees.some(managerFinder);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEnployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEnployee);
}

function countAnimals(species1) {
  if (!species1) {
    const obj = {};
    species.forEach((animal) => { obj[animal.name] = animal.residents.length; });
    return obj;
  }
  return species.find((animal) => animal.name === species1).residents.length;
}

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
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
