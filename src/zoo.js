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

const arrayVazio = [];
const objetoVazio = {};

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return arrayVazio;
  }
  const [firstSpecie, secondSpecie] = ids;
  const specie1 = species.filter((specie) => specie.id === firstSpecie);
  const specie2 = species.filter((specie) => specie.id === secondSpecie);
  const allSpecies = [...specie1, ...specie2];
  return allSpecies;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getSpecie = species.filter((specie) => specie.name === animal);
  const getResidents = getSpecie.map((resident) => resident.residents);
  // console.log(getResidents);
  return getResidents.every((specie) => age < specie[0].age);
}

// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return objetoVazio;
  }
  const getEmployee = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return getEmployee;
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {...personalInfo, ...associatedWith};
  return newEmployee;
}

// console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
