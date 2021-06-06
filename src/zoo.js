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
  const filterID = data.species.filter((specie) => ids.some((id) => specie.id === id));
  return filterID;
}

function getAnimalsOlderThan(animal, age) {
  const olderThan = (criatura) => criatura.age > age;
  const findAnimal = data.species.find((specie) => specie.name === animal);
  return findAnimal.residents.every(olderThan);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const name = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  return data.employees.find(name);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

/* function isManager(id) {
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
} */

module.exports = {
  /* calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap, */
  getSpeciesByIds,
  getEmployeeByName,
  /* getEmployeeCoverage,
  addEmployee,
  isManager, */
  getAnimalsOlderThan,
  /* getOldestFromFirstSpecies,
  increasePrices, */
  createEmployee,
};
