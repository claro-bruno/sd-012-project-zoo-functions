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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeFound = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (!employeeFound) {
    return {};
  }
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((person, index) => person.managers[index] === id);
}

function addEmployee() {
  // id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // species
}

function calculateEntry() {
  // entrants
}

function getAnimalMap() {
  // options
}

function getSchedule() {
  // dayName
}

function getOldestFromFirstSpecies() {
  // id
}

function increasePrices() {
  // percentage
}

function getEmployeeCoverage() {
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
