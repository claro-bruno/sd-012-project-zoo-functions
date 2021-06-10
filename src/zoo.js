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
  const speciesById = [];
  ids.forEach((id) => {
    const species = data.species.find((specie) => specie.id === id);
    speciesById.push(species);
  });
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((specie) => specie.name === animal);
  const olderThan = findAnimal.residents.every((resident) => resident.age >= age);
  return olderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employeeName === employee.lastName);
  return findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  let checkManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manage) => manage === id)) {
      checkManager = true;
      return checkManager;
    }
  });
  return checkManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const allSpecies = {};
    data.species.forEach((specie) => {
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  const countSpecie = data.species.find((specie) => specie.name === species)
    .residents.length;
  return countSpecie;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length < 1) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const totalPrice = (data.prices.Adult * Adult) + (data.prices.Child * Child) + (data.prices.Senior * Senior);
  return totalPrice;
}

function getAnimalMap(options) {
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
