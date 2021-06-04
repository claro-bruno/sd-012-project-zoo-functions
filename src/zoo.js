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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const zooData = data.species.filter((especie) => ids.find((animalId) =>
    especie.id === animalId));

  return zooData;
}

// console.log(getSpeciesByIds(''));

// vamos começar!

// 1-Encontrando nome:
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const accessSpecie = data.species.find((specie) => specie.name === animal);
  // 2 - Encontrando true ou false relacionado com a idade:
  return accessSpecie.residents.every((resident) => resident.age >= age);
}
// console.log(getAnimalsOlderThan('lions'));

function getEmployeeByName(employeeName = {}) {
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName
  === employeeName) || employeeName;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // eslint-disable-next-line max-len
  const accessId = data.employees.some((employee) =>
    employee.managers.some(((manage) => manage === id)));
  return accessId;
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// function countAnimals(species) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
//   // seu código aqui
// }

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
  // calculateEntry,
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
  // increasePrices,
  createEmployee,
};
