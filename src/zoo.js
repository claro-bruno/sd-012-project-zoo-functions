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
  if (!employeeName) { return {}; }

  // Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // Quando provido o último nome do funcionário, retorna o objeto do funcionário
  return employees.find((employee) => employeeName === employee.firstName
    || employeeName === employee.lastName);
}

function createEmployee(personalInfo, associatedWith) {
// Observações técnicas

  // O parâmetro personalInfo recebe um objeto que contém o id, o firstName e o lastName
  // O parâmetro associatedWith recebe um objeto que contém dois array: managers e responsibleFor

  // O que será avaliado:

  // Cria um novo colaborador a partir de objetos contendo informações pessoais e gerentes e animais gerenciados.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
// Observações técnicas

  // Deve retornar um valor booleano
  // O que será avaliado

  // Testa se o id passado é de um gerente
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js.

// O que será avaliado
// Adiciona um funcionário no fim da lista
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
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
