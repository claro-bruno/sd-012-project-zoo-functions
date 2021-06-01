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
  // if (!ids.length) return [];
  // const getSpeciesById = (id, index) => {
  //   if (data.species[index].id === id) return data.species[index];
  // };
  // return ids.map(getSpeciesById);
  return ids.reduce((acc, id, index) => {
    if (data.species[index].id === id) {
      acc.push(data.species[index]);
    }
    return acc;
  }, []);
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

const actual3 = getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');
const expected3 = [{
  id: '0938aa23-f153-4937-9f88-4858b24d6bce',
  name: 'lions',
  popularity: 4,
  location: 'NE',
  residents: [
    { name: 'Zena', sex: 'female', age: 12 },
    { name: 'Maxwell', sex: 'male', age: 15 },
    { name: 'Faustino', sex: 'male', age: 7 },
    { name: 'Dee', sex: 'female', age: 14 }
  ],
},
{
  id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
  name: 'tigers',
  popularity: 5,
  location: 'NW',
  residents: [
    { name: 'Shu', sex: 'female', age: 19 },
    { name: 'Esther', sex: 'female', age: 17 }
  ],
}];
assert.deepStrictEqual(actual3, expected3);

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

let actual4 = getAnimalsOlderThan('otters', 7);
let expected4 = true;
assert.deepStrictEqual(actual4, expected4);

actual4 = getAnimalsOlderThan('penguins', 10);
expected4 = false;
assert.deepStrictEqual(actual4, expected4);

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
