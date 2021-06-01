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
  const { species } = data;
  const selectedSpecies = [];
  const findId = (id) => species.find((specie) => specie.id === id);
  ids.forEach((id) => selectedSpecies.push(findId(id)));
  return selectedSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const animalData = data.species.find((elem) => elem.name === animal);
  return animalData.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const gotEmployee = employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  if (gotEmployee) return gotEmployee;
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) => employee.managers.some((elem) => elem === id));
}

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
