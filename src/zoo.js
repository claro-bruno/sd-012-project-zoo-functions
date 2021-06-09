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
const {
  species,
  employees,
  prices,
  // hours,
} = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const filterAnimals = species.find((specie) => specie.name === animal);
  const filterAge = filterAnimals.residents.every((checkAge) => checkAge.age >= age);
  return filterAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName);
  return employees.find((findEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  if (speciesName) {
    return species.find(({ name }) => speciesName === name).residents.length;
  }
  const speciesScore = species.reduce((accumulator, currentValor) => {
    accumulator[currentValor.name] = currentValor.residents.length;
    return accumulator;
  }, {});
  return speciesScore;
}

function calculateEntry(entrants = { adult: 0, senior: 0, child: 0 }) {
  const { adult = 0, senior = 0, child = 0 } = entrants;
  return adult * prices.Adult + senior * prices.Senior + child * prices.Child;
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

function getSchedule(dayName) {
  const infos = {
    Tuesday: 'Open from 8am until 18pm',
    Wednesday: 'Open from 8am until 18pm',
    Thursday: 'Open from 10am until 20pm',
    Friday: 'Open from 10am until 20pm',
    Saturday: 'Open from 8am until 22pm',
    Sunday: 'Open from 8am until 20pm',
    Monday: 'Closed',
  };
  if (!dayName) return infos;
  const dayWeek = Object.entries(infos).find((day) => day[0] === dayName);
  return { [dayWeek[0]]: dayWeek[1] };
}

/* function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  getSchedule,
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
