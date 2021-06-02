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

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  return ids ? ids.map((wantedId) => species.find(({ id }) => id === wantedId)) : [];
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every((resident) => resident.age >= age);
}

const findEmployee = ({ firstName, lastName }, employeeName) =>
  firstName === employeeName || lastName === employeeName;

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((employee) => findEmployee(employee, employeeName)) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

const noParameter = () => species.reduce((acc, crr) => {
  const newObj = {};
  newObj[crr.name] = crr.residents.length;
  return Object.assign(acc, newObj);
}, {});

const yesParameter = (animal) => {
  const wantedSpecie = species.find(({ name }) => name === animal);
  return wantedSpecie.residents.length;
};

function countAnimals(species) {
  return species ? yesParameter(species) : noParameter();
}

console.log(countAnimals());

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
