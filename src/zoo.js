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
  return ids.map((idAnimal) => data.species.find((animals) => idAnimal === animals.id));
}
// console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

function getAnimalsOlderThan(animal, age) {
  // Every, so tem que descobrir como :) OK
  // Primeiro chegar ao nome da espécie OK
  // Depois chegar ao nome dos animais Ok
  // Depois chegar a idade dos animais  OK
  // Verificação de idade OK
  const animals = data.species.find((animalList) => animalList.name === animal);
  const individuals = animals.residents;
  const verify = individuals.every((idades) => idades.age > age);
  return verify;
}
// console.log(getAnimalsOlderThan('elephants', 10));

function getEmployeeByName(employeeName) {
  // Probabily metod to utilize: find and map
  // Split the name
  // 1° Find the first name of the employees
  // 2° Find te last name of the employees
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const breakName = employeeName.split(' ');
  const firstName = breakName[0];
  const lastName = breakName[breakName.length - 1];
  const { employees } = data;
  return employees.find((names) => names.firstName === firstName || names.lastName === lastName);
}
console.log(getEmployeeByName('Sthepanie Strauss'));

function createEmployee() {
  // seu código aqui
  // personalInfo, associatedWith
}

function isManager() {
  // seu código aqui
  // id
}

function addEmployee() {
  // seu código aqui
  // id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui
  // species
}

function calculateEntry() {
  // seu código aqui
  // entrants
}

function getAnimalMap() {
  // seu código aqui
  // options
}

function getSchedule() {
  // seu código aqui
  // dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui
  // id
}

function increasePrices() {
  // seu código aqui
  // percentage
}

function getEmployeeCoverage() {
  // seu código aqui
  // idOrName
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
