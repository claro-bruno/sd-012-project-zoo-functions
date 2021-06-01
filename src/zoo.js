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
  const species = ids.map((id) => (data.species.find((speciesId) => speciesId.id === id)));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((species) => species.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeFirstName = data.employees.find(({ firstName }) => (firstName === employeeName));
  const employeeLastName = data.employees.find(({ lastName }) => (lastName === employeeName));
  if (employeeFirstName === undefined && employeeLastName === undefined) {
    return {};
  }
  if (employeeFirstName !== undefined) {
    return employeeFirstName;
  }
  return employeeLastName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(({ managers }) => managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
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
//   calculateEntry,
//   getSchedule,
//   countAnimals,
//   getAnimalMap,
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
