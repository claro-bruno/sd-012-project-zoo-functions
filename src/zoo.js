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
const pricesArray = data.prices;
// const hoursArray = data.hours;

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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmploy = { id, firstName, lastName, managers, responsibleFor };
  emplys.push(newEmploy);
  return newEmploy;
}

function countAnimals(species) {
  const vazia = {};
  let teste = 0;
  if (species === undefined) {
    const newKeys = speciesArray.map((key) => key.name);
    const newValues = speciesArray.map((value) => value.residents.length);
    for (let i = 0; i < newKeys.length; i += 1) {
      vazia[newKeys[i]] = newValues[i];
    } return vazia;
  }
  teste = speciesArray.find((value) => value.name === species); return teste.residents.length;
}

function calculateEntry(entrants) {
  let resultado = 0;
  if (entrants === undefined || entrants === {}) return resultado;
  for (let i = 0; i < Object.keys(entrants).length; i += 1) {
    resultado += Object.values(entrants)[i] * pricesArray[Object.keys(entrants)[i]];
  } return resultado;
}

function getAnimalMap() {
  // options
  // seu código aqui
}

function getSchedule() {
  // dayName
  // let testeDay = 0;
  // let testeVazio = {};
  // if (dayName === 'Monday') return {[dayName]:'CLOSED'};
  // if(dayName === undefined) {
  //   for (let i = 0; i < Object.keys(hoursArray).length; i += 1) {
  //    console.log(testeVazio = {[Object.values(hoursArray)[i]] : `Open from ${Object.values(hoursArray)[i].open}am until ${Object.values(hoursArray)[i].close}pm`});
  //    }
  // }
  // return {[dayName]: `Open from ${hoursArray[dayName].open}am until ${hoursArray[dayName].close -12}pm`}
}

function getOldestFromFirstSpecies(id) {
  const cuidador = emplys.find((value) => id === value.id);
  const fName = speciesArray.find((value2) => value2.id === cuidador.responsibleFor[0]);
  const result = fName.residents.reduce((acc, valor) => Math.max(acc, valor.age), 0);
  const moreOlden = fName.residents.find((maxAge) => maxAge.age === result);
  return [moreOlden.name, moreOlden.sex, moreOlden.age];
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
