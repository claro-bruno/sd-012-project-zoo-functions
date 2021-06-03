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
  return data.species.filter((specie) => ids.find((id) => specie.id === id));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((specie) => specie.name === animal);
  return especie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName = {}) {
  return data.employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName) || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

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
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
