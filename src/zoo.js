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

const { species, employees, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((actualId) => species.find((speciesId) => speciesId.id === actualId));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((indexAnimal) => indexAnimal.name === animal);
  return animals.residents.every((indexAge) => indexAge.age >= age);
}

function getEmployeeByName(employeeN) {
  if (!employeeN) return {};
  return employees.find((index) => index.firstName === employeeN || index.lastName === employeeN);
}

function createEmployee(personalInfo, associatedWith) {
  // const newEmployee = {
  //   id: personalInfo.id,
  //   firstName: personalInfo.firstName,
  //   lastName: personalInfo.lastName,
  //   managers: associatedWith.managers,
  //   responsibleFor: associatedWith.responsibleFor,
  // };
  // employees.push(newEmployee);
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((person) => person.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

function countAnimals(specie) {
  if (!specie) {
    const newArr = {};
    return data.species.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, newArr);
  }
  const findSpecie = data.species.find((animal) => animal.name === specie);
  return findSpecie.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult: numberA = 0, Child: numberC = 0, Senior: numberS = 0 } = entrants;
  return (numberA * prices.Adult) + (numberC * prices.Child) + (numberS * prices.Senior);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function fusoHorario(scheduleTime) {
  if (scheduleTime > 12) return `${scheduleTime - 12}pm`;
  return `${scheduleTime}am`;
}

function msgSchedule(msg) {
  if (msg === 'Monday') return 'CLOSED';
  return `Open from ${fusoHorario(hours[msg].open)} until ${fusoHorario(hours[msg].close)}`;
}

let result = {};

function result2(day) {
  result[day] = msgSchedule(day);
}

function getSchedule(dayName) {
  result = {};
  if (!dayName) {
    Object.keys(hours).forEach(result2);
  } else {
    result[dayName] = msgSchedule(dayName);
  }
  return result;
}

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
  calculateEntry,
  getSchedule,
  countAnimals,
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
