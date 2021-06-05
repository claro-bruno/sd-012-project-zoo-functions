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
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  const getSpeciesById = (id, index) => {
    if (data.species[index].id === id) return data.species[index];
  };
  return ids.map(getSpeciesById);
}

const getAnimalsOlderThan = (animal, age) => (
  data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age)
);

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const objectEmployee = (employee) =>
    (employee.firstName === employeeName) || (employee.lastName === employeeName);
  return employees.find((objectEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  const employeeInclude = { ...personalInfo, ...associatedWith };
  return employeeInclude;
}

function isManager() {
  // seu código aqui id
}

function addEmployee() {
  // seu código aqui id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui species
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
