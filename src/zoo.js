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
// const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const especies = [];
  if (ids.length === 0) {
    return ids;
  }
  if (ids.length === 1) {
    especies.push(data.species.find((specie) => specie.id === ids[0]));
    return especies;
  }
  for (let index = 0; index < ids.length; index += 1) {
    especies.push(data.species.find((specie) => specie.id === ids[index]));
  }
  return especies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especieAnimal = data.species.find((specie) => specie.name === animal);
  const verifyAge = Object.values(especieAnimal.residents).every((resident) => resident.age >= age);
  return verifyAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const nameFunc = data.employees.find((employee) => employee.firstName === employeeName);
  const lastNameFunc = data.employees.find((employee) => employee.lastName === employeeName);

  if (nameFunc !== undefined) {
    return nameFunc;
  }
  if (lastNameFunc !== undefined) {
    return lastNameFunc;
  }
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  // Método .flat visto no link https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays;
  const getManagers = (data.employees.map((employee) => employee.managers)).flat();
  const checkManagers = getManagers.some((manager) => manager === id);
  return checkManagers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novoFuncionario);
}

function countAnimals(species) {
  // seu código aqui
  const animais = data.species.filter((especie) => especie.name);
  if (species === undefined) {
    const totalAnimais = {};
    for (let i = 0; i < animais.length; i += 1) {
      totalAnimais[animais[i].name] = animais[i].residents.length;
    }
    return totalAnimais;
  }
  const especieInserida = data.species.find((animal) => animal.name === species);
  return especieInserida.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arrayEntrants = Object.entries(entrants);
  const soma = arrayEntrants.reduce((acc, pessoa) => acc + (data.prices[pessoa[0]] * pessoa[1]), 0);
  return soma;
}

function getAnimalMap() {
  // seu código aqui
  // options
}

function getSchedule() {
  // seu código aqui
  // dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui
  // id
}

function increasePrices() {
  // seu código aqui
  // percentage
}

function getEmployeeCoverage() {
  // seu código aqui
  // idOrName
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
