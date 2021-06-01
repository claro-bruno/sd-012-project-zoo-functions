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
  return ids.map((actualId) => data.species.find((actualAnimal) => actualAnimal.id === actualId));
}

function getAnimalsOlderThan(animalName, age) {
  const allAnimals = data.species.find((actualAnimal) => actualAnimal.name === animalName);
  return allAnimals.residents.every((currentAnimal) => currentAnimal.age > age);
}

function getEmployeeByName(employee) {
  if (typeof employee === 'undefined') {
    return {};
  }
  const elements = data.employees;
  return elements.find((actual) => actual.firstName === employee || actual.lastName === employee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof species === 'undefined') {
    return data.species.reduce((accumulator, animalSpecie) => {
      accumulator[animalSpecie.name] = animalSpecie.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;

  return (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
