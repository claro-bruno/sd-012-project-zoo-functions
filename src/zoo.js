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

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((funcionario) =>
    funcionario.firstName === employeeName || funcionario.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novoFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(novoFuncionario);
}

function countAnimals(specie) {
  const objeto = {};
  species.forEach((animal) => { objeto[animal.name] = animal.residents.length; });
  return specie === undefined
    ? objeto : species.find((animal) => animal.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

function getAnimalMap(options) {
}

function getSchedule(dayName) {
  const cronograma = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  return dayName === undefined ? cronograma : { [dayName]: cronograma[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const specieID = employees.find((employee) => employee.id === id).responsibleFor[0];
  const dadosSpecie = species.find((specie) => specie.id === specieID).residents;
  const animalMaisVelho = dadosSpecie.sort((a, b) => b.age - a.age)[0];
  const chaveObjeto = Object.keys(animalMaisVelho);
  const resultado = [];
  chaveObjeto.forEach((chave) => {
    resultado.push(animalMaisVelho[chave]);
  });
  return resultado;
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((preco) => {
    prices[preco] *= ((percentage + 100) / 100);
    prices[preco] = Math.round(prices[preco] * 100) / 100;
  });
  return prices;
}

function getEmployeeCoverage(idOrName) {
  
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
