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
  return data.species.filter((element, index) => element.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.filter((element) => element.name === animal);
  return animals.map((element) => element.residents.every((refAnimal) => refAnimal.age >= age))[0];
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { managers, responsibleFor } = associatedWith;
  const newObj = { ...personalInfo };
  newObj.managers = [...managers];
  newObj.responsibleFor = [...responsibleFor];
  return newObj;
}

function isManager(id) {
  return data.employees.some((element, index) => element.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const index = data.employees.length;
  data.employees[index] = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function countAnimals(speciess) {
  const numberOf = data.species.map((element) => element.residents.length);
  const obj = (lions, tigers, bears, penguins, otters, frogs, snakes, elephants, giraffes) => ({
    lions,
    tigers,
    bears,
    penguins,
    otters,
    frogs,
    snakes,
    elephants,
    giraffes,
  });
  if (speciess !== undefined) {
    return obj(...numberOf)[speciess];
  }
  return obj(...numberOf);
}

// function calculateEntry(entrants) {
//   // seu código aqui
// }

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
