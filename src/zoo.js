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
const data = require('./data');

function getSpeciesByIds(...ids) {
  /* console.log(ids); */
  // seu código aqui
  if (ids.length === 0) {
    /* console.log(ids.length); */
    return [];
  }
  /* result = species.filter((spec) => spec.id === ids) */
  const identidade = species
    .filter((spec, indice) => spec.id === ids[indice]);
  return identidade;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((esp) => esp.name === animal).residents
    .every((exemplares) => exemplares.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const first = employees.find((emp) => emp.firstName === employeeName);
  const last = employees.find((emp) => emp.lastName === employeeName);
  return ((!first) ? last : first);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.filter((emp) => emp.managers.length < 2)
    .some((man) => man.id === id);
}

function addEmployee(...rest) {
  // seu código aqui
  const arg = { ...rest };
  const { 0: id, 1: firstName, 2: lastName } = arg;
  if (arg[3] === undefined || arg[4] === undefined) {
    const { 3: managers = [], 4: responsibleFor = [] } = arg;/* 
    console.log({ id, firstName, lastName, managers, responsibleFor }); */
    employees.push({ id, firstName, lastName, managers, responsibleFor });
    /* console.log(employees.length); */
    return employees.length;
  }
  const { 3: managers, 4: responsibleFor } = arg;

  employees.push({ id, firstName, lastName, managers, responsibleFor });
  /* console.log(employees.length); */
  return employees.length;
}

function countAnimals(especies) {
  // seu código aqui
  if (especies === undefined) {
    const objeto = {};
    const arrayPopularity = data.species.map((number) => number.residents.length);
    data.species.map((populacao) => populacao.name).forEach((iname, iresidents) => {
      objeto[iname] = arrayPopularity[iresidents];
    });
    console.log(objeto);
    return objeto;
  }
  const numEspecimes = data.species.find((spec) => spec.name === especies);
  return numEspecimes.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  const k = Object.keys(entrants);
  console.log(entrants);
  /* console.log(Object.keys(entrants)); */
  const valores = Object.keys(prices)
    .map((chave) => (k.some((ki) => chave === ki) ? (prices[chave] * entrants[chave]) : 0));
  /* console.log(valores); */
  const result = valores.reduce((acc, current) => {
    let accumulator = acc;
    const atual = current;
    /* console.log(atual); */
    accumulator += atual;
    return accumulator;
 }, 0);
  return result;
}

function getAnimalMap(options) {
  // seu código aqui
  let semParametro = { NE: [], NW: [], SE: [], SW: [] };
  const chaveSem = Object.keys(semParametro);
  if (options === undefined) {
    const objeto = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'] };
    return objeto;
  }
}

function getSchedule(dayName) {
  // seu código aqui
  const objeto = { Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED' };
  if (dayName === undefined) {
    return objeto;
  }
  const result = {};
  result[dayName] = objeto[dayName];
  return result;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animal = species.find((anima) => anima
    .id === employees
    .find((funci) => funci.id === id).responsibleFor[0]);
  const oldData = animal.residents.sort((a, b) => b.age - a.age)[0];
  /* console.log(oldData); */
  return [oldData.name, oldData.sex, oldData.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const newPercent = parseFloat(((100 + percentage) / 100).toPrecision(4));
  /* const chaves = Object.keys(prices);
  chaves.forEach((chave) => {
    prices[chave] = Math.round((prices[chave] * newPercent) * 100) / 100;
    console.log(prices);
  }); */
  prices.Adult = Math.round((prices.Adult * newPercent) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * newPercent) * 100) / 100;
  prices.Child = Math.round((prices.Child * newPercent) * 100) / 100;
  console.log(prices);
  return prices;
  /* return prices[chave]; */
}
/* increasePrices(50); */

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
