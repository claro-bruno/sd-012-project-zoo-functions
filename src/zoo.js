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
  return species.filter((elem) => ids.includes(elem.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elem) => elem.name === animal)
    .residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((elem) =>
    elem.firstName === employeeName || elem.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((elem) => elem.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addEmp);
}

function countAnimals(specie) {
  const array = {};
  species.forEach(({ name, residents }) => { array[name] = residents.length; });
  return specie === undefined
    ? array
    : species.find((elem2) => elem2.name === specie).residents.length;
}

function calculateEntry(entrants = 0) {
  let soma = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  soma += prices.Adult * Adult;
  soma += prices.Child * Child;
  soma += prices.Senior * Senior;
  return soma;
}

function getAnimalMap(options) {
  // const regioes = {
  //   NE: [],
  //   NW: [],
  //   SE: [],
  //   SW: [],
  // };
  // species.map((elem) => regioes[elem.location].push(elem.name));
  // species.forEach((animal) => regioes[animal.location] = species.map((elem) =>))
  // return regioes;
}
// console.log(getAnimalMap());

function getSchedule(dayName) {
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  return dayName === undefined ? schedule : { [dayName]: schedule[dayName] };
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
