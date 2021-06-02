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
const { employees } = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}// se o filter não receber nenhum item ele retorna array vazio
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((animalName) => animalName.name === animal)
    .residents.every((specie) => specie.age > age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}
// console.log(getEmployeeByName());

// function createEmployee(personalInfo, associatedWith) {

// }

function isManager(id) {
  const employee = employees
    .some((isEmployee) => isEmployee.managers.find((idManager) => idManager === id));
  // .some((isEmployee) => isEmployee.managers.length === 0 || isEmployee.managers.find((idManager) => idManager === id))// CEO
  return employee;
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));// nigel
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));// burl

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
  getEmployeeByName,
  isManager,
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
