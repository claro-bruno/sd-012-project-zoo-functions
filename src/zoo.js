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
  if (ids.length === 0) return [];
  const specieFinder = (id) => data.species.find((specie) => id === specie.id);
  const selectSpecie = ids.map(specieFinder);
  return selectSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const specieFinder = data.species.find((specie) => animal === specie.name);
  const ageCompare = specieFinder.residents.every((resident) => resident.age > age);
  return ageCompare;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const getEmployee = data.employees.find(findEmployee);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (!species) {
    const reduceSpecie = (acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    };
    const speciesObj = data.species.reduce(reduceSpecie, {});
    return speciesObj;
  }
  const findSpecie = data.species.filter(({ name }) => name === species);
  const reduceToSpecieCount = (acc, { residents }) => acc + residents.length;
  const specieCount = findSpecie.reduce(reduceToSpecieCount, 0);
  return specieCount;
}

/* function calculateEntry(entrants) {
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
} */

module.exports = {
  // calculateEntry,
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
