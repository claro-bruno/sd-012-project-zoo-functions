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
// const { species } = require('./data');
const { employees } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  const selectedSpicie = [];
  ids.forEach((id) => selectedSpicie.push(data.species.find((spicie) => spicie.id === id)));
  return selectedSpicie;
}

function getAnimalsOlderThan(animal, age) {
  const selecteSpicie = data.species.find((specie) => specie.name === animal);
  return selecteSpicie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return employees.find((empl) => {
      const findEmpregado = empl.firstName === employeeName || empl.lastName === employeeName;
      return findEmpregado;
    });
  } return {};
}

function createEmployee(personalInfo, associatedWith) {
  const novoEmpregado = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return novoEmpregado;
}

function isManager(id) {
  let verificaManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) {
      verificaManager = true;
    }
  });
  return verificaManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

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
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
