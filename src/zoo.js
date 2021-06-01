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
const { species, employees, prices, hours } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal).residents.every((res) => res.age >= age);
}

function getEmployeeByName(empName) {
  // seu código aqui
  // if (!employeeName) return {};
  // melhoria na função de Lucas Chamas Nahas :)

  return employees.find((emp) => emp.firstName === empName || emp.lastName === empName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // const { id, firstName, lastName } = personalInfo;
  // const { managers, responsibleFor } = associatedWith;
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  // seu código aqui
  if (!speciesName) {
    const obj = {};
    species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  }
  return species.find((specie) => specie.name === speciesName).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce(((sum, price) => sum + prices[price] * entrants[price]), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

const returnString = (day) => `Open from ${hours[day].open}am until ${hours[day].close % 12}pm`;

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {
    Monday: 'CLOSED',
    Tuesday: returnString('Tuesday'),
    Wednesday: returnString('Wednesday'),
    Thursday: returnString('Thursday'),
    Friday: returnString('Friday'),
    Saturday: returnString('Saturday'),
    Sunday: returnString('Sunday'),
  };
  if (!dayName) {
    return schedule;
  }
  return { [dayName]: schedule[dayName] };
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
