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

// console.log(data);

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((speci, index) => speci.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // achar o nome da especie dentro do array (find e every)
  const specieName = species.find((specie) => specie.name === animal);
  const residentsAge = specieName.residents.every((specie) => specie.age > age);
  return residentsAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // Primeiro eu verifico se o parametro é indefinido.
  if (typeof employeeName !== 'undefined') {
    const employeesFirstName = data.employees.find((employe) => employe.firstName === employeeName);
    const employeesLastName = employees.find((employe) => employe.lastName === employeeName);
    // Depois verifico se  nós temos o primeiro nome.
    if (typeof employeesFirstName === 'undefined') {
      return employeesLastName;
    }
    return employeesFirstName;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // Recebo os parametros e faço uma desconstrução dentro de um novo array.
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  // Verifica se algum dos elementos dentro do array é igual a o item que está dentro do managers
  const findManager = employees.some((employe) => employe.managers.some((item) => item === id));
  return findManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // ex bem simples, porém esqueci de adicionar '[]' como default parameters
  const moreEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(moreEmployee);
}

function countAnimals() {
  // seu código aqui
}

function calculateEntry() {
  // seu código aqui
}

function getAnimalMap() {
  // seu código aqui
}

function getSchedule() {
  // seu código aqui
}

function getOldestFromFirstSpecies() {
  // seu código aqui
}

function increasePrices() {
  // seu código aqui
}

function getEmployeeCoverage() {
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
