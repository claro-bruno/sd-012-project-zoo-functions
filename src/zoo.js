/* eslint-disable editorconfig/editorconfig */
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

// eslint-disable-next-line no-unused-vars
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalSearched = data.species.find((specie) => specie.name === animal);
  return animalSearched.residents.every((animals) => animals.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName == null) {
    return {};
  }
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {};
  return Object.assign(obj, personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species == null) {
    return data.species.reduce((acc, crv) => {
      acc[crv.name] = crv.residents.length;
      return acc;
    }, {});
  }
  const speciePopulation = data.species.find((specie) => specie.name === species);
  return speciePopulation.residents.length;
}

// entrants
function calculateEntry() {
  // seu código aqui
}
// options
function getAnimalMap() {
  // seu código aqui
}
// dayName
function getSchedule() {
  // seu código aqui
}
// id
function getOldestFromFirstSpecies() {
  // seu código aqui
}
// percentage
function increasePrices() {
  // seu código aqui
}
// idOrName
function getEmployeeCoverage() {
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
