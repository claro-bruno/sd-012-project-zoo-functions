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
  return data.species.some((i) => i.name === animal && i.residents.every((I) => I.age >= age));
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const Ob = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return Ob;
}

function isManager(id) {
  return data.employees.some((i) =>
    i.id === id && (i.managers).length <= 1);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const Ob = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor,
  }
  return data.employees.push(Ob);
}

function countAnimals(species) {
  if (species === undefined) {
    const quant = data.species.reduce((acc, i) => {
      acc[i.name] = i.residents.length;
      return acc;
    }, {});
    return quant;
  }
  const q = data.species.filter((i) => i.name === species);
  return q[0].residents.length;
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
