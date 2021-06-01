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
const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animalSelect, ageSelect) {
  return species
    .find(({ name }) => name === animalSelect)
    .residents
    .every(({ age }) => age >= ageSelect);
}

function getEmployeeByName(nome) {
  if (!nome) return {};
  const i = data.employees;
  return i.find(({ firstName, lastName }) => firstName === nome || lastName === nome);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees
    .some(({ managers }) => managers
      .includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  if (specie === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const { Adult: adulto, Senior: idosos, Child: criança } = data.prices;
  return (adulto * Adult) + (idosos * Senior) + (criança * Child);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const cronograma = {};
  const { hours } = data;
  const days = Object.keys(hours);
  if (!dayName) {
    days.forEach((day) => {
      const { open, close } = hours[day];
      const isOpen = open - close !== 0 ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
      cronograma[day] = isOpen;
    });
    return cronograma;
  }
  const day = days.find((dia) => dia === dayName);
  if (dayName === 'Monday') {
    cronograma[day] = 'CLOSED';
    return cronograma;
  }
  cronograma[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
  return cronograma;
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
