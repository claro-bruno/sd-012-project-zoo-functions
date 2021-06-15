// eslint no-unused-vars: [
//   "error",
//   {
//     "args": "none",
//     "vars": "local",
//     "varsIgnorePattern": "data"
//   }
// ]


const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((pegarId) => data.species.find((currentAnimalId) => currentAnimalId.id === pegarId));
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
