/* eslint-disable max-lines-per-function */
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

// const { get } = require('cypress/types/lodash');
// const { find } = require('cypress/types/lodash');
const { species, employees, prices, hours } = require('./data');
const data = require('./data');

// Referência: Natalia Souza - turma 11.
function getSpeciesByIds(...ids) {
  const animalsIds = (animals) => ids.find((animalId) => animals.id === animalId);
  return data.species.filter(animalsIds);
}

// Referência: Natalia Souza - turma 11.
function getAnimalsOlderThan(animal, age) {
  const findAnimalName = (specie) => (specie.name === animal);
  const checkAnimalsAge = (specieAge) => (specieAge.age >= age);
  return species.find(findAnimalName).residents.every(checkAnimalsAge);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const employeeFider = (name) => name.firstName === employeeName || name.lastName === employeeName;
  return employees.find(employeeFider);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Referência: Natalia Souza - turma 11.
function isManager(id) {
  const managerFinder = (employee) => employee.managers.includes(id);
  return employees.some(managerFinder);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEnployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEnployee);
}

// Referência: Natalia Souza - turma 11.
function countAnimals(species1) {
  if (!species1) {
    return species.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === species1).residents.length;
}

// Referencia: Rodrigo Merlone.
function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const callback = (acc, entrant) => acc + entrants[entrant] * prices[entrant];
  return Object.keys(entrants).reduce(callback, 0);
}

// function getAnimalMap(options) {
// if (!options) {
//   return species.reduce((acc, specie) => {
//     const callbackFilter = (specie2) => specie2.location === specie.location;
//     const callbackMap = (animal) => animal.name;
//     acc[specie.location] = species.filter(callbackFilter).map(callbackMap);
//     return acc;
//   }, {});
// }
// const speciesAndAnimalsName = species.reduce((acc, specie) => {
// const callbackFilter = (specie2) => specie2.location === specie.location;
// const callbackMap = (animal) => animal.residents.map((animal2) => animal2.name);
//   acc[specie.name] = specie.residents.map((animal) => animal.name);
//   return acc;
// }, {});
// return species.reduce((acc, specie) => {
//   acc[specie.location] = speciesAndAnimalsName;
//   return acc;
// }, {});
//   return console.log(speciesAndAnimalsName);
// }
// console.log(getAnimalMap());

// Referência: Natalia Souza - turma 11.
function getSchedule(dayName) {
  if (!dayName) {
    return Object.keys(hours).reduce((acc, day) => {
      acc[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      acc.Monday = 'CLOSED';
      return acc;
    }, {});
  }
  if (hours[dayName].open === 0 && hours[dayName].close === 0) return { [dayName]: 'CLOSED' };
  return { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  const callback = (employee) => employee.id === id;
  const firstSpecieRespId = employees.find(callback).responsibleFor[0];
  const oldestAnimal = species
    .find((specie) => specie.id === firstSpecieRespId).residents
    .reduce((acc, resident) => ((acc.age > resident.age) ? acc : resident));
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((newPrice) => {
    prices[newPrice] = Math.round(prices[newPrice] * (1 + percentage / 100) * 100) / 100;
  });
  return prices;
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
