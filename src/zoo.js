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

const {species, employees} = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const findId = species.filter((specie) => ids.find((id) => id === specie.id)); // O filter já retorna um array vazio se nçao recebe nenhum parâmetro.
  return findId;
}

console.log(getSpeciesByIds('tigersId'));

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const verifySpecie = species.find((specie) => specie.name === animal);
  return verifySpecie.residents.every((ageId) => ageId.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employee = employees.find((name) => name.firstName === employeeName || name.lastName === employeeName);
  return employee;
}
// console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...associatedWith, ...personalInfo };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}

function countAnimals(animal) {
//   // seu código aqui
//   if (!species) return {};
// const animals = species.forEach((animal) => {
//   species.find((name) => name === animal.name)
// })
// return animals;
}

function calculateEntry(entrants) {
  // seu código aqui
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
