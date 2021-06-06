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
  // const newEmploy = [id, firstName, lastName, managers, responsibleFor];
  // console.log(newEmploy);
  // newEmploy.managers === undefined ? newEmploy.managers = [] : false
  // newEmploy.responsibleFor === undefined ? newEmploy.responsibleFor = [] : false;
  // emplys.push(newEmploy);
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
