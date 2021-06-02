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

function getSpeciesByIds(ids) {
  const callBack = (code) => {
    for (let index = 0; index < data.species.length; index += 1) {
      if (code === data.species[index].id) {
        return data.species[index];
      }
    }
  };
  return ids.map(callBack);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .find(({ name }) => name === animal)
    .residents.every((individuo) => individuo.age >= age);
  // every retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return ({});
  }
  return data.employees
    .find((func) => func.firstName === employeeName || func.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  data.employees.push({
    ...personalInfo, 
    ...associatedWith,
  });
  return data.employees[data.employees.length - 1];
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((func) => func.managers
    .includes(id));
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
