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

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = species.find((species1) => species1.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species2) {
  // seu código aqui
  if (!species2) {
    const animalObj = {};
    species.forEach((specie) => { animalObj[specie.name] = specie.residents.length; });
    return animalObj;
  }
  return species.find((specie) => specie.name === species2).residents.length;
}

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

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

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
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
