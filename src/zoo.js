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

const { species } = require('./data');
const data = require('./data');

const { employees } = data;
// console.log(employees);

function getSpeciesByIds(...ids) {
  const mySpecies = [];
  ids.forEach((id) => mySpecies.push((species.find((specie) => specie.id === id))));
  return mySpecies;
}

function getAnimalsOlderThan(animal, age) {
  const searchAnimal = species.find((specie) => specie.name === animal);
  const verifyAge = searchAnimal.residents.every((resident) => resident.age >= age);
  return verifyAge;
}

function getEmployeeByName(employeeName) {
  let myEmployee = {};
  const test = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  myEmployee = { ...test };
  return myEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const myEmployee = { ...personalInfo, ...associatedWith };
  return myEmployee;
}

function isManager(id) {
  const manager = employees.reduce((acc, current) => {
    if (!acc.includes(...current.managers)) {
      acc.push(...current.managers);
    }
    return acc;
  }, []);

  const checkManager = manager.includes(id);
  return checkManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  data.employees.push(newPerson);
}

function countAnimals(species) {
  // seu código aqui
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
