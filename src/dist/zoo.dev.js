"use strict";

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
var data = require('./data');

var species = data.species,
    employees = data.employees,
    hours = data.hours,
    prices = data.prices;

function getSpeciesByIds() {
  for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
    ids[_key] = arguments[_key];
  }

  return species.filter(function (specie, index) {
    return specie.id === ids[index];
  });
}

function getAnimalsOlderThan(animal, age) {
  var dataAnimal = species.find(function (specie) {
    return specie.name === animal;
  });
  var checkAgeAnimals = dataAnimal.residents.every(function (resident) {
    return resident.age > age;
  });
  return checkAgeAnimals;
}

function getEmployeeByName(employeeName) {
  var employeeData = employees.find(function (employ) {
    return employ.firstName === employeeName || employ.lastName === employeeName;
  });
  return employeeName !== undefined ? employeeData : {};
}

function createEmployee(personalInfo, associatedWith) {
  var id = personalInfo.id,
      firstName = personalInfo.firstName,
      lastName = personalInfo.lastName;
  var managers = associatedWith.managers,
      responsibleFor = associatedWith.responsibleFor;
  var newEmployee = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor
  };
  return newEmployee;
}

function isManager(id) {
  var employeesManager = employees.filter(function (employee) {
    return employee.managers.length > 0;
  });
  return employeesManager.some(function (manager) {
    return manager.managers.includes(id);
  });
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  var managersArray = managers.forEach(function (element) {
    managersArray.push(element);
  });
  var responsibleForArray = responsibleFor.forEach(function (element) {
    responsibleFor.push(element);
  });
  var newEmployee = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managersArray,
    responsibleFor: responsibleForArray
  };
  employees.push(newEmployee);
}

function countAnimals(specie) {
  if (specie !== undefined) {
    var resultCountSpecie = species.find(function (especie) {
      return especie.name === specie;
    }).residents.length;
    return resultCountSpecie;
  }

  var resultCountSpecies = {};
  data.species.forEach(function (spec) {
    resultCountSpecies[spec.name] = spec.residents.length;
  });
  return resultCountSpecies;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  var totalEntryAdult = entrants.Adult * prices.Adult;
  var totalEntryChild = entrants.Child * prices.Child;
  var totalEntrySenior = entrants.Senior * prices.Senior;
  return parseFloat(totalEntryAdult + totalEntryChild + totalEntrySenior);
}

var entrants = {
  Adult: 1,
  Child: 0,
  Senior: 0
};
var actual = calculateEntry(entrants);
console.log(actual);

function getAnimalMap(options) {// seu código aqui
}

function getSchedule(dayName) {// seu código aqui
}

function getOldestFromFirstSpecies(id) {// seu código aqui
}

function increasePrices(percentage) {// seu código aqui
}

function getEmployeeCoverage(idOrName) {// seu código aqui
}

module.exports = {
  calculateEntry: calculateEntry,
  getSchedule: getSchedule,
  countAnimals: countAnimals,
  getAnimalMap: getAnimalMap,
  getSpeciesByIds: getSpeciesByIds,
  getEmployeeByName: getEmployeeByName,
  getEmployeeCoverage: getEmployeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  getAnimalsOlderThan: getAnimalsOlderThan,
  getOldestFromFirstSpecies: getOldestFromFirstSpecies,
  increasePrices: increasePrices,
  createEmployee: createEmployee
};