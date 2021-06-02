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

// bora começar | let's start

const { species, employees, prices, hours } = require('./data');
// Linha abaixo comenada pois aparentemente não acrescenta nem retira nada do código, só dá ero no Lint por não utilizar.
// const data = require('./data');

// Função para atender ao requisito 01
const getSpeciesByIds = (...ids) => (ids ? species.filter((e) => ids.includes(e.id)) : []);

// Função para atender ao requisito 02
const getAnimalsOlderThan = (animal, age) => species.find((e) => e.name === animal).residents
  .every((e) => e.age >= age);

// Função para atender ao requisito 03
const getEmployeeByName = (employeeName) => (employeeName ? employees.find((e) => e
  .firstName === employeeName || e.lastName === employeeName) : {});

// Função para atender ao requisito 04
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// Função para atender ao requisito 05
const isManager = (id) => employees.find((e) => e.id === id).managers.length < 2;

// Função para atender ao requisito 06
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees[employees.length] = { id, firstName, lastName, managers, responsibleFor };
};

// Função para atender ao requisito 07
const countAnimals = (spcName) => (spcName ? species.find((e) => e.name === spcName).residents
  .length : species.reduce((e, a) => ({ ...e, [a.name]: a.residents.length }), {}));

// Função para atender ao requisito 08
const calculateEntry = (entrants) => (entrants ? Object.values(entrants)
  .reduce((acc, cv, i) => acc + cv * prices[Object.keys(entrants)[i]], 0) : 0);

// Funções para atender ao requisito 9 - getAnimalMap
const getN = (e) => e.name;

const getS = (sex) => (e) => ((sex) ? (e.sex === sex) : e);

const makeS = (sort) => (sort ? undefined : ((a, b) => (a && b)));

const getAnimalMapSort = (sex, sort) => species.reduce((a, e, i, o, loc = e.location,
  res = e.residents, n = e.name) => (a[loc]
  ? { ...a, [loc]: [...a[loc], { [n]: [...res.filter(getS(sex)).map(getN).sort(makeS(sort))] }] }
  : ({ ...a, [loc]: ([{ [n]: [...res.filter(getS(sex)).map(getN).sort(makeS(sort))] }]) })), {});

const getAnimalMapBasic = () => species.reduce((a, e, i, o, loc = e.location) => (a[loc]
  ? { ...a, [loc]: [...a[loc], e.name] } : ({ ...a, [loc]: [(e.name)] })), {});

const check = (options, key) => (options && options[key] ? options[key] : !1);

const getAnimalMap = (options) => {
  const sexAnimal = check(options, 'sex');
  const sort = check(options, 'sorted');
  if (options && options.includeNames) { return getAnimalMapSort(sexAnimal, sort); }
  return getAnimalMapBasic();
};

// Função para atender ao requisito 10
const getSchedule = (dayName, key = Object.keys(hours)) =>
  ({ ...key.filter((e) => (dayName ? e === dayName : e))
    .reduce((a, e) => (e === 'Monday' ? ({ ...a, [e]: 'CLOSED' })
      : ({ ...a, [e]: `Open from ${hours[e].open}am until ${hours[e].close % 12}pm` })), {}) });

// Função para atender ao requisito 11
const getOldestFromFirstSpecies = (id) =>
  getSpeciesByIds(employees.find((e) => e.id === id).responsibleFor[0])[0].residents
    .reduce((a, e) => (e.age > a[2] ? [e.name, e.sex, e.age] : a), [0, 0, 0]);

// Funções para atender ao requisito 12
function modPrices(e, pctg) { (prices[e] = Math.round(prices[e] * (1 + pctg / 100) * 100) / 100); }

const increasePrices = (percentage, key = Object.keys(prices)) => key.forEach((e) =>
  modPrices(e, percentage));

// Função para atender ao requisito 13
const getEmployeeCoverage = (idOrName) =>
  employees.filter((e) => e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName
  || idOrName === undefined)
    .reduce((ac, el, i, o, fN = el.firstName, lN = el.lastName, eRf = el.responsibleFor) =>
      ({ ...ac, [`${fN} ${lN}`]: eRf.reduce((a, e) => [...a, getSpeciesByIds(e)[0].name], []) }),
    {});

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
