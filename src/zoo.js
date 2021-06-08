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
const { employees, species, prices, hours } = require('./data');

// Algoritmo do colega Juan Rezende
function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

// Algoritmo do colega Juan Rezende
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((species1) => species1.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

// Algoritmo do colega Juan Rezende
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
}

// Algoritmo do colega Juan Rezende
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

// Algoritmo do colega Juan Rezende
function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

// Algoritmo do colega Juan Rezende
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// Algoritmo do colega Juan Rezende
function countAnimals(species2) {
  // seu código aqui
  if (!species2) {
    const animalObj = {};
    species.forEach((specie) => { animalObj[specie.name] = specie.residents.length; });
    return animalObj;
  }
  return species.find((specie) => specie.name === species2).residents.length;
}

// Algoritmo do colega Juan Rezende
function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  return Object.keys(entrants).reduce(((sum, price) => sum + prices[price] * entrants[price]), 0);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// Algoritmo do colega Juan Rezende
function getSchedule(dayName) {
  // seu código aqui
  const schedule = {};
  if (!dayName) {
    const scheduleDays = Object.keys(hours);
    scheduleDays.forEach((day) => {
      const { open, close } = hours[day];
      schedule[day] = day !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    });
    return schedule;
  }
  const { open, close } = hours[dayName];
  schedule[dayName] = dayName !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const person = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldest[0]);
}

// Algoritmo do colega Juan Rezende
function increasePrices(percentage) {
  // seu código aqui
  const priceKeys = Object.keys(prices);
  priceKeys.forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
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
