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
  const newArray = [];
  const inputId = species.filter((especie) => especie.id === ids);
  const inputArray = inputId.forEach((especie) => newArray.push(especie));
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  const verifyAnimal = species.find((animalSpecies) => animalSpecies.name === animal);
  const verifyOlderThan = verifyAnimal.every((animals) => animals.residents.age > age);
  return verifyOlderThan;
}

function getEmployeeByName(employeeName) {
  const nameArray = [];
  const verifyNames = employees.find(
    (name) => name.firstName === employeeName || name.lastName === employeeName,
  );
  nameArray.push(verifyNames);
  return nameArray;
}

function createEmployee(personalInfo, associatedWith) {
  const EmployeeCreated = personalInfo.map((newEmployee) => {
    return { `id: ${personalInfo.id} firstName: ${personalInfo.firstName} lastName: ${personalInfo.lastName}`};
  });
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
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
