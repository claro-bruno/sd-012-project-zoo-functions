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

const { species, employees } = require('./data');
const data = require('./data');

//function getSpeciesByIds(...ids) {

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return []
  };
  return species.filter((specie, index) =>
  specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((specie) => specie.name === animal); 
  return animals[0].residents.every((animal2) => animal2.age >= age);
}

function getEmployeeByName(employeeName) {
  if(!employeeName) {
    return {}
  };
  
  const worker = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return worker   
} 

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ... associatedWith,
  }
  return newEmployee;
}

function isManager(id) {
  const manager = employees.some((employee, index) => employee.managers[index] === id);
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }
  return employees.push(newEmployee);
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
