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
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species
    .filter((animal) => ids
      .find((animalId) => animalId === animal.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((animals) => animals.name === animal)
    .residents
    .every((animals) => animals.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employees.find((employee) => (
    employeeName === employee.firstName || employeeName === employee.lastName))) {
    return employees.find((employee) =>
      (employeeName === employee.firstName || employeeName === employee.lastName));
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((person) => person.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
function countAnimals(specie) {
  // seu código aqui
  if (specie === undefined) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === specie).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === {}) return 0;
  if (entrants === undefined) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: adulto, Child: crianca, Senior: senhor } = prices;
  return (adulto * Adult) + (crianca * Child) + (senhor * Senior);
  // const price = Object.values(prices);
  // const gateA = price[0];
  // const gateC = price[1];
  // const gateS = price[2];
  // const sum = `${gateA * entrants[0] + gateC * entrants[1] + gateS * entrants[2]}`;
  // return sum;
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

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
