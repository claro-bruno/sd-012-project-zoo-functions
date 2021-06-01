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
  // seu código aqui
  return ids.map((id) => data.species.filter((specie) => specie.id === id)[0]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const isOlder = (bixo) => bixo.age > age;
  return data.species.find((specie) => specie.name === animal).residents.every(isOlder);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const name = employeeName;
  const filter = ({ firstName, lastName }) => firstName === name || lastName === name;
  return data.employees.find(filter);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const algum = (valor) => valor === id;
  return data.employees.some(({ managers }) => managers.some(algum));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(obj);
}

function countAnimals(species) {
  // seu código aqui
  if (species) return data.species.find(({ name }) => name === species).residents.length;
  return data.species.reduce((acc, { name, residents }) =>
    ({ ...acc, [name]: residents.length }), {});
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  return Object.keys(entrants).reduce((acc, cur) => acc + entrants[cur] * data.prices[cur], 0);
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
