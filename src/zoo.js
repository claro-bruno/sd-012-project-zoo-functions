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
// Incio do Projeto
const data = require('./data');

const { species, employees, prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((item) => ids.find((item2) => item.id === item2));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = species.find((item) => item.name === animal);
  return findAnimal.residents.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const findByName = employees.find((item) => item.firstName === employeeName);
  const findByLast = employees.find((item) => item.lastName === employeeName);
  if (findByName) {
    return findByName;
  }
  if (findByLast) {
    return findByLast;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const manager = employees.some((item) => item.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

const animalsAndPopulation = species.reduce((accumulator, item) => {
  accumulator[item.name] = item.residents.length;
  return accumulator;
}, {});

function countAnimals(animalToCount) {
  // seu código aqui
  if (animalToCount === undefined) {
    return animalsAndPopulation;
  }
  const countAnimal = species.find((item) => item.name === animalToCount).residents.length;

  return countAnimal;
}

// Function calculateEntry feita com ajuda do Thalles durante plantao de ajuda
function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = prices.Adult * Adult;
  const childPrice = prices.Child * Child;
  const seniorPrice = prices.Senior * Senior;

  return adultPrice + childPrice + seniorPrice;
}

/* function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  createEmployee,
  isManager,
  addEmployee,
  countAnimals,
  calculateEntry,
};

/* module.exports = {
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
}; */
