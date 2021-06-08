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
const {
  species,
  employees,
  prices,
  hours,
} = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
 return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const filterAnimals = species.find((specie) => specie.name === animal);
  const filterAge = filterAnimals.residents.every((checkAge) => checkAge.age >= age);
  return filterAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName);
  return employees.find((findEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith};
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({id, firstName, lastName, managers, responsibleFor});
}

function countAnimals(species) {
  // seu código aqui
}

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
