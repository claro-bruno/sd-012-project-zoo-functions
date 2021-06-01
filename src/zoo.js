/* eslint-disable max-len */
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

const { employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return ids;
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animals) => animals.name === animal)
    .residents.every((resAge) => resAge.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return ({});
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.some((value) => value === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  return (species ? data.species.find((animal) => animal.name === species)
    .residents.length : data.species.reduce((acc, { name, residents }) =>
    ({ ...acc, [name]: residents.length }), {}));
}

function calculateEntry(entrants) {
  if (!entrants || entrants === 0) return 0;
  const priceTotal = Object.keys(entrants);
  return priceTotal
    .reduce((accumulator, currentValue) =>
      accumulator + (entrants[currentValue] * data.prices[currentValue]), 0);
}
/*
function getAnimalMap(options) {
  // seu código aqui
}
*/
function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  const scheduleDays = days.reduce((acc, curr) => {
    if (curr === 'Monday') {
      acc[curr] = 'CLOSED';
      return acc;
    }
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    return acc;
  }, {});
  if (!dayName) {
    return scheduleDays;
  }
  return { [dayName]: scheduleDays[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const searchId = data.employees.find((empId) =>
    empId.id === id);
  const firstSpecie = searchId.responsibleFor[0];
  const searchSpecie = data.species.find((animal) =>
    animal.id === firstSpecie);
  const sortAnimalsAge = searchSpecie.residents
    .sort((animal1, animal2) => animal2.age - animal1.age);
  const oldestAnimal = [sortAnimalsAge[0].name, sortAnimalsAge[0].sex, sortAnimalsAge[0].age];
  return oldestAnimal;
}

function increasePrices(percentage) {
  const percent = (percentage / 100) + 1;
  prices.Adult = Math.round(prices.Adult * percent * 100) / 100;
  prices.Child = Math.round(prices.Child * percent * 100) / 100;
  prices.Senior = Math.round(prices.Senior * percent * 100) / 100;
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
