const assert = require('assert');
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
  // seu código aqui
  if (!ids.length) {
    return [];
  }
}

const actual = getSpeciesByIds();
const expected = [];
assert.deepStrictEqual(actual, expected);

const actual2 = getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
const expected2 = [{
  id: '0938aa23-f153-4937-9f88-4858b24d6bce',
  name: 'lions',
  popularity: 4,
  location: 'NE',
  residents: [
    { name: 'Zena', sex: 'female', age: 12 },
    { name: 'Maxwell', sex: 'male', age: 15 },
    { name: 'Faustino', sex: 'male', age: 7 },
    { name: 'Dee', sex: 'female', age: 14 },
  ],
}];
assert.deepStrictEqual(actual2, expected2);

// function getAnimalsOlderThan(animal, age) {
//   // seu código aqui
// }

// function getEmployeeByName(employeeName) {
//   // seu código aqui
// }

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(species) {
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
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  // getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
