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

function getSpeciesByIds(...ids) {
  const searchSpecies = species.filter((specie) => ids.some((id) => specie.id === id));
  return searchSpecies;
}

function getAnimalsOlderThan(animal, age) {
  if (animal === undefined) {
    return [];
  }
  const checkAge = species.find((specie) => specie.name === animal);
  const minAge = checkAge.residents.every((animais) => animais.age >= age);
  return minAge;
}

function getEmployeeByName(employeeName = {}) {
  if (employeeName === undefined) {
    return {};
  }
  const searchEmployees = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return searchEmployees || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}
function isManager(id) {
  const checkManeger = employees.some((cargo) => cargo.managers.some((manager) => manager === id));
  return checkManeger;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = {
    id,
    firstName,
    lastName,
  };
  const associatedWith = {
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  return employees.push(createEmployee(personalInfo, associatedWith));
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
  //   getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  //   getOldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
