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

// requisito 1
function getSpeciesByIds(...ids) {
  // const speciesByIds = data.species.find((specie) => specie.id === ids);
  const speciesByIds = data.species.filter((specie) => ids.find((id) => specie.id === id));
  return speciesByIds;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))

// requisito 2
function getAnimalsOlderThan(animal, age) {
  const findSpecies = data.species.find((specie) => specie.name === animal);
  const ageResidents = findSpecies.residents.every((resident) => resident.age > age);

  return ageResidents;
}

// requisito 3
function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const findEmployee = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return findEmployee;
}
// console.log(getEmployeeByName('Emery'));

// requisito 4
function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

// requisito 5
function isManager(id) {
  const managerId = data.employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
  return managerId;
  /* acessar o data para acessar lista de employees, identificar se algum dos employees é manager.
  retornar se o employee ocupa cargo de gerente em relação ao id, entao testar o id para verificar true ou false. */
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // managers e responsibleFor sao arrays, adicionar ao data.employees...
  // ...usando push a partir dos dados preenchidos nos parametros assim adicionando ao fim da lista
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  const addNewEmployee = data.employees.push(newEmployee);
  return addNewEmployee;
}
// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe', managers = [], responsibleFor = []));

// requisito 7
function countAnimals() {
  // seu código aqui species
}

// requisito 8
function calculateEntry() {
  // seu código aqui entrants
}

// requisito 9
function getAnimalMap() {
  // seu código aqui options
}

// requisiito 10
function getSchedule() {
  // seu código aqui dayName
}

// requisito 11
function getOldestFromFirstSpecies() {
  // seu código aqui id
}

// requisito 12
function increasePrices() {
  // seu código aqui percentage
}

// requisito 13
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
