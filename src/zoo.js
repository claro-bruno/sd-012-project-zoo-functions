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
const data = require('./data');

function getSpeciesByIds(...ids) {
  /* console.log(ids); */
  // seu código aqui
  if (ids.length === 0) {
    /* console.log(ids.length); */
    return [];
  }
  /* result = species.filter((spec) => spec.id === ids) */
  const identidade = species
    .filter((spec, indice) => spec.id === ids[indice]);
  return identidade;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((esp) => esp.name === animal).residents
    .every((exemplares) => exemplares.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const first = employees.find((emp) => emp.firstName === employeeName);
  const last = employees.find((emp) => emp.lastName === employeeName);
  return ((!first) ? last : first);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.filter((emp) => emp.managers.length < 2).some((man) => man.id === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
