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

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const findSpecie = (id) => species.find((specie) => id === specie.id);
  const speciesSelected = ids.map(findSpecie);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => animal === specie.name);
  const checkEachResident = (resident) => resident.age > age;
  const checkIfOlderThan = findSpecie.residents.every(checkEachResident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const getEmployee = data.employees.find(findEmployee);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

const { employees } = require('./data');

function isManager(id) {
  const manager = employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const informationEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(informationEmployee);
}

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
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
