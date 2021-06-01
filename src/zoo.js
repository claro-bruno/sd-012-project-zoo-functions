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

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length > 0) {
    const aux = [];
    const arrayAnimals = ids.map((id) => data.species.filter((animal) => animal.id === id));
    arrayAnimals.forEach((animal) => aux.push(...animal));
    return aux;
  }
  return [];
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.some((e) => e.name === animal && e.residents.every((a) => a.age > age));
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    const aux = { ...data.employees.filter((e) =>
      e.firstName === employeeName || e.lastName === employeeName) };
    return aux['0'];
  }
  return {};
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

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
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  // createEmployee,
  // isManager,
  // addEmployee,
  // countAnimals,
  // calculateEntry,
  // getAnimalMap,
  // getSchedule,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // getEmployeeCoverage,
};
