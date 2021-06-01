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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const result = [];
  ids.forEach((id) => {
    species.forEach((specie) => {
      if (specie.id === id) {
        result.push(specie);
      }
    });
  });
  return result;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieName = species.find((specie) => (specie.name === animal));
  return specieName.residents.every((resident) => (resident.age >= age));
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) return {};
  return employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    }
    return false;
  });
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  console.log(id);
  // seu código aqui
  return employees.some((employee) => employee.managers.some((manager) => {
    if (manager === id) {
      return true;
    }
    return false;
  }));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(speciesList) {
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
  createEmployee,
  isManager,
  // addEmployee,
  // countAnimals,
  // calculateEntry,
  // getAnimalMap,
  // getSchedule,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // getEmployeeCoverage,
};
