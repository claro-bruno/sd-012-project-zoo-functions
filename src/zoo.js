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

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }

  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(ids) {
  // seu código aqui
  const takeId = data.employees.filter((employee) => employee.id === ids);
  return takeId
    .some((manager) => manager.managers.length === 1 || manager.managers.length === 0);
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

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
  getEmployeeByName,
  //   getEmployeeCoverage,
  //   addEmployee,
  isManager,
  getAnimalsOlderThan,
  //   getOldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
