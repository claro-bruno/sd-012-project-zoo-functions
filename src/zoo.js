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

const getSpeciesByIds = (...ids) => {
  const result = [];
  if (ids === undefined) return result;
  ids.forEach((id) =>
    result
      .push(data.species
        .find((specie) => specie.id === id)));
  return result;
};

const getAnimalsOlderThan = (animal, age) => {
  const result = data.species
    .find(({ name }) => name === animal)
    .residents
    .every((resident) => resident.age >= age);
  return result;
};

const getEmployeeByName = (employeeName) => {
  let result = {};
  if (employeeName === undefined) return result;
  result = data.employees
    .find(({ firstName, lastName }) =>
      firstName === employeeName
      || lastName === employeeName);
  return result;
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
