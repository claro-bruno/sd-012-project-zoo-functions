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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  const filterSpecies = species.filter((specie) => ids.some((id) => specie.id === id));
  return filterSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const filterAge = species.find((specie) => specie.name === animal);
  return filterAge.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName = {}) {
  const findNames = employees.find((employee) => employeeName === employee.firstName);
  const findLastNames = employees.find((employee) => employeeName === employee.lastName);

  return findNames || findLastNames || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species1) {
  if (species1 !== undefined) {
    const animals = species.find((specie) => specie.name === species1);
    return animals.residents.length;
  }
  const genAnimals = species.reduce((acc, crr) => {
    acc[crr.name] = crr.residents.length;
    return acc;
  }, {});

  return genAnimals;
}

function calculateEntry(entrants = 0) {
  if (typeof entrants !== 'object' || entrants.length === 0) return 0;

  const total = Object.keys(entrants).reduce((acc, cr) => (acc + (entrants[cr] * prices[cr])), 0);

  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const daysList = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  if (typeof dayName === 'string') {
    return { [dayName]: daysList[dayName] };
  }

  return daysList;
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findAnimal = species.find((specie) => specie.id === findEmployee)
    .residents.reduce((acc, crr) => {
      if (acc.age > crr.age) {
        return acc;
      }
      return crr;
    });
  return [findAnimal.name, findAnimal.sex, findAnimal.age];
}

function increasePrices(percentage) {
  const valor = percentage / 100;

  Object.keys(prices).forEach((price) => {
    prices[price] = Math.round(prices[price] * (valor + 1) * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
