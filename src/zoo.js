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

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((species) => species.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));
console.log(getAnimalsOlderThan('otters', 10));

// function getEmployeeByName(employeeName) {
// seu código aqui
// }

// function createEmployee(personalInfo, associatedWith) {
// seu código aqui
// }

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
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
