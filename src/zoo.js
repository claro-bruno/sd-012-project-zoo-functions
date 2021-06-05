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

const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  return (
    species.filter((specie) => (
      ids.some((id) => specie.id === id)
    ))
  );
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.filter((specie) => (
      specie.name === animal
    )).every((filteredSpecie) => (
      filteredSpecie.residents.every((resident) => (
        resident.age >= age
      ))
    ))
  );
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return (
    employees.filter((employee) => (
      employee.firstName === employeeName || employee.lastName === employeeName
    ))[0]
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return (
    employees.some((employee) => (
      employee.managers.some((manager) => (
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
  return species.find((specie) => (
    specie.name === speciesTeste
  )).residents.length;
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
