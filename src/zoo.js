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
function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]); 
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((intemArray) => intemArray.name === animal && intemArray.residents.every((item) => item.age >= age ));
}

function getEmployeeByName(employeeName) {
  let objeto = {};
  if (employeeName === undefined) {
    return objeto;
  } else {
      return data.employees.find((intemArray) => intemArray.firstName === employeeName || intemArray.lastName === employeeName);
    }
}

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
