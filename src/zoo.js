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

const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    const emptyVect = [];
    return emptyVect;
  }
  const allSpecies = ids.map((id) => species.find((specie) => specie.id === id));
  return allSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const getSpecie = species.find((specie) => specie.name === animal);
  const isOlder = getSpecie.residents.every((resident) => age < resident.age);
  return isOlder;
}


function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const emptyObject = {};
    return emptyObject;
  }

  const n = employeeName;

  const getEmp = employees.find((employee) => employee.firstName === n || employee.lastName === n);
  return getEmp;
}

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
