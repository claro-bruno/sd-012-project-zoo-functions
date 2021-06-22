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

const { species, employees } = require('./data');
const data = require('./data');

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

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
