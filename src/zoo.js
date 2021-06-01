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

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids.length) return [];
  return data.species.filter((specie, index) => specie.id === ids[index]);
  // dica de usar o index dentro do filter na monitoria.
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui animal, age
  // const name = species[0].name;
  const findindSpecie = species.find((specie) => specie.name === animal);
  return findindSpecie.residents.every((resident) => age < resident.age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.lastName === employeeName || employee.firstName === employeeName;
  return data.employees.find(findEmployee);
}
console.log(getEmployeeByName('Emery'));

// function createEmployee() {
//   // seu código aqui personalInfo, associatedWith
// }

// function isManager() {
//   // seu código aqui id
// }

// function addEmployee() {
//   // seu código aqui id, firstName, lastName, managers, responsibleFor
// }

// function countAnimals() {
//   // seu código aqui species
// }

// function calculateEntry() {
//   // seu código aqui entrants
// }

// function getAnimalMap() {
//   // seu código aqui options
// }

// function getSchedule() {
//   // seu código aqui dayName
// }

// function getOldestFromFirstSpecies() {
//   // seu código aqui id
// }

// function increasePrices() {
//   // seu código aqui percentage
// }

// function getEmployeeCoverage() {
//   // seu código aqui idOrName
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
  // createEmployee,
};
