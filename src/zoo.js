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

// function getSpeciesByIds(...ids) {
//   // seu código aqui
//   if (arguments.length === 0) {
//     return [];
//   }
//   const arraySpecie = ids.map((idi) => species.find((specie) => specie.id === idi));
//   return arraySpecie;
// }

// function getAnimalsOlderThan(animal, age) {
//   // seu código aqui
//   const minimumAge = species.find((specie) => specie.name === animal)
//     .residents.every((resident) => resident.age >= age);
//   return minimumAge;
// }

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (arguments.length === 0) {
    return {};
  }

  const name = employeeName;

  const employeeObject = employees.find((e) => e.firstName === name || e.lastName === name);
  return employeeObject;
}

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
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  // getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  // getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
