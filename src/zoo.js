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

function getSpeciesByIds(...ids) {
// Questao 1
  const getSpecies = ids.map((id) => data.species.find((specie) => specie.id === id));
  return getSpecies;
}

/* function getAnimalsOlderThan(animal, age) {
// Questao 2
  const filterSpecie = (arr) => arr.filter(
    ({ animal, age }) =>
      animal === 'name'
      && age >= age,
    );
    const getAnimalsOlderThan = getAnimalsOlderThan(species);
}
*/
/*
function getEmployeeByName(employeeName) {
// Questao 3
}
*/
function createEmployee(personalInfo, associatedWith) {
// Questao 4
  const information = { ...personalInfo, ...associatedWith };
  return information;
}

/*
function isManager(id) {
// Questao 5
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// Questao 6
}

function countAnimals(species) {
// Questao 7
}

function calculateEntry(entrants) {
// Questao 8
}

function getAnimalMap(options) {
// Questao 9
}

function getSchedule(dayName) {
// Questao 10
}

function getOldestFromFirstSpecies(id) {
// Questao 11
}

function increasePrices(percentage) {
// Questao 12
}

function getEmployeeCoverage(idOrName) {
// Questao 13
}
*/

module.exports = {
//  calculateEntry,
//  getSchedule,
//  countAnimals,
//  getAnimalMap,
  getSpeciesByIds,
  //  getEmployeeByName,
  //  getEmployeeCoverage,
  //  addEmployee,
  //  isManager,
  //  getAnimalsOlderThan,
  //  getOldestFromFirstSpecies,
  //  increasePrices,
  createEmployee,
};
