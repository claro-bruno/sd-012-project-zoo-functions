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

const { species } = require('./data');
const data = require('./data');
// console.log(species);
function getSpeciesByIds(...ids) {
  // O que será avaliado:
  // Caso receba nenhum parâmetro, necessário retornar um array vazio;
  // Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
  // Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
  return ids.map((id) => data.species.find((specie) => specie.id === id));
  // Para solução da terceira verificação foi necessário fazer um for do ids com o map e dentro deste for, outro for de species com o find para verificar todas as species com cada id de ids.
  // resolvido a terceira verificação com ajuda do colega Thalles Carneiro. Logo após foi feito o encurtamento do código.
}

function getAnimalsOlderThan(animal, age) {
  // O que será avaliado:

  // Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada (deve retornar um valor booleano);
  return species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // O que será avaliado:

  // Sem parâmetros, retorna um objeto vazio
  if (!employeeName) { return []; }

  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // if (employeeName === data.employees.firstName) {  };

  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  // if (employeeName === employees.lastName) { return  };
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

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
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
