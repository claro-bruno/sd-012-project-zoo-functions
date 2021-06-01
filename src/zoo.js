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
// const data = require('./data');

const getSpeciesByIds = (...ids) => {
  const array = [];
  ids.forEach((id) => {
    array.push(species.find((specie) => specie.id === id));
  });
  array.forEach((index) => {
    if (index === undefined) {
      return [];
    }
  });
  return array;
};

const getAnimalsOlderThan = (animal, age) => {
  const array = species.find((specie) => specie.name === animal);
  return array.residents.every((resident) => resident.age >= age);
};

const getEmployeeByName = (employeeName) => {
  const obj = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (obj === undefined) {
    return {};
  }
  return obj;
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) => employees.some((employee) =>
  employee.managers.some((manager) => manager === id));

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
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
