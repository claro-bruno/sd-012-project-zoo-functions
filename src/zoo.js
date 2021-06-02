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

// bora começar | let's start

const { species, employees } = require('./data');
const data = require('./data');

const getSpeciesByIds = (...ids) => (ids ? species.filter((e) => ids.includes(e.id)) : []);

const getAnimalsOlderThan = (animal, age) => species.find((e) => e.name === animal).residents
  .every((e) => e.age >= age);

const getEmployeeByName = (employeeName) => (employeeName ? employees.find((e) => e
  .firstName === employeeName || e.lastName === employeeName) : {});

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => employees.find((e) => e.id === id).managers.length < 2;

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  employees[employees.length] = {
    id,
    firstName,
    lastName,
    ...(managers ? { managers } : { managers: [] }),
    ...(responsibleFor ? { responsibleFor } : { responsibleFor: [] }),
  };
};

const countAnimals = (spcName) => (spcName ? species.find((e) => e.name === spcName).residents
  .length : species.reduce((e, a) => ({ ...e, [a.name]: a.residents.length }), {}));

// obj = {names:'nome',residents:[1,2,3,4]}

// const tryer = (e) => {
//   return {[e.names] : e.residents.length}
// }
// console.log(tryer(obj));

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
