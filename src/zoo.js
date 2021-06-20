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

const { species, employees } = require('./data');

function getSpeciesByIds(...ids) {
  // lógica da função getSpeciesByIds desenvolvida com a ajuda do Luiz Henrrique (https://github.com/lzzhenrique) e Bruno Yamamoto (https://github.com/BSY-Development) através de call.
  return ids.map((item) => species.find((specie) => specie.id === item));
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((name) => name.name === animal);
  return residents.every((indexAnimal) => indexAnimal.age > age);
}

function getEmployeeByName(employeeName) {
  // ideia do operador ternário para a função getEmployeeByName desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) através de call.
  const findEmployeeByName = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return !employeeName ? {} : findEmployeeByName;
}

function createEmployee(personalInfo, associatedWith) {
  const mergeParams = { ...personalInfo, ...associatedWith };
  return mergeParams;
}

const isManager = (id) => employees.some((index) => index.managers.includes(id));
// função isManager desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) e Caroline Banichio (https://github.com/carolbenichio) através de call.

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // ideia do default parameter para a função addEmployee desenvolvida com a ajuda do Eric kreis https://github.com/eric-kreis através de call.
  const params = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(params);
  return employees;
}

function countAnimals(specie) {
  // if (!specie) {
  //   return {};
  // }
  // dados usado 'species.name' e 'species.popularity'
  // procurar o animal pelo nome passado como parêmetro e retornar somente a quantidade do animal passado como parâmetro
  const foundSpecies = species.find((animal) => animal.name === specie);
  const qtdSpecies = foundSpecies.residents.length;
  // retornar um  objeto com todos os animais como keys e suas quantidades como values
  // retornar um objeto
  // const allQtdAnimals = {};
  // buscar todos os animais
  // const allQtdAnimals = species.map((animal) => animal.name);
  // buscar todas as quantidades
  // const allQtdAnimals = species.map((animal) => animal.popularity);
  // colocar os dois em uma const
  // retornar essa const
  return qtdSpecies;
}

// console.log(countAnimals('lions'));
console.log(countAnimals('tigers'));

// function calculateEntry(entrants) {
//   // seu código aqui
// }

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
