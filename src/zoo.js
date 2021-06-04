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

function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(nomes, idade) {
  const index = data.species
    .find((nome) => nome.name === nomes).residents
    .filter((idades) => idades.age)
    .every((age) => age.age >= idade);
  return index;
}

function getEmployeeByName(nome) {
  if (nome === undefined) {
    return {};
  }
  const ml = data.employees;
  const retorno = ml.find((employee) => employee.firstName === nome || employee.lastName === nome);
  return retorno;
}

function createEmployee(person, associate) {
  const obj = {
    id: person.id,
    firstName: person.firstName,
    lastName: person.lastName,
    managers: associate.managers,
    responsibleFor: associate.responsibleFor,
  };
  return obj;
}

function isManager(id) {
  return data.employees.some((valor) => valor.managers.some((manager) =>
    manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(obj);
}

function countAnimals(contador) {
  let obj = {};
  if (contador !== undefined) {
    obj = data.species.find((cont) => cont.name === contador).residents.length;
  } else {
    data.species.forEach((valor) => { obj[valor.name] = valor.residents.length; });
  }
  return obj;
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
