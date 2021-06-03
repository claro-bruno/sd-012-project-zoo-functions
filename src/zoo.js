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
// const { species } = require('./data');
const data = require('./data');

// console.log(data.species[0].id)

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const arraySpecies = ids.map((specieId) => data.species.find((specie) => specie.id === specieId));
  return arraySpecies;
}
// tentei usar o filter mas ele retorna uma array então fica [[{ ... }]]

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => specie.name === animal);
  const animalOlderThan = findSpecie.residents.every((resident) => resident.age > age);
  return animalOlderThan;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const firstName = data.employees.find((employee) => employee.firstName === employeeName);
  const lastName = data.employees.find((employee) => employee.lastName === employeeName);
  if (firstName !== undefined) return firstName;
  return lastName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // { [ {} {} {} {} {} ] }
  const employeesManagers = data.employees.find((employee) => employee.managers.includes(id));
  if (employeesManagers) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployees = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return newEmployees;
}

function countAnimals(species) {
  if (species === undefined) {
    const allAnimals = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const especificAnimal = data.species.find((specie) => specie.name === species);
  return especificAnimal.residents.length;
}
// console.log(countAnimals());

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

console.log(calculateEntry({}));

function getAnimalMap(options) {
  return options;
}

function getSchedule(dayName) {
  return dayName;
}

function getOldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function getEmployeeCoverage(idOrName) {
  return idOrName;
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
