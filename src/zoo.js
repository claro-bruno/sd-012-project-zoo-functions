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

const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((elem) => ids.includes(elem.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elem) => elem.name === animal)
    .residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((elem) =>
    elem.firstName === employeeName || elem.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((elem) => elem.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addEmp);
}

function countAnimals(specie) {
  const array = {};
  species.forEach(({ name, residents }) => { array[name] = residents.length; });
  return specie === undefined
    ? array
    : species.find((elem2) => elem2.name === specie).residents.length;
}

function calculateEntry(entrants) {
  let soma = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  soma += prices.Adult * Adult;
  soma += prices.Child * Child;
  soma += prices.Senior * Senior;
  return soma;
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
