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

function getSpeciesByIds(...species) {
  return species.map((itemId) => data.species.find((specie) => specie.id === itemId));
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((old) => old.name === animal);
  return nomeAnimal.residents.every((ag) => ag.age > age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const emp = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return emp;
}
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((manage) => manage.managers.includes(id));
}

// manager = [] significa que se não receber parâmetro esse é seu valor
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(add);
}

function countAnimals() {
  // if (species === undefined) data.species.map((specie) => specie.name = specie.residents.length);
}

// console.log(countAnimals());

function calculateEntry() {
  // seu código aqui entrants
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
