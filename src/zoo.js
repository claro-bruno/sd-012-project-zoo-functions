/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/
const { species, lionId, ottersId, elephantsId, snakesId, frogsId, bearsId, tigersId, stephanieId, olaId, burlId, employees } = require('./data');
const data = require('./data');

const getSpeciesByIds = (ids) => species.filter((specie) => specie.id === ids);

const getAnimalsOlderThan = (animal, age) => {
  const animais = species.find((specie) => specie.name === animal).residents;
  return animais.every((animalAge) => animalAge.age >= age);
};

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {}
  else return employees.find((employee) => 
      employee.firstName === employeeName 
        || employee.lastName === employeeName)
};

function createEmployee(personalInfo, associatedWith) {
  newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor
  }
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
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