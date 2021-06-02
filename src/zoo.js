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

function getSpeciesByIds(...ids) {
  return data.species.filter((animal, i) => animal.id === ids[i]);
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((e) => e.name === animal).residents.every((resi) => resi.age > age);
}

function getEmployeeByName(employeeName) {
  return !employeeName ? {}
    : data.employees.find(({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers: m }) => m.find((manID) => manID === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  return !species
    ? data.species.reduce((acc, { name: n, residents: r }) => ({ ...acc, [n]: r.length }), '')
    : data.species.find((spe) => spe.name === species).residents.length;
}

function calculateEntry(entrants) {
  return !entrants || entrants === 0
    ? 0
    : Object.keys(entrants).reduce((acc, type) => acc + (entrants[type] * data.prices[type]), 0);
}

// function getAnimalLocation (location) {
//   return data.species
//     .filter(({ location: l }) => ( l === location ))
//     .map(({name}) => name);
// }

function getAnimalMap() {
  // return { (options)
  // NE: getAnimalLocation('NE'),
  // NW: getAnimalLocation('NW'),
  // SE: getAnimalLocation('SE'),
  // SW: getAnimalLocation('SW'),
  // }
}

const getDays = () => Object.keys(data.hours);

const operationTime = () => {
  const resul = getDays().reduce((acc, day) => {
    if (day === 'Monday') {
      acc[day] = 'CLOSED';
      return acc;
    }
    acc[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    return acc;
  }, {});
  return resul;
};

function getSchedule(dayName) {
  return !dayName
    ? operationTime()
    : { [dayName]: operationTime()[dayName] };
}

const getFunc = (id) => data.employees.find((func) => func.id === id);
const getFirstAnimalFrom = (id) => [...getFunc(id).responsibleFor].shift();
const getSpecieOlder = (id) => (Object.values(data.species
  .find((spec) => spec.id === id).residents
  .sort((a, b) => b.age - a.age)[0]));

function getOldestFromFirstSpecies(id) {
  return getSpecieOlder(getFirstAnimalFrom(id));
}

function increasePrices() {
  // seu código aqui (percentage)
}

function getEmployeeCoverage() {
  // seu código aqui (idOrName)
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
