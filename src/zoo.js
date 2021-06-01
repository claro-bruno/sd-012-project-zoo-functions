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
const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animalSelect, ageSelect) {
  return species
    .find(({ name }) => name === animalSelect)
    .residents
    .every(({ age }) => age >= ageSelect);
}

function getEmployeeByName(nome) {
  if (!nome) return {};
  const i = data.employees;
  return i.find(({ firstName, lastName }) => firstName === nome || lastName === nome);
}


function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
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
