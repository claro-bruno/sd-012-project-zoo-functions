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

function getSpeciesByIds(...ids) {
  return ids.map((actualId) => species.find((speciesId) => speciesId.id === actualId));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((indexAnimal) => indexAnimal.name === animal);
  return animals.residents.every((indexAge) => indexAge.age >= age);
}

function getEmployeeByName(employeeN) {
  if (!employeeN) return {};
  return employees.find((index) => index.firstName === employeeN || index.lastName === employeeN);
}

function createEmployee(personalInfo, associatedWith) {
  // const newEmployee = {
  //   id: personalInfo.id,
  //   firstName: personalInfo.firstName,
  //   lastName: personalInfo.lastName,
  //   managers: associatedWith.managers,
  //   responsibleFor: associatedWith.responsibleFor,
  // };
  // employees.push(newEmployee);
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

// function countAnimals(species) {
//   // seu código aqui
// }

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
  // countAnimals,
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
