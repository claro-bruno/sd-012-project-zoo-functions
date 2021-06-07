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

const { species, employees, prices } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...args) {
  return species.filter((animal) => args.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const chosenAnimal = species.find((anim) => anim.name === animal);
  return chosenAnimal.residents.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  const checkFirstName = employees.find((person) => person.firstName === employeeName);
  const checkLastName = employees.find((person) => person.lastName === employeeName);
  if (checkFirstName !== undefined) {
    return checkFirstName;
  }
  if (checkLastName !== undefined) {
    return checkLastName;
  }
  return ({});
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// function countAnimals(especime) {

// }

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const values = [];
  Object.keys(entrants).forEach((key) => {
    values.push(entrants[key] * prices[key]);
  });
  return values.reduce((accum, entry) => accum + entry);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  const operator = (1 + (percentage / 100));

  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round((prices[key] * operator) * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
