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

const { species, employees } = data;

function getSpeciesByIds(...ids) {
  const allAnimals = species.filter((specie, index) => specie.id === ids[index]);
  return allAnimals;
}

function getAnimalsOlderThan(animalName, age) {
  const listAnimal = species.find((animal) => animal.name === animalName);
  return listAnimal.residents.every((individual) => individual.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find((individual) => {
      const { firstName, lastName } = individual;
      return firstName === employeeName || lastName === employeeName;
    });
  }
  return {};
}
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager() {
  // seu código aqui
}

function addEmployee() {
  // seu código aqui (id, firstName, lastName, managers, responsibleFor)
}

function countAnimals() {
  // seu código aqui (species)
}

function calculateEntry() {
  // seu código aqui (entrants)
}

function getAnimalMap() {
  // seu código aqui (options)
}

function getSchedule() {
  // seu código aqui (dayName)
}

function getOldestFromFirstSpecies() {
  // seu código aqui (id)
}

function increasePrices() {
  // seu código aqui (percentage)
}

function getEmployeeCoverage() {
  // seu código aqui (idOrName)
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
