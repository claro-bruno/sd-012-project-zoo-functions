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

/* function getSpeciesByIds(ids) {
  // seu código aqui
  //const idFinder = species.find((specie) => specie.id === ids)
  return species.filter((specie) => specie.id === ids)
} */

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = species.filter((specie) => specie.name === animal)[0];
  return animalObj.residents.every((anemal) => anemal.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const trabalhador = (employee) => employee.firstName === employeeName
   || employee.lastName === employeeName;
  return employees.filter(trabalhador)[0];
}

/* function createEmployee(personalInfo, associatedWith) {
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
} */

module.exports = {
  /* calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap, */
  // getSpeciesByIds,
  getEmployeeByName,
  /* getEmployeeCoverage,
  addEmployee,
  isManager, */
  getAnimalsOlderThan,
  /* getOldestFromFirstSpecies,
  increasePrices,
  createEmployee, */
};
