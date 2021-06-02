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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) {
    return [];
  }
  const pegaEspecie = species.filter((sId, index) => sId.id === ids[index]);
  return pegaEspecie;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const idadeMinima = species.find((ani) => ani.name === animal)
  .residents.every((ani) => ani.age >= age);
  return idadeMinima;
}
// console.log(getAnimalsOlderThan('otters', 7))

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const achaFunc = employees.find((func) => func.firstName === employeeName || func.lastName === employeeName);
  return achaFunc;
}
// console.log(getEmployeeByName('Wishart'))

// function createEmployee(personalInfo, associatedWith) {
  // const { id, firstName, lastName } = personalInfo;
  // console.log(personalInfo)
  // const { managers, responsibleFor } = associatedWith;
  // console.log(associatedWith)
  // const newEmployee = {personalInfo, associatedWith};
  // return newEmployee;
// }

function isManager(id) {
  const checkId = employees.some((employee, index) => employee.managers[index] === id);
  return checkId;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  employees.push(newEmployee);
  return newEmployee;
}

// function countAnimals(specie) {
//   ///
// }

function calculateEntry(entrants) {
  const { Adult, Child, Senior } = entrants
  if (!entrants) return 0;
  entrants.reduce((acc, act) => {})


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
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
