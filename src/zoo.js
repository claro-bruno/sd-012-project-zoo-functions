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

const { species, employees, prices } = require('./data');
// const data = require('./data');

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
    const employeesFirstName = employees.find((employe) => employe.firstName === employeeName);
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

function countAnimals(specie) {
  // seu código aqui
  const animalList = {};
  if (typeof specie === 'undefined') {
    species.forEach((item) => { animalList[item.name] = item.residents.length; });
    return animalList;
  }
  return species.find((item) => item.name === specie).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined') return 0;
  let seniors = entrants.Senior;
  if (typeof seniors === 'undefined') seniors = 0;
  let adults = entrants.Adult;
  if (typeof adults === 'undefined') adults = 0;
  let childs = entrants.Child;
  if (typeof childs === 'undefined') childs = 0;
  return (adults * prices.Adult) + (seniors * prices.Senior) + (childs * prices.Child);
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
