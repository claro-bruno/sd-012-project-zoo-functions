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

const { species, employees } = data;
// , employees, hours, prices

function getSpeciesByIds(...ids) {
  const allAnimais = species.filter((specie, index) => specie.id === ids[index]);
  return allAnimais;
}
function getAnimalsOlderThan(animal, age) {
  const nomeSpecie = species.find((specie) => specie.name === animal);
  return nomeSpecie.residents.every((specieAnimal) => specieAnimal.age >= age);
}

// console.log(getAnimalsOlderThan('lions', 4));

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = {
    managers: (managers) || [],
    responsibleFor: (responsibleFor) || [],
  };

  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals() {

  //   seu código aqui
  // (species)
}

function calculateEntry() {

  //  seu código aqui
  // (entrants)
}

function getAnimalMap() {

  //  seu código aqui
  // (options)
}

function getSchedule() {

  //  seu código aqui
  // (dayName)
}

function getOldestFromFirstSpecies() {

  //  seu código aqui
  // (id)
}

function increasePrices() {

  //  seu código aqui
  // (percentage)
}

function getEmployeeCoverage() {

  //  seu código aqui
  // (idOrName)
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
