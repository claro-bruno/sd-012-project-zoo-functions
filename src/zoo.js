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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal).residents.every((res) => res.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // const { id, firstName, lastName } = personalInfo;
  // const { managers, responsibleFor } = associatedWith;
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  // seu código aqui
  if (!speciesName) {
    const obj = {};
    species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  }
  return species.find((specie) => specie.name === speciesName).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce(((sum, price) => sum + prices[price] * entrants[price]), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
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
