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

// console.log(data.species[0].id)

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const arraySpecies = ids.map((specieId) => data.species.find((specie) => specie.id === specieId));
  return arraySpecies;
};
// tentei usar o filter mas ele retorna uma array então fica [[{ ... }]]

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => specie.name === animal);
  const animalOlderThan = findSpecie.residents.every((resident) => resident.age > age);
  return animalOlderThan;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const firstName = data.employees.find((employee) => employee.firstName === employeeName);
  const lastName = data.employees.find((employee) => employee.lastName === employeeName);
  if (firstName !== undefined) return firstName;
  return lastName;
}

function createEmployee(personalInfo, associatedWith) {
  return {...personalInfo, ...associatedWith};
}

function isManager(id) {
  // { [ {} {} {} {} {} ] }
  const employeesManagers = data.employees.find((employee) => employee.managers.includes(id))
  if (employeesManagers) return true;
  return false;
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployees = data.employees.push( { id, firstName, lastName, managers, responsibleFor } )
  return newEmployees;
}

function countAnimals(species) {
  // if (species.length === 0) {
  //   const speciesCount = data.species.reduce((acc, curr) => {
      
  //     return acc + curr
  //   }, {})
  // }
  // return 
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
