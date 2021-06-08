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
  const species = ids.map((id) => (data.species.find((speciesId) => speciesId.id === id)));
  return species;
}
console.log(getSpeciesByIds());
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((species) => species.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));
console.log(getAnimalsOlderThan('otters', 10));

function getEmployeeByName(employeeName) {
  const nameEmployee = data.employees.find(({ firstName }) => (firstName === employeeName));
  const lastNameEmployee = data.employees.find(({ lastName }) => (lastName === employeeName));
  if (nameEmployee === undefined && lastNameEmployee === undefined) {
    return {};
  }
  if (nameEmployee !== undefined) {
    return nameEmployee;
  }
  return lastNameEmployee;
}
console.log(getEmployeeByName());
console.log(getEmployeeByName('Wilburn'));
console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// function isManager(id) {
// seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// seu código aqui
// }

// function countAnimals(species) {
// seu código aqui
// }

// function calculateEntry(entrants) {
// seu código aqui
// }

// function getAnimalMap(options) {
// seu código aqui
// }

// function getSchedule(dayName) {
// seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
// seu código aqui
// }

// function increasePrices(percentage) {
// seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
// seu código aqui
// }

module.exports = {
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
