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

const { species } = data;

const { employees } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const resultado = species.filter((specie) => ids.includes(specie.id));
  return resultado;
}

function getAnimalsOlderThan(animal, age) {
  const filterAnimals = species.filter((specie) =>
    animal.includes(specie.name));
  const checksAge = filterAnimals.every((item, index) => age < item.residents[index].age);
  return checksAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employ = employees.find((em) => { return (employeeName === em.firstName
    || employeeName === em.lastName) });
  return employ;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
}

function isManager(id) {
  const managers = employees.map((employee) => employee.managers);
  const idIsManager = managers.some((manager, index) => manager[index] === id);
  return idIsManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {

 }

function countAnimals(species) {
  
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
