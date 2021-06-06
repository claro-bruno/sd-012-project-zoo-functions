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
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  if (ids.length >= 1) {
    return data.species.filter((element, index) => element.id === ids[index]);
  }
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = data.species.find((species) => species.name === animal);
  return specie.residents.every((specimen) => specimen.age >= age);
}

function getEmployeeByName(...employeeName) {
  // seu código aqui
  if (employeeName.length === 0) {
    return {};
  }
  const employee = data.employees.find((person) =>
    person.firstName === employeeName[0] || person.lastName === employeeName[0]);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((element) => element.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const person = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(person);
  // return person;
}

function countAnimals(species) {
  // seu código aqui
  if (!species) {
    const animalHeadCount = {};
    data.species.forEach(({ name, residents }) => {
      animalHeadCount[name] = residents.length;
    });
    return animalHeadCount;
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  const { Child: childNumber = 0, Adult: adultNumber = 0, Senior: seniorNumber = 0 } = entrants;
  const { Child: childPrice, Adult: adultPrice, Senior: seniorPrice } = data.prices;
  return childNumber * childPrice + adultNumber * adultPrice + seniorNumber * seniorPrice;
}

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
