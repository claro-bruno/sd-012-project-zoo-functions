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
  return data.species.filter((specie) => ids.includes(specie.id));
  /* if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  if (ids.length > 1) {
    return data.species.filter((specie) => ids.includes(specie.id));
  } */
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const specie = species.find((animals) => animals.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employee) {
  if (employee === undefined) {
    return {};
  }
  return data.employees.find((employees) =>
    (employees.firstName === employee) || (employees.lastName === employee));
}

function createEmployee(personalInfo, associatedWith) {
  const employeeNew = { ...personalInfo, ...associatedWith };
  return employeeNew;
}

/* const data = require('./data'); */

function isManager(id) {
  return data.employees.some((employee, index) => employee.managers[index] === id);
}

function addEmployee() {
  // seu código aqui  : id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui  :  species
}

function calculateEntry() {
  // seu código aqui : entrants
}

function getAnimalMap() {
  // seu código aqui  : options
}

function getSchedule() {
  // seu código aqui  : dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui  : id
}

function increasePrices() {
  // seu código aqui   : percentage
}

function getEmployeeCoverage() {
  // seu código aqui    : idOrName
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
