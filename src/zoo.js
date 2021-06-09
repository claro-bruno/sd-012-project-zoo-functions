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
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((intemArray) => {
    intemArray.name === animal && intemArray.residents.every((item) => item.age >= age);
  });
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  } if else {
    return data.employees.find((intemArray) => {
      intemArray.firstName === employeeName || intemArray.lastName === employeeName
    });
  };
}

function createEmployee(personalInfo, associatedWith) {
  return (personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some((itemArray) => {
    itemArray.id === id && (itemArray.managers).length <= 1
  });
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return (id, firstName, lastName, managers, responsibleFor
  );
}

function countAnimals(species) {
  return species;
}

function calculateEntry(entrants) {
  return entrants;
}

function getAnimalMap(options) {
  return options;
}

function getSchedule(dayName) {
  return dayName;
}

function getOldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
}

function getEmployeeCoverage(idOrName) {
  return idOrName;
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
