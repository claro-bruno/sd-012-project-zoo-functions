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

const { species } = data;
// , employees, hours, prices

function getSpeciesByIds(...ids) {
  const allAnimais = species.filter((specie, index) => specie.id === ids[index]);
  return allAnimais;
}

function getAnimalsOlderThan(animal, age) {
  const nomeSpecie = species.find((specie) => specie.name === animal);

  return nomeSpecie.residents.every((specieAnimal) => specieAnimal.age >= age);
}

// console.log(getAnimalsOlderThan('lions', 4));

function getEmployeeByName() {
  // (employeeName)
//  seu código aqui
}

function createEmployee() {
  // (personalInfo, associatedWith)
//  seu código aqui
}

function isManager() {

// seu código aqui
// (id)
}

function addEmployee() {

//  seu código aqui
// (id, firstName, lastName, managers, responsibleFor)
}

function countAnimals() {

//   seu código aqui
// (species)
}

function calculateEntry() {

//  seu código aqui
// (entrants)
}

function getAnimalMap() {

//  seu código aqui
// (options)
}

function getSchedule(dayName) {

//  seu código aqui
// (dayName)
}

function getOldestFromFirstSpecies() {

//  seu código aqui
// (id)
}

function increasePrices() {

//  seu código aqui
// (percentage)
}

function getEmployeeCoverage() {

//  seu código aqui
// (idOrName)
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
