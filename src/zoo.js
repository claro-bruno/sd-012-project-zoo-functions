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
  // seu código aqui
  const returnedSpecies = [];

  if (ids.length === 0) {
    return returnedSpecies;
  } if (ids.length === 1) {
    returnedSpecies.push(data.species.find((specie) => specie.id === ids[0]));
    return returnedSpecies;
  } if (ids.length > 1) {
    return data.species.filter((specie) => ids.some((id) => specie.id === id));
  }
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const returnEmpty = {};
  if (!employeeName) {
    return returnEmpty;
  }
  const returnEmployee = data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return returnEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employeeAdd = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employeeAdd;
}

function countAnimals(species) {
  // seu código aqui
  const allSpecies = {};
  const getAnimals = data.species;
  getAnimals.forEach((animal) => {
    allSpecies[animal.name] = animal.residents.length;
  });
  if (!species) {
    return allSpecies;
  }
  const returnNumber = data.species.find((specie) => specie.name === species).residents.length;
  return returnNumber;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult: adult = 0, Senior: senior = 0, Child: child = 0 } = entrants;
  const valueAdult = adult * data.prices.Adult;
  const valueSenior = senior * data.prices.Senior;
  const valueChild = child * data.prices.Child;
  const total = valueAdult + valueSenior + valueChild;
  return total;
}

console.log(calculateEntry({}));

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
