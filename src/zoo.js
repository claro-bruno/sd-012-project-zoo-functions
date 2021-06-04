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
// 1. IMPLEMENTE A FUNÇÃO getSpeciesByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

// Observações técnicas

// O parâmetro desta função pode ser alterado para atender ao requisito proposto
// O que será avaliado

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids

const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((arrayItem) =>
    ids.find((arrayItem1) => arrayItem.id === arrayItem1));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// seu código aqui

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((specie) => specie.name === animal);
  const idadeAnimal = nomeAnimal.residents.every(
    (idadeMax) => idadeMax.age >= age,
  );
  return idadeAnimal;
}
// console.log(getAnimalsOlderThan('bears', 4));

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const nomeColaborador = data.employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return nomeColaborador;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const manager = data.employees.some(() =>
    data.employee.managers.find((employe) => employe === id));
  return manager;
}
// console.log(isManager('e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// function countAnimals(species) {
//   // seu código aqui
// }

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
