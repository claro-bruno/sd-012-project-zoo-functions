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

const {
  employees,
} = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const animals = data.species.filter((specie, i) => specie.id === ids[i]);
  return animals;
}

function getAnimalsOlderThan(animal, age) {
  const Species = data.species.find((specie) => animal === specie.name);
  const Resident = (resident) => resident.age >= age;
  const checkIfOlderThan = Species.residents.every(Resident);
  return checkIfOlderThan;
}

// function getEmployeeByName(employeeName) {
//   const peopleEmployee = data.employees.map(() => {
//     employeeName === employees.firstName || employeeName === employees.lastName;

//     return peopleEmployee;
//   });
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
  getSpeciesByIds,
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  //   getOldestFromFirstSpecies,
  //   increasePrices,
  //   createEmployee,
};
