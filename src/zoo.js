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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((search) => {
    const { id } = search;
    return id === ids[0] || id === ids[1];
  });
}

function getAnimalsOlderThan(animal, age) {
  const specific = species
    .filter((specie) => specie.name === animal)
    .reduce((acc, curr) => {
      acc.push(curr.residents);
      return acc;
    }, []);
  return specific[0].every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const result = employees.filter((search) => {
    const { firstName, lastName } = search;
    return firstName === employeeName || lastName === employeeName;
  });
  return result.length > 0 ? result[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees
    .reduce((acc, curr) => {
      acc.push(...curr.managers);
      return acc;
    }, [])
    .some((manager) => manager === id);
}

// prettier-ignore
function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  employees.push(obj);
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
