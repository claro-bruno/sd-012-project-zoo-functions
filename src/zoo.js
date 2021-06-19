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
  if (ids.length === 0) { return []; }
  const species = data.species
    .filter((specie) => ids.includes(specie.id));
return species; 
}

function getAnimalsOlderThan(animal, age) {
  const findNameAnimal = data.species.find((element) => element.name === animal);
  const findAgeAnimal = findNameAnimal.residents.every((element2) => element2.age > age);
 return findAgeAnimal
} 

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {}; 
  const getEmployee = data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return getEmployee;
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
