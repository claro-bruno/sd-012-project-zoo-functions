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
  return data.species.filter((specie) => ids.includes(specie.id));
}// se o filter não receber nenhum item ele retorna array vazio
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((animalName) => animalName.name === animal)
    .residents.every((specie) => specie.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));

// function getAnimalsOlderThan(animal, age) {
//   return data.species
//   .some(({name}, {popularity}) => name === animal && popularity > age)
// }
// console.log(getAnimalsOlderThan('lions', 4))
// ==========================================================

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
  getSpeciesByIds,
  getAnimalsOlderThan,
};

// module.exports = {
//   calculateEntry,
//   getSchedule,
//   countAnimals,
//   getAnimalMap,
//   getSpeciesByIds,
//   getEmployeeByName,
//   getEmployeeCoverage,
//   addEmployee,
//   isManager,
//   getAnimalsOlderThan,
//   getOldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
// };
