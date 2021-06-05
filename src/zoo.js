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
const { species, employees } = data;

function getSpeciesByIds(...codigo) {
  const especie = species.filter((itemArray, index) => itemArray.id === codigo[index]);
  return especie;
}

function getAnimalsOlderThan(animal, age) {
  const encontrarAnimal = species.find((itemArray) => itemArray.name === animal);
  const animalVelho = encontrarAnimal.residents.every((itemArray) => itemArray.age > age);
  return animalVelho;
}

function getEmployeeByName(employeeName) {
  const funcionario = employees.find((itemArray) =>
    itemArray.firstName === employeeName || itemArray.lastName === employeeName);
  return !employeeName ? {} : funcionario;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const encontraPessoa = employees.filter((itemArray) => itemArray.managers.length > 0);
  const gerente = encontraPessoa.some((itemArray) => itemArray.managers.includes(id));
  return gerente;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novato = { id, firstName, lastName, managers, responsibleFor };
  employees.push(novato);
  return novato;
}

// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

// function countAnimals(species) {
//   const bicho = data.species.find((itemArray) => itemArray.name === species);
//   let retorno;
//   // console.log(bicho.popularity);
//   if (bicho === undefined) {
//     retorno = {};
//   } else {
//     retorno = bicho.popularity;
//   }
//   return retorno;// console.log(bicho.popularity);
// }
// countAnimals();

// function calculateEntry(entrants) {
//   const oi = entrants.filter((itemArray) => Object.key(itemArray) === 'Senior');
//   const a = entrants.Senior * data.prices.Senior;
//   console.log(oi);
//     // if (typeof entrants.Adult === 'number'){
//   //   const adulto = entrants.Adult * 49.99;
//   //   if (typeof entrants.Child === 'number'){
//   //     const criança = entrants.Child * 20.99;
//   //     if (typeof entrants.Senior === 'number'){
//   //       const idoso = entrants.Senior * 24.99;
//   //       let preçoTotal = adulto + criança + idoso;
//   //       console.log(preçoTotal);
//   //     }}}
  
//   // if (entrants.Adult !== undefined || entrants.Child !== undefined || entrants.Senior !== undefined)
// }
// calculateEntry([{ 'Senior': 1 }]);

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
  // countAnimals,
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
