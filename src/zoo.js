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
const { species, employees, prices, hours } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return ids.map((itemIds) => species.find((itemArray) => itemArray.id === itemIds));
}

// console.log(getSpeciesByIds());

function getAnimalsOlderThan(animal, age) {
  return species.some((itemArray) => itemArray.name === animal
  && itemArray.residents.every((itemResi) => itemResi.age >= age));
}
// console.log(getAnimalsOlderThan('lions', 12));

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((itemArray) => itemArray.firstName === employeeName
  || itemArray.lastName === employeeName);
}

// console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

// console.log(createEmployee());

function isManager(id) {
  const maneger = employees.some((gerente) => gerente.managers.includes(id));
  return maneger;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// Feito com ajuda do aluno Thalles
function countAnimals(speciesdata) {
  const contador = species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});

  if (speciesdata === undefined) {
    return contador;
  }
  return contador[speciesdata];
  /*  return species.find((animal) => {
  return animal.name === speciesdata
    }).residents.length; */
}

// console.log(countAnimals('lions'));

// baseado no codigo do Julio Barros
function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = prices.Adult * Adult;
  const childPrice = prices.Child * Child;
  const seniorPrice = prices.Senior * Senior;
  return adultPrice + childPrice + seniorPrice;
}

function getAnimalMap() {
  // options
}

// feito com a ajuda do aluno Thalles
function getSchedule(dayName) {
  const horas = Object.entries(hours);
  const cronograma = horas.reduce((acc, date) => {
    const { open, close } = date[1];
    acc[date[0]] = `Open from ${open}am until ${close - 12}pm`;

    if (date[0] === 'Monday') {
      acc[date[0]] = 'CLOSED';
    }
    return acc;
  }, {});
  if (!dayName) {
    return cronograma;
  }
  return { [dayName]: cronograma[dayName] };
}

// Feito com ajuda do David Gonzaga
function getOldestFromFirstSpecies(id) {
  const employs = data.employees;
  const employId = employs.find((employ) => employ.id === id);
  const idsAnimais = employId.responsibleFor;
  const animais = data.species;
  const novoArray = animais.filter((animal) => idsAnimais.some((id) => id === animal.id));
  const residentes = novoArray.reduce((acc, residente) => {
    acc.push(...residente.residents);
    return acc;
  }, []);
  const ordenar = residentes.sort((a, b) => b.age - a.age)[0];
  return Object.values(ordenar);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// Feito com a ajuda da aluna Renata Nunes
function increasePrices(percentage) {
  const preco = data.prices;
  const chaves = Object.keys(preco);
  const multiplicar = 1 + percentage / 100;
  return chaves.forEach((chave) => preco[chave] = Math.round(preco[chave] * multiplicar * 100) / 100);
}

// console.log(increasePrices(30));

function getEmployeeCoverage() {
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
