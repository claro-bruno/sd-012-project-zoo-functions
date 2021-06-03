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

const speciesArray = data.species;
const emplys = data.employees;

function getSpeciesByIds(...ids) {
  return speciesArray.filter((value, i) => value.id === ids[i]);
}

function getAnimalsOlderThan(animal, age) {
  const oldBixo = speciesArray.find((value) => value.name === animal);
  const bixoVelho = oldBixo.residents.every((valuage) => valuage.age >= age);
  return bixoVelho;
}

function getEmployeeByName(employeeName) {
  const result = emplys.find((nL) => nL.firstName === employeeName || nL.lastName === employeeName);
  return result !== undefined ? result : {};
}

function createEmployee(personalInfo, associatedWith) {
  const resultado = { ...personalInfo, ...associatedWith };
  return resultado;
}

function isManager(id) {
  const eGerente = emplys.some((gerente) => gerente.id === id && gerente.managers.length < 2);
  return eGerente;
}

function addEmployee() {
  // id, firstName, lastName, managers, responsibleFor
  // seu código aqui
}

function countAnimals() {
  // species
  // seu código aqui
}

function calculateEntry() {
  // entrants
  // seu código aqui
}

function getAnimalMap() {
  // options
  // seu código aqui
}

function getSchedule() {
  // dayName
  // seu código aqui
}

function getOldestFromFirstSpecies() {
  // id
  // seu código aqui
}

function increasePrices() {
  // percentage
  // seu código aqui
}

function getEmployeeCoverage() {
  // idOrName
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
