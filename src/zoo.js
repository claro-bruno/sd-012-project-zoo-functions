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
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const specificAnimal = data.species.find((value) => value.name === animal);
  return specificAnimal.every((value) => value.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName){
    return {}
  }
  return data.employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}
  



function createEmployee() {
  // seu código aqui personalInfo, associatedWith
}

function isManager() {
  // seu código aqui id
}

function addEmployee() {
  // seu código aqui id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui species
}

function calculateEntry() {
  // seu código aqui entrants
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
