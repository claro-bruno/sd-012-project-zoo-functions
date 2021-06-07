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
// const { data } = require('./data');

function getSpeciesByIds(...ids) {
// return ids.map((idAnimal) => species.find((animals) => idAnimal === animals.id));
  return ids.map((id) => species.find((specie) => id === specie.id));
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

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}
//  https://www.alura.com.br/artigos/o-que-e-o-operador-ternario?gclid=Cj0KCQjw5PGFBhC2ARIsAIFIMNd7ReICV3cuH5g_2lyjEwAbJ1cO2XeOR2nLS7eNWKhyZg7VoIPJxEMaAk20EALw_wcB

/*
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
  isManager,
  getAnimalsOlderThan,
  //  getOldestFromFirstSpecies,
  //  increasePrices,
  createEmployee,
};
