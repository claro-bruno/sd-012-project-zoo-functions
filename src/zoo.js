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

const { species, employees, hours } = require('./data');
let { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const returnedSpecies = [];

  if (ids.length === 0) {
    return returnedSpecies;
  } if (ids.length === 1) {
    returnedSpecies.push(species.find((specie) => specie.id === ids[0]));
    return returnedSpecies;
  } if (ids.length > 1) {
    return species.filter((specie) => ids.some((id) => specie.id === id));
  }
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const returnEmpty = {};
  if (!employeeName) {
    return returnEmpty;
  }
  const returnEmployee = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return returnEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  const find = employees.some(({ managers }) => managers.includes(id));
  return find;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeAdd = employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employeeAdd;
}

function countAnimals(speciesCount) {
  // seu código aqui
  const allSpecies = {};
  species.forEach((animal) => {
    allSpecies[animal.name] = animal.residents.length;
  });
  if (!speciesCount) {
    return allSpecies;
  }
  const returnNumber = species.find((specie) => specie.name === speciesCount).residents.length;
  return returnNumber;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult: adult = 0, Senior: senior = 0, Child: child = 0 } = entrants;
  const valueAdult = adult * prices.Adult;
  const valueSenior = senior * prices.Senior;
  const valueChild = child * prices.Child;
  const total = valueAdult + valueSenior + valueChild;
  return total;
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
  const { Adult, Senior, Child } = prices;
  const percent = percentage / 100;
  const increaseAdult = Math.round((Adult * (1 + percent)) * 100) / 100;
  const increaseSenior = Math.round((Senior * (1 + percent)) * 100) / 100;
  const increaseChild = Math.round((Child * (1 + percent)) * 100) / 100;
  prices = {
    Adult: increaseAdult,
    Senior: increaseSenior,
    Child: increaseChild,
  };
  return prices;
}

function getAnimalById(...animalId) {
  const speciesId = [];
  animalId.forEach((id) => {
    const animal = species.find((specie) => specie.id === id);
    speciesId.push(animal.name);
  });
  return speciesId;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const returnEmployees = {};
  if (!idOrName) {
    employees.forEach((emp) => {
      returnEmployees[`${emp.firstName} ${emp.lastName}`] = getAnimalById(...emp.responsibleFor);
    });
    return returnEmployees;
  }
  if (typeof idOrName !== 'undefined') {
    const find = employees.find((emp) => idOrName === emp.firstName
    || idOrName === emp.lastName || idOrName === emp.id);
    returnEmployees[`${find.firstName} ${find.lastName}`] = getAnimalById(...find.responsibleFor);
  }
  return returnEmployees;
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
