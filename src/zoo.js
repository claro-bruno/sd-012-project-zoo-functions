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
const {
  species,
  employees,
  hours,
  prices,
} = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  
}

function getEmployeeByName(employeeName) {
  
}

function createEmployee(personalInfo, associatedWith) {

}

function isManager(id) {
  
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  
}

function countAnimals(species) {
  
}

function calculateEntry(entrants) {
  
}

function getAnimalMap(options) {
  
}

function getSchedule(dayName) {
  
}

function getOldestFromFirstSpecies(id) {
  
}

function increasePrices(percentage) {
  
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
