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
const { species, employees, prices } = data;

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

function countAnimals(specie) {
  if (specie) {
    const bicho = data.species.find((itemArray) => itemArray.name === specie).residents.length;
    return bicho;
  }
  const retorno = {};
  species.forEach((itemArray) => {
    retorno[itemArray.name] = itemArray.residents.length;
  });
  return retorno;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult: adulto = 0, Child: criança = 0, Senior: idoso = 0 } = entrants;
  const totalAdulto = Number(adulto) * Number(prices.Adult);
  const totalCriança = Number(criança) * Number(prices.Child);
  const totalIdoso = Number(idoso) * Number(prices.Senior);
  return totalAdulto + totalCriança + totalIdoso;
}
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
  calculateEntry,
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
