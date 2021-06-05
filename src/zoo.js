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
const { employees } = require('./data');
//  const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((idAnimal) => species.find((animals) => idAnimal === animals.id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function getAnimalsOlderThan(animal, age) {
  return species
    .find(({ name }) => name === animal).residents.every((animalonly) => animalonly.age >= age);
}
// referencia  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function getEmployeeByName(name) {
  if (!name) return {};
  return employees.find((index) => name === index.firstName || name === index.lastName);
}

/* function createEmployee(personalInfo, associatedWith) {
  const retorno = personalInfo + associatedWith;
  return retorno;
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
}
*/
module.exports = {
  //  calculateEntry,
  //  getSchedule,
  //  countAnimals,
  //  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  //  getEmployeeCoverage,
  //  addEmployee,
  //  isManager,
  getAnimalsOlderThan,
  //  getOldestFromFirstSpecies,
  //  increasePrices,
  //  createEmployee,
};
