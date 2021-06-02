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
const arraysOfData = data.species;


function getSpeciesByIds(...ids) { // 0938aa23-f153-4937-9f88-4858b24d6bce id de teste
  let item = [];
  const argument = ids;
  arraysOfData.forEach((element, index) => {
    if(element.id === argument){
      item = element;
    }
    return item;
  })
  console.log(argument)
  console.log(item)
}
getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46', 'e8481c1d-42ea-4610-8e11-1752cfc05a46');


function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
