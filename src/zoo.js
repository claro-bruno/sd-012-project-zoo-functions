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
  if (ids === null) {
    return [];
  }
  const rightId = ids;
  return species.filter((specie) => specie.id === rightId.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  let thisAnimalsAreOlder = false;
  data.species.forEach((specie) => {
    const theyAreOlder = specie.residents.every((resident) => resident.age >= age);
    if (specie.name === animal && theyAreOlder === true) {
      thisAnimalsAreOlder = true;
    }
  });
  return thisAnimalsAreOlder;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const determinedEmployee = employees.find((employee) => {
    const findByName = employee.firstName === employeeName || employee.lastName === employeeName;
    return findByName;
  });
  return determinedEmployee;
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
