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

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  return (
    species.filter(({ id: specieId }) => (
      ids.some((id) => specieId === id)
    ))
  );
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.find(({ name }) => (
      name === animal
    )).residents.every(({ age: residentAge }) => (
      residentAge >= age
    ))
  );
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return (
    employees.find(({ firstName, lastName }) => (
      firstName === employeeName || lastName === employeeName
    ))
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return (
    employees.some(({ managers }) => (
      managers.some((manager) => (
        manager === id
      ))
    ))
  );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesTeste) {
  if (!speciesTeste) {
    const animal = {};
    species.forEach(({ name, residents }) => {
      animal[name] = residents.length;
    });
    return animal;
  }
  return species.find(({ name }) => (
    name === speciesTeste
  )).residents.length;
}

function calculateEntry(entrants = {}) {
  if (entrants === {}) return 0;
  return (
    Object.keys(entrants).reduce((acc, people) => (
      acc + prices[people] * entrants[people]
    ), 0)
  );
}

function getAnimalMap(options) {
  const obj = {};
  if (!options) {
    species.forEach(([location]) => {
      obj[location] = [];
    });
    species.forEach(([name, location]) => {
      obj[location].push(name);
    });
    return obj;
  }
}

function verifySchedule(day, open, close) {
  if (!open || !close) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
}

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    Object.entries(hours).forEach(([day, { open, close }]) => {
      schedule[day] = verifySchedule(day, open, close);
    });
    return schedule;
  }
  schedule[dayName] = verifySchedule(dayName, hours[dayName].open, hours[dayName].close);
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const specieId = employees.find(({ id: employeeId }) => (
    employeeId === id
  )).responsibleFor[0];

  const olderSpecie = species.find(({ id: employeeId }) => (
    employeeId === specieId
  )).residents.sort(({ age: aAge }, { age: bAge }) => bAge - aAge)[0];

  return Object.values(olderSpecie);
}

getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

function increasePrices(percentage) {
  Object.entries(prices).forEach(([people, price]) => {
    prices[people] = Math.round((price * (percentage / 100 + 1)) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  return idOrName;
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
