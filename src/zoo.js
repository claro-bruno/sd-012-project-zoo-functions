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
const { species, employees, prices } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((itemIds) => species.find((itemArray) => itemArray.id === itemIds));
}

// console.log(getSpeciesByIds());

function getAnimalsOlderThan(animal, age) {
  return species.some((itemArray) => itemArray.name === animal
  && itemArray.residents.every((itemResi) => itemResi.age >= age));
}
// console.log(getAnimalsOlderThan('lions', 12));

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((itemArray) => itemArray.firstName === employeeName
  || itemArray.lastName === employeeName);
}

// console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

console.log(createEmployee());

function isManager(id) {
  const maneger = employees.some((gerente) => gerente.managers.includes(id));
  return maneger;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals() {
  // species
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = prices.Adult * Adult;
  const childPrice = prices.Child * Child;
  const seniorPrice = prices.Senior * Senior;
  return adultPrice + childPrice + seniorPrice;
}

function getAnimalMap() {
  // options
}

function getSchedule() {
  // dayName
}

function getOldestFromFirstSpecies() {
  // id
}

function increasePrices() {
  // percentage
}

function getEmployeeCoverage() {
  // idOrName
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
