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
  const speciesList = [];
  ids.forEach((id) => {
    const animal = data.species.find((specie) => specie.id === id);
    speciesList.push(animal);
  });
  return speciesList;
}

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((specie) => specie.name === animal);
  return selectedAnimal.residents.every((specificAnimal) => specificAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((selectedEmployee) => {
      const first = selectedEmployee.firstName === employeeName;
      const second = selectedEmployee.lastName === employeeName;
      return first || second;
    });
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

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
  getEmployeeByName,
  //   getEmployeeCoverage,
  //   addEmployee,
  //   isManager,
  getAnimalsOlderThan,
  //   getOldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
