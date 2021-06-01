/* eslint-disable max-len */
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

const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return ids;
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animals) => animals.name === animal)
    .residents.every((resAge) => resAge.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return ({});
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.some((value) => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  return (species ? data.species.find((animal) => animal.name === species)
    .residents.length : data.species.reduce((acc, { name, residents }) =>
    ({ ...acc, [name]: residents.length }), {}));
}

function calculateEntry(entrants) {
  if (!entrants || entrants === 0) return 0;
  const priceTotal = Object.keys(entrants);
  return priceTotal
    .reduce((accumulator, currentValue) =>
      accumulator + (entrants[currentValue] * data.prices[currentValue]), 0);
}
/*
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
*/
module.exports = {
  calculateEntry,
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
