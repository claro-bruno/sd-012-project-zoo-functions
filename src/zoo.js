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

// const data = require('./data');

const { species, employees, prices } = require('./data');
// Questão 01
function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}
// console.table(species);
// console.log(species);

// Questão 02
function getAnimalsOlderThan(animal, age) {
  const animalChave = species.find((specie) => animal === specie.name);

  return animalChave.residents.every((residents) => residents.age > age);
}

// Questão 03
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const first = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return (first);
}
// Questão 04
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}
// Questão 05
function isManager(id) {
  // seu código aqui
  // return employees.some((managers) => id.find((idManeger) => employees.managers.includes === id));

  // return employees.some((manage) => manage.managers.includes === id);
  return employees.some((manage) => manage.managers.includes(id));
}
// console.loge(employees);
// Questão 06
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id, firstName, lastName, managers, responsibleFor });
}
// console.log(employees);
// Questão 07
function countAnimals(speciesConunts) {
  const animals = {};
  species.forEach(({ name, residents }) => {
    animals[name] = residents.length;
  });
  const allAnimals = !speciesConunts ? animals : species.find((animal) =>
    animal.name === speciesConunts).residents.length;
  return allAnimals;
}
// Questão 08
function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}
// Questão 09 'Difícil :/'
/*
function getAnimalMap(options) {
  // seu código aqui
}
*/
// Questão 10
function getSchedule(dayName) {
  const schedulesWeek = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return schedulesWeek;
  }
  return { [dayName]: schedulesWeek[dayName] };
}

// Questão 11 - Inspiração do colega ==> ( Rodrigo Merlone )
function getOldestFromFirstSpecies(id) {
  const employee = employees.find((employeeId) => employeeId.id === id);
  const firstIdResponsable = employee.responsibleFor[0];
  const specieOld = species.find((specie) => specie.id === firstIdResponsable)
    .residents.sort((age1, age2) => age2.age - age1.age)[0];
  const { name, sex, age } = specieOld;
  return [name, sex, age];
}

// Questão 12
function increasePrices(percentage) {
  const increasePrice = Object.keys(prices);
  increasePrice.forEach((keyPrice) => {
    prices[keyPrice] = Math.round(prices[keyPrice] * (1 + percentage / 100) * 100) / 100;
  });
  return increasePrice;
}
/*
function getEmployeeCoverage(idOrName) {
 // seu código aqui
}
*/

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
