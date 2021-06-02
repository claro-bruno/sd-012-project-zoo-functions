/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const { species, employees } = require('./data');
// const data = require('./data');

// function getSpeciesByIds(ids) {
//   // seu código aqui
// }

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = species.find((animals) => animals.name === animal);
  return animalName.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const employee = employees.find(
    (emp) => emp.firstName === employeeName || emp.lastName === employeeName,
  );
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const obj = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return obj;
}

function isManager(id) {
  // seu código aqui
  const manager = employees.some(
    (manage) => manage.id === id && manage.managers.length === 1,
  );
  return manager;
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(specie) {
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
  // getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
