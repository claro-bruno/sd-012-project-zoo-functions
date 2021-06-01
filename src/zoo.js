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

const { species, employees } = data; // adicionei o employee para buscar o data.employees.

function getSpeciesByIds(...ids) {
  // ...ids retorna um array de argumentos, caso não seja passado nenhum argumento, ids será um array vazio.
  if (ids.length === 0) {
    return [];
  }
  return ids.map((element) => species.find((specie) => element === specie.id)); // primeiro é utilizado o método map() para realizar o mesmo procedimento em todos os elementos da lista ids, e restornar um array com os seus retornos listados. dentro do map() é utilizado o método find(), que retorna o primeiro elemento do array species que retorne true na condição passada. OBS: o elemento que é retornado pelo find() é um objeto que está contido dentro da lista species, este objeto é armazenado como o primeiro retorno dado pelo método map().
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = species.find((element) => element.name === animal); // encontra dentro do array species o objeto que possui o valor da key name === o argumento animal.
  return animalName.residents.every((element) => element.age >= age); // o valor da key residents, do objeto correspondente ao animal, é uma array, utilizando o método every() eu verifico se todos os elementos dentro do array retornam true na condicional passada, se sim, every() retorna true, se não, retorna false.
}

function getEmployeeByName(employe) {
  // verifica se foi passado algum argumento para o parâmetro
  if (employe === undefined) {
    return {};
  }
  return employees.find((element) => employe === element.firstName || employe === element.lastName); // utiliza o find() para encontrar o objeto que satisfaça a condição.
}

function createEmployee(personalInfo, associatedWith) {
  // adiciona os conteúdos dos objetos personalInfo e associateWith dentro um novo objeto, utilizando o spread.
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

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
