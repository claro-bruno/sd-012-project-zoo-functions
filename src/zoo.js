/* eslint-disable editorconfig/editorconfig */
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

// eslint-disable-next-line no-unused-vars
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === null) {
    return [];
  }
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalSearched = data.species.find((specie) => specie.name === animal);
  return animalSearched.residents.every((animals) => animals.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName == null) {
    return {};
  }
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {};
  return Object.assign(obj, personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species == null) {
    return data.species.reduce((acc, crv) => {
      acc[crv.name] = crv.residents.length;
      return acc;
    }, {});
  }
  const speciePopulation = data.species.find((specie) => specie.name === species);
  return speciePopulation.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, crv) => acc + (entrants[crv] * data.prices[crv]), 0);
}
// options
function getAnimalMap() {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName !== undefined) {
    return { [dayName]: days[dayName] };
  } return days;
}
// id
function getOldestFromFirstSpecies() {
  // seu código aqui
}
// percentage
function increasePrices() {
  // seu código aqui
}
// idOrName
function getEmployeeCoverage() {
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
