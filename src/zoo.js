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

const getSpeciesByIds = (...ids) => {
  const result = [];
  if (ids === undefined) return result;
  ids.forEach((id) =>
    result
      .push(data.species
        .find((specie) => specie.id === id)));
  return result;
};

const getAnimalsOlderThan = (animal, age) => {
  const result = data.species
    .find(({ name }) => name === animal)
    .residents
    .every((resident) => resident.age >= age);
  return result;
};

const getEmployeeByName = (employeeName) => {
  let result = {};
  if (employeeName === undefined) return result;
  result = data.employees
    .find(({ firstName, lastName }) =>
      firstName === employeeName
      || lastName === employeeName);
  return result;
};

const createEmployee = (personalInfo, associatedWith) => {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
};

const isManager = (id) => {
  const managerIds = [];
  data.employees.forEach(({ managers }) => managerIds.push(...managers));
  const result = managerIds.some((managerId) => managerId === id);
  return result;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees
    .push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (species) => {
  if (species === undefined) {
    const result = {};
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  const result = data.species
    .find(({ name }) => name === species)
    .residents.length;
  return result;
};

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
