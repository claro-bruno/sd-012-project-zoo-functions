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
const data = require('./data');

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

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

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
