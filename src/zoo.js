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
  const search = ids.map((element) => (data.species.find((key) => key.id === element)));
  return search;
}
// Consegui retornar mais de uma chave com a ajuda do colega Rodrigo Facury que sugeriu o uso do map.

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((name) => name.name === animal);
  const every = getAnimal.residents.every((key) => key.age > age);
  return every;
}
// Fiz o encadeamento do every com o find baseada no código do colega Rodrigo Facury;

// console.log(getAnimalsOlderThan('lions', 20));

function getEmployeeByName(employeeName) {
  const getEmployee = data.employees.find((key) => key.firstName === employeeName || key.lastName === employeeName);
  if (getEmployee === undefined) {
    return {};
  };
  return getEmployee;
}

console.log(getEmployeeByName());

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
