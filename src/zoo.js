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

const { species } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));
  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => specie.name === animal);
  const checkAge = getAnimal.residents.every((resident) => resident.age >= age);
  return checkAge;
}

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const eN = employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
  return eN;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const eManager = data.employees.find((employee) => employee.managers.includes(id));
  if (eManager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmp = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return newEmp;
}

function countAnimals(speciesName) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});

  if (!speciesName) {
    return allAnimals;
  }
  return allAnimals[speciesName];

function calculateEntry(entrants) {
  // seu código aqui
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
