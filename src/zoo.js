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
  if (ids.length === 0) {
    return [];
  }
  const findSpecie = ids.map((index) => species.find((specie) => specie.id === index));
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => animal === specie.name);
  return findSpecie.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

/*
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
 */
module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
/*   calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee, */
};
