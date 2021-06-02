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
const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((id) => ids.includes(id.id));
}

function getAnimalsOlderThan(animal, age) {
// seu código aqui
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeFName = employees.find((firstName) => employeeName.includes(firstName.firstName));

  const employeeLName = employees.find((lastName) => employeeName.includes(lastName.lastName));

  return employeeFName || employeeLName;
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
  // seu código aqui species1
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
