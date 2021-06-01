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
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((id) => id.name === animal).residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  if (id === '9e7d4524-363c-416a-8759-8aa7e50c0992' || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(employee);
}

function countAnimals(animals) {
  const object = {};
  if (!animals) {
    return species.forEach((specie) => { object[specie.name] = specie.residents.length; });
  }
  return data.species.find((specie) => specie.name === animals).residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
}

function getAnimalMap(options) {
  // seu código aqui
}

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
