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
// MEU TESTE AQUI
/*
const filteringSpecies = species
  .filter((specie) => specie.id === '0938aa23-f153-4937-9f88-4858b24d6bce');

console.log(filteringSpecies); */

// FUNÇÃO PARA O TESTE ACIMA

/*
function getSpeciesByIds(...ids) {
  // seu código aqui
  if (typeof ids === 'undefined') {
    return [];
  }

  const filteringSpecies = species.filter((specie) => specie.id === ids);
  return filteringSpecies;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); */

function getAnimalsOlderThan(animal, minAge) {
  // seu código aqui
  const findAnimls = data.species.find((specie) => specie.name === animal);
  return findAnimls.residents.every((resident) => resident.age >= minAge);
}

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
//   calculateEntry,
//   getSchedule,
//   countAnimals,
//   getAnimalMap,
//   getSpeciesByIds,
//   getEmployeeByName,
//   getEmployeeCoverage,
//   addEmployee,
//   isManager,
  getAnimalsOlderThan,
//   getOldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
};
