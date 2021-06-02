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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((itemId) => data.species.find((animal) => animal.id === itemId));
}

function getAnimalsOlderThan(animal, age) {
  const animalSel = data.species.find((item) => item.name === animal);
  return animalSel.residents.every((individuo) => individuo.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((em) => em.lastName === employeeName || em.firstName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const personal = {
    id: `${personalInfo.id}`,
    firstName: `${personalInfo.firstName}`,
    lastName: `${personalInfo.lastName}`,
  };
  const associated = {
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return { ...personal, ...associated };
}

// function isManager(id) {
  
// }


function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id: `${id}`,
    firstName: `${firstName}`,
    lastName: `${lastName}`,
    managers: `${managers}`,
    responsibleFor: responsibleFor,
  }
  return data.employees.push(newEmployee);
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
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
