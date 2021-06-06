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

const { species } = data;
const { employees } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((specie) => (ids.includes(specie.id)));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((animalsFind) => animalsFind.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return ({});
  const fn = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  return employees.find(fn);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesParam) {
  if (!speciesParam) {
    return species.reduce((accumulator, current) => ({ ...accumulator,
      [current.name]: current.residents.length }), {}); // importante definir valor inicial como objeto vazio, senão ele pega o primeiro objeto inteiro, sem reduzir
  }
  return species.find((specie) => specie.name === speciesParam).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants; // parametro inicial importante, para evitar retorno NaN
  const { prices } = data;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((responsibleFor) => responsibleFor.id === id).responsibleFor[0];
  const animals = species.find((search) => search.id === animal);
  const resindentAnimals = animals.residents;
  resindentAnimals.sort((a, b) => b.age - a.age);
  const { name, sex, age } = resindentAnimals[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  const adult = Math.round((Adult + Adult * percentage * 0.01) * 100) / 100; // x 0.01 para transformar em 0,XX. Ex: 12 vira 0,12
  const senior = Math.round((Senior + Senior * percentage * 0.01) * 100) / 100;
  const child = Math.round((Child + Child * percentage * 0.01) * 100) / 100;
  data.prices = {
    Adult: adult,
    Senior: senior,
    Child: child,
  };
}

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
