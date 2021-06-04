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
// 0938aa23-f153-4937-9f88-4858b24d6bce id de teste
const data = require('./data');
const arraysOfData = data.species; // recolhe o objeto "species" da variavel data
function getSpeciesByIds(...ids){ 
  let idGathered = arraysOfData.filter( element => ids.find( verId  => verId === element.id));// Compara o parametro com a data e retorna seu resultado
  //console.log(idGathered)
  return idGathered;
};
//getSpeciesByIds('fdb2543b-5662-46a7-badc-93d960fdc0a8', '0e7b460e-acf4-4e17-bcb3-ee472265db83'); testes diretos
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
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
