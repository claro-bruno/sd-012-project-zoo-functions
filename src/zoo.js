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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
// Questao 1
  const getSpecies = ids.map((id) => data.species.find((specie) => specie.id === id));
  return getSpecies;
}

function getAnimalsOlderThan(animal, age) {
// Questao 2
  const filterSpecie = data.species.find((animais) => animais.name === animal);
  return filterSpecie.residents.every((animais) => animais.age > age);
}

function getEmployeeByName(employeeName) {
// Questao 3
  if (employeeName === undefined) return {};
  const fistAndLast = data.employees.find(({ firstName, lastName }) =>
    (firstName === employeeName || lastName === employeeName));
  return fistAndLast;
}

function createEmployee(personalInfo, associatedWith) {
// Questao 4
  const information = { ...personalInfo, ...associatedWith };
  return information;
}

function isManager(id) {
// Questao 5
  const getEmployee = data.employees.some((employee, index) => employee.managers[index] === id);
  return getEmployee;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
// Questao 6
  const employeeLastList = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(employeeLastList);
}

function countAnimals(species) {
// Questao 7
  if (!species) {
    return data.species.reduce((accumulator, location) => {
      accumulator[location.name] = location.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants) {
// Questao 8
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}

/*
function getAnimalMap(options = {}) {
// Questao 9
const test = {
      NE: [],
      NW: [],
      SE: [],
      SW: []
    };
}

function getSchedule(dayName) {
// Questao 10
}
*/
/*
function getOldestFromFirstSpecies(id) {
// Questao 11

}
*/

function increasePrices(percentage) {
// Questao 12
  const pricePercentage = percentage / 100;
  data.prices.Adult = Math.round((
    (data.prices.Adult * pricePercentage) + data.prices.Adult) * 100) / 100;
  data.prices.Child = Math.round((
    (data.prices.Child * pricePercentage) + data.prices.Child) * 100) / 100;
  data.prices.Senior = Math.round((
    (data.prices.Senior * pricePercentage) + data.prices.Senior) * 100) / 100;
}

/*
function getEmployeeCoverage(idOrName) {
// Questao 13
}
*/

module.exports = {
  calculateEntry,
  //  getSchedule,
  countAnimals,
  //  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  //  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  //  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
