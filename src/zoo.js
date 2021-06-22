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

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const especiesAnimais = species.filter((especie) => ids
    .find((especie2) => especie2 === especie.id));
  return especiesAnimais;
}

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((especie2) => especie2.name === animal).residents;
  const idadeAnimal = especie.every((idade) => idade.age >= age);
  return idadeAnimal;
}
// console.log(getAnimalsOlderThan('otters'));

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const pessoaColaboradora = employees.find((primeiroNome) => primeiroNome
    .firstName === employeeName || primeiroNome.lastName === employeeName);
  return pessoaColaboradora;
}

function createEmployee(personalInfo, associatedWith) {
  const novoColaborador = { ...personalInfo, ...associatedWith };
  return novoColaborador;
}

function isManager(id) {
  const gerente = employees.some((cargo) => cargo.managers.includes(id));
  return gerente;
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novoColaborador = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(novoColaborador);
}

// function countAnimals(species) {
//   if (species === undefined) {
//   const contaAnimais = species.reduce((accumulator, curreValeu) => { accumulator[curreValeu.name] = curreValeu.residents.length;
//  return accumulator;
//   }, {});
//   return contaAnimais;
//   const especies = species.find((especie) => especie.name === species);
//   return especies.residents.length;
// }

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === undefined) { return 0; }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
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