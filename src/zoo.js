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

// const { species, employees, hours, prices } = data;

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((specie) => ids.includes(specie.id));
}

// getSpeciesByIds - primeiro usando Spread Operator para utilizar como argumento da função um novo array formado por todos os ids das especies;
// conforme a dica do Jensen na explicação, caso nao receba nenhum parametro, nesse caso, o tamanho do array formado pelo spread seja igual a zero, retorna um array vazio;
// Enquanto desenvolvia os demais testes, localizei o metodo .includes (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), assim, a partir do spread, utilizei o metodo filter para retornar um array com todos os elementos que satisfaçam a condição passada, que, no caso, verifica a existencia de alguma especie como parametro, retornando um array com as éspecies correspondente.

function getAnimalsOlderThan(animal, age) {
  const name = species.find((element) => element.name === animal);
  return name.residents.every((element) => element.age >= age);
}

// utiliza o find. para encontrar o primeiro elemento do array species, através do nome do animal, que seja igual ao parametro passado na função;
// Após encontrar o objeto referente ao primeiro parametro, é realizada verificação se o animal possui a idade igual ou maior ao parametro passado (representada pelo maior ou igual), nesse ponto, é utilizado o metodo every, que verifica se os elementos passam em todas as condições.
// Tive dúvida em relação a construção da função, especificamente com o metodo every, que nao estava sendo utilizado, e consultei o repositório do meu amigo Ryan (https://github.com/tryber/sd-012-project-zoo-functions/pull/66/files).

/*  function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
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
} */

module.exports = {
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
