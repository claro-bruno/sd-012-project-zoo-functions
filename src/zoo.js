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
// Linha abaixo retira pois aparentemente não acrescenta ao código
// const data = require('./data');

const getSpeciesByIds = (...ids) => (ids ? species.filter((e) => ids.includes(e.id)) : []);

const getAnimalsOlderThan = (animal, age) => species.find((e) => e.name === animal).residents
  .every((e) => e.age >= age);

const getEmployeeByName = (employeeName) => (employeeName ? employees.find((e) => e
  .firstName === employeeName || e.lastName === employeeName) : {});

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => employees.find((e) => e.id === id).managers.length < 2;

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  employees[employees.length] = {
    id,
    firstName,
    lastName,
    ...(managers ? { managers } : { managers: [] }),
    ...(responsibleFor ? { responsibleFor } : { responsibleFor: [] }),
  };
};

const countAnimals = (spcName) => (spcName ? species.find((e) => e.name === spcName).residents
  .length : species.reduce((e, a) => ({ ...e, [a.name]: a.residents.length }), {}));

const calculateEntry = (entrants) => (entrants ? Object.values(entrants)
  .reduce((acc, cv, i) => acc + cv * prices[Object.keys(entrants)[i]], 0) : 0);

// Funções para atender ao requisito 9 getAnimalMap
const getN = (e) => e.name;

const getS = (sex) => (e) => ((sex) ? (e.sex === sex) : e);

const getAnimalMapSort = (sex) => species.reduce((a, e, i, o, loc = e.location) => (a[loc]
  ? { ...a, [loc]: [...a[loc], { [e.name]: [...e.residents.filter(getS(sex)).map(getN).sort()] }] }
  : ({ ...a, [loc]: ([{ [e.name]: [...e.residents.filter(getS(sex)).map(getN).sort()] }]) })), {});

const getAnimalMapNamed = (sex) => species.reduce((a, e, i, o, loc = e.location) => (a[loc]
  ? { ...a, [loc]: [...a[loc], { [e.name]: [...e.residents.filter(getS(sex)).map(getN)] }] }
  : ({ ...a, [loc]: ([{ [e.name]: [...e.residents.filter(getS(sex)).map(getN)] }]) })), {});

const getAnimalMapBasic = () => species.reduce((a, e, i, o, loc = e.location) => (a[loc]
  ? { ...a, [loc]: [...a[loc], e.name] } : ({ ...a, [loc]: [(e.name)] })), {});

const checkSex = (options) => (options && options.sex ? options.sex : !1);

const getAnimalMap = (options) => {
  const sex = checkSex(options);
  if (options && options.includeNames) {
    if (options.sorted) { return getAnimalMapSort(sex); }
    return getAnimalMapNamed(sex);
  }
  return getAnimalMapBasic();
};

const getSchedule = (dayName, key = Object.keys(hours)) =>
  ({ ...key.filter((e) => (dayName ? e === dayName : e))
    .reduce((a, e) => (e === 'Monday' ? ({ ...a, [e]: 'CLOSED' })
      : ({ ...a, [e]: `Open from ${hours[e].open}am until ${hours[e].close % 12}pm` })), {}) });

const getOldestFromFirstSpecies = (id) => getSpeciesByIds(employees.find((e) => e.id === id)
  .responsibleFor[0])[0].residents.reduce((a, e) => (e.age > a[2]
  ? [e.name, e.sex, e.age] : a), [0, 0, 0]);

// Códigos para o Requisito 12
function modPrices(e, percentage) {
  (prices[e] = Math.round(prices[e] * (1 + percentage / 100) * 100) / 100);
}

const increasePrices = (percentage, key = Object.keys(prices)) => key.forEach((e) =>
  modPrices(e, percentage));

// Código para o Requisito 13
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
