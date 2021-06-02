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

const { species, employees } = data;

const getSpeciesByIds = (...ids) => ids.map((id) =>
  species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal)
    .residents.map((ano) => ano.age).every((idade) => idade >= age);

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};

function createEmployee() {
  // seu código aqui
  // personalInfo, associatedWith
}

const isManager = (ids) => employees.some((employee) =>
  employee.managers.find((id) => ids === id));

function addEmployee() {
  // seu código aqui
  // id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui
  // especies
}

function calculateEntry() {
  // seu código aqui
  // entrants
}

function getAnimalMap() {
  // seu código aqui
  // options
}

function getSchedule() {
  // seu código aqui
  // dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui
  // id
}

function increasePrices() {
  // seu código aqui
  // percentage
}

function getEmployeeCoverage() {
  // seu código aqui
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
