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
  if (ids.length === 0) return [];
  if (ids.length === 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  return data.species.filter((specie) => ids.some((spec) => spec === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) => {
    const ag = specie.residents.every((speciee) => speciee.age >= age);
    return specie.name === animal && ag;
  });
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employe) => employe.firstName === employeeName
  || employe.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const managers = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];
  return managers.some((manager) => id === manager);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmploye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmploye);
}

function countAnimals(species) {
  if (species === undefined) {
    const key = {};
    data.species.forEach((specie) => {
      key[specie.name] = specie.residents.length;
    });
    return key;
  }
  return data.species.find((spec) => spec.name === species).residents.length;
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: nAdults = 0, Child: nChildren = 0, Senior: nSeniors = 0 } = entrants;
  const adults = data.prices.Adult * nAdults;
  const children = data.prices.Child * nChildren;
  const seniors = data.prices.Senior * nSeniors;
  const total = adults + children + seniors;
  return total;
}

function getAnimalMap(options) {
  if (options === 0) return 0;
}

function getSchedule(dayName) {
  const week = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) return week;
  return data.hours.find((hour) => hour.hours === dayName);
}

function getOldestFromFirstSpecies(id) {
  const employer = data.employees.find((employe) => employe.id === id);
  const animalID = employer.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === animalID);
  const old = animal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = old;
  const array = [name, sex, age];
  return array;
}

function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;
  const adultPrice = Math.round((Adult * (1 + (percentage / 100)) * 100)) / 100;
  const childPrice = Math.round((Child * (1 + (percentage / 100)) * 100)) / 100;
  const seniorPrice = Math.round((Senior * (1 + (percentage / 100)) * 100)) / 100;
  data.prices = {
    Adult: adultPrice,
    Child: childPrice,
    Senior: seniorPrice,
  };
  return data.prices;
}
function getEmployeeCoverage(idOrName) {
  if (idOrName === 0) return 0;
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
