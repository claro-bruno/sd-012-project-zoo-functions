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
  if (ids === '') {
    return [];
  }
  const filteredSpeciesById = species
    .filter((animals) => animals.id === ids[0] || animals.id === ids[1]);

  return filteredSpeciesById;
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = species.find((specie) => specie.name === animal);
  return animalSpecie.residents.every((animalResident) => animalResident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const filteredEmployeesByName = employees
    .find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);

  return filteredEmployeesByName;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);

  return employee;
}

function isManager(id) {
  const filteredEmployeesById = employees
    .some((employee) => employee.managers.includes(id));

  return filteredEmployeesById;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return employees.push(newEmployee);
}

// function countAnimals(species1) {
//   // seu código aqui
// }

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
  // countAnimals,
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
