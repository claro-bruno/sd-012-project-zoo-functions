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
  return data.species.filter((specie) => ids.find((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((specie) => specie.name === animal);
  return especie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName = {}) {
  return data.employees.find((employee) => employeeName === employee.firstName
  || employeeName === employee.lastName) || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  const empty = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      const especieVar = specie.name;
      const totalAnimals = specie.residents.length;
      empty[especieVar] = totalAnimals;
    });
    return empty;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === '') {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Senior * data.prices.Senior) + (Child * data.prices.Child);
}

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
  calculateEntry,
  // getSchedule,
  countAnimals,
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
