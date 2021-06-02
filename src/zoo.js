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
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) =>
    employee.managers.some((value) => value === id));
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
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
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
