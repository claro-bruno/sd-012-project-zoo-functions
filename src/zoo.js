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

function getSpeciesByIds(ids) {
  // const speciesByIds = data.species.find((specie) => specie.id === ids);
  // return speciesByIds;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecies = data.species.find((specie) => specie.name === animal);
  const ageResidents = findSpecies.residents.every((resident) => resident.age > age);

  return ageResidents;
}

function getEmployeeByName() {
  // seu código aqui employeeName
}

function createEmployee() {
  // seu código aqui personalInfo, associatedWith
}

function isManager(id) {
  const managerId = data.employees.some((employee) =>
  employee.managers.some((manager) => manager === id));
  return managerId;
  
  /* acessar o data para acessar lista de employees, identificar se algum dos employees é manager.
  retornar se o employee ocupa cargo de gerente em relação ao id, entao testar o id para verificar true ou false. */
}
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee() {
  // seu código aqui id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui species
}

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
