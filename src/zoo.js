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

// const data = require('./data');
// Questão 01
const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}
// console.table(species);
// console.log(species);

// Questão 02
function getAnimalsOlderThan(animal, age) {
  const animalChave = species.find((specie) => animal === specie.name);

  return animalChave.residents.every((residents) => residents.age > age);
}

// Questão 03
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const first = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return (first);
}
// Questão 04
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}
// Questão 05
function isManager(id) {
  // seu código aqui
  // return employees.some((managers) => id.find((idManeger) => employees.managers.includes === id));

  return employees.some((manage) => manage.managers.includes(id));
}
// console.loge(employees);
/*
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciesConunts) {
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
*/

module.exports = {
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
