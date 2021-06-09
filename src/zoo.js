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
const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  let speciesById = [];
  for (let index = 0; index < ids.length; index += 1) {
    const speciesFilter = (species.filter((specie) => specie.id === ids[index]));
    speciesById = [...speciesById, ...speciesFilter];
  }
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const specieByName = (species.filter((specie) => (specie.name === animal)));
  const { residents } = specieByName[0];
  const everyAnimal = (checkAnimalsAge) =>
    (Object.values(checkAnimalsAge).every((resident) =>
      resident.age > age));
  return everyAnimal(residents);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return ({});
  }
  return (employees.find((value) =>
    (value.firstName === employeeName || value.lastName === employeeName)));
}

function createEmployee(personalInfo, associatedWith) {
  employees.push({ ...personalInfo, ...associatedWith });
  return (employees[employees.length - 1]);
}

const isManager = (id) => (employees.some((value) => value.managers.some((ids) => ids === id)));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employees;
}

function countAnimals(speciess) {
  if (speciess === undefined) {
    const animalCounter = {};
    species.forEach((value) => {
      (animalCounter[value.name] = value.residents.length);
    });
    return (animalCounter);
  }
  return (species.find((value) => value.name === speciess).residents.length);
}

function calculateEntry(entrants = { Adult: 0, Senior: 0, Child: 0 }) {
  function EntrantsConstructor(Adult = 0, Senior = 0, Child = 0) {
    this.Adult = Adult;
    this.Senior = Senior;
    this.Child = Child;
  }
  const entrants2 = new EntrantsConstructor(entrants.Adult, entrants.Senior, entrants.Child);
  return (
    (entrants2.Adult * prices.Adult)
    + (entrants2.Senior * prices.Senior)
    + (entrants2.Child * prices.Child));
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
