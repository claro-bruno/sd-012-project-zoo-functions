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
  if (ids.length === 0) return [];
  const specieFinder = (id) => data.species.find((specie) => id === specie.id);
  const selectSpecie = ids.map(specieFinder);
  return selectSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const specieFinder = data.species.find((specie) => animal === specie.name)
  const ageCompare = specieFinder.residents.every((resident) => resident.age > age)
  return ageCompare;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmployee = data.employees.find((employee) => employeeName === employee.firstName || employeeName === employee.lastName)
  return findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {...personalInfo, ...associatedWith};
  return newEmployee;
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
