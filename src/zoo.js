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

// const test = data.species.filter((spicie) => spicie.id === '0938aa23-f153-4937-9f88-4858b24d6bce');
// console.log(test);

function getSpeciesByIds(...ids) {
  const selectedSpecie = [];
  ids.forEach((id) => selectedSpecie.push(data.species.find((spicie) => spicie.id === id)));
  return selectedSpecie;
}

// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = data.species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return data.employees.find((employee) => {
      const findEmloyee = employee.firstName === employeeName || employee.lastName === employeeName;
      return findEmloyee;
    });
  } return {};
}

// console.log(getEmployeeByName());
// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

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
