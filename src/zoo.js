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
  return ids.map((itemId) => data.species.find((species) => itemId === species.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalGet = data.species.find((item) => item.name === animal);
  return animalGet.residents.every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((item) => {
    if (item.firstName === employeeName || item.lastName === employeeName) return true;
    return false;
  });
}

function createEmployee(personal, associated) {
  return {
    ...personal,
    ...associated,
  };
}

function isManager(id) {
  const person = data.employees.find((item) => item.id === id);
  return person.managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species) {
    return data.species.find((item) => item.name === species).residents.length;
  }
  return data.species.reduce((acc, item) => ({
    ...acc,
    [item.name]: item.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const allKeys = Object.keys(entrants);
  return allKeys.reduce((acc, item) => {
    const total = acc + entrants[item] * data.prices[item];
    return total;
  }, 0);
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
