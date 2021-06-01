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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const especies = [];
  if (ids.length === 0) {
    return ids;
  }
  if (ids.length === 1) {
    especies.push(data.species.find((specie) => specie.id === ids[0]));
    return especies;
  }
  for (let index = 0; index < ids.length; index += 1) {
    especies.push(data.species.find((specie) => specie.id === ids[index]));
  }
  return especies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especieAnimal = data.species.find((specie) => specie.name === animal);
  const verifyAge = Object.values(especieAnimal.residents).every((resident) => resident.age >= age);
  return verifyAge;
}

function getEmployeeByName() {
  // seu código aqui
  // employeeName
}

function createEmployee() {
  // seu código aqui
  // personalInfo, associatedWith
}

function isManager() {
  // seu código aqui
  // id
}

function addEmployee() {
  // seu código aqui
  // id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui
  // species
}

function calculateEntry() {
  // seu código aqui
  // entrants
}

function getAnimalMap() {
  // seu código aqui
  // options
}

function getSchedule() {
  // seu código aqui
  // dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui
  // id
}

function increasePrices() {
  // seu código aqui
  // percentage
}

function getEmployeeCoverage() {
  // seu código aqui
  // idOrName
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
