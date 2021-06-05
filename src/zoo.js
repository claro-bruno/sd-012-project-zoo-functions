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
const data = require('./data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const animalId = species.filter((specie) => ids.includes(specie.id));
  return animalId;
}

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const animalAge = species.find((specie) => specie.name === animal);
  const yearsOld = animalAge.residents.every((resident) => resident.age > age);

  return yearsOld;
}

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (!employeeName) { // used '!' come from https://pt.stackoverflow.com/questions/108973/qual-a-fun%C3%A7%C3%A3o-do-operador-exclama%C3%A7%C3%A3o
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

const createEmployee = (personalInfo, associatedWith) => {return {...personalInfo, ...associatedWith};
}
//console.log(createEmployee('juan', 'lion'));
function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

const countAnimals = (specieName) => {
  // seu código aqui
  const selectSpecies = species.find((specie) => specie.name === specieName);
  const returnQtd = {};
  if (specieName) { return selectSpecies.residents.length };

  species.forEach((specie) => { returnQtd[specie.name] = specie.residents.length; });
  return returnQtd;
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
