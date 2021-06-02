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
  const resultado = ids.map((id) => data.species.find((specie) => specie.id === id));
  return resultado;
}

function getAnimalsOlderThan(animal, age) {
  let resultado = true;
  const targetSpecie = data.species.find((specie) => specie.name === animal);
  const youngResidents = targetSpecie.residents.filter((resident) => resident.age < age);
  if (youngResidents.length !== 0) {
    resultado = false;
  }
  return resultado;
}

function getEmployeeByName(employeeName) {
  const r = data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  if (r === undefined) {
    return {};
  }
  return r;
}

function createEmployee(personalInfo, associatedWith) {
  const resultado = { ...personalInfo, ...associatedWith };
  return resultado;
}

function isManager(id) {
  const resultado = data.employees.find((emp) => emp.managers.find((manager) => manager === id));
  if (resultado === undefined) {
    return false;
  }
  return true;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
function countAnimals(species) {
  let resultado;
  if (species === undefined) {
    resultado = {};
    data.species.forEach((specie) => {
      resultado[specie.name] = specie.residents.length;
    });
  } else {
    const targetSpecie = data.species.find((specie) => specie.name === species);
    resultado = targetSpecie.residents.length;
  }
  return resultado;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = data.prices.Adult;
  const childPrice = data.prices.Child;
  const seniorPrice = data.prices.Senior;
  const resultado = Adult * adultPrice + Child * childPrice + Senior * seniorPrice;
  return resultado;
}
function getAnimalMap() {
  // options
}

function getSchedule() {
  // dayName
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  const targetEmployee = data.employees.find((employee) => employee.id === id);
  const animal = data.species.find((specie) => specie.id === targetEmployee.responsibleFor[0]);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices() {
  // percentage
  // seu código aqui
}

function getEmployeeCoverage() {
  // idOrName
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
