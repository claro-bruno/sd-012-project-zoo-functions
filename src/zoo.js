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

// const { species, employees } = require('./data');
const data = require('./data');

const { species } = data;
const { employees } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  const findSpecie = species.filter((specie) =>
    ids.some((id) => specie.id === id));
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const verifyName = species.find((specie) => specie.name === animal);
  const verifyAnimals = verifyName.residents.every((verifyAge) => verifyAge.age >= age);
  return verifyAnimals;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName);
  return employees.find((findEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const verifyId = employees.find((employee) => employee.id === id).managers.length <= 1;
  return verifyId;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ ...employees, id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  // seu código aqui
  if (!specie) {
    const animals = species.reduce((obj, animal) => {
      const objAnimal = obj;
      objAnimal[animal.name] = animal.residents.length;
      return objAnimal;
    }, {});
    return animals;
  }
  const verifyPopularity = species.find((animal) => animal.name === specie).residents.length;
  return verifyPopularity;
}

console.log(countAnimals());

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
