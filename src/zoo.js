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
  const resultado = ids.map((id) => data.species.find((specie) => specie.id === id));
  return resultado;
}

function getAnimalsOlderThan(animal, age) {
  let resultado = true;
  const targetSpecie = data.species.find((specie) => specie.name === animal);
  const youngResidents = targetSpecie.residents.filter((resident) => resident.age < age);
  console.log(youngResidents);
  if (youngResidents.length !== 0) {
    resultado = false;
  }
  return resultado;
}
// getAnimalsOlderThan('otters', 7);

function getEmployeeByName() {
  // employeeName
  // seu código aqui
}

function createEmployee() {
  // personalInfo, associatedWith
  // seu código aqui
}

function isManager() {
  // id
  // seu código aqui
}

function addEmployee() {
  // id, firstName, lastName, managers, responsibleFor
  // seu código aqui
}

function countAnimals() {
  // species
  // seu código aqui
}

function calculateEntry() {
  // entrants
  // seu código aqui
}

function getAnimalMap() {
  // options
  // seu código aqui
}

function getSchedule() {
  // dayName
  // seu código aqui
}

function getOldestFromFirstSpecies() {
  // id
  // seu código aqui
}

function increasePrices() {
  // percentage
  // seu código aqui
}

function getEmployeeCoverage() {
  // idOrName
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
