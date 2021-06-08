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

const { species, employees, prices, hours } = data;

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

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

// Resolve primeiro o caso de retornar um objeto vazio (chaves vazias) quando não houver parametro, sendo utilizada a ideia de diferença para retornar um objeto vazio. Após, utiliza o metodo find para encontrar o primeiro elemento que satisfaça a condição, no caso, ele retornará true quando encontrar o nome passado como parametro, e assim executa a arrow fuction, que pega o elemento dentro de employees e retorna  o objeto do funcionário tanto quando o parametro é referente ao primeiro nome quanto ao ultimo.

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// utiliza o metodo spread para adicionar os valores passados como parametro da função iterando um novo objeto

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

// realiza o teste do parametro para verificar se é true ou false através do metodo some, nesse caso, verifica se o employee possui id de gerente. Isso ocorre através do metódo includes, onde é verificado se no array employees, a chave managers contem ID de gerente;

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

// De acordo com o teste e o arquivo data, os elementos managers e responsibleFor são arrays, assim, houve necessidade de acrescenter no parametro da função. Após, declarada uma constante com a estrutura do novo employee e assim, através do push, o newEmployee é acrescentado ao final do array employees

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    species.forEach((element) => { animals[element.name] = element.residents.length; });
    return animals;
  }
  return species.find((element) => element.name === animal).residents.length;
}

// Conforme orientação do Jensen, inicialmente, garantimos que a função retorne um objeto vazio quando não há parametros, passando no primeiro teste. Após, dentro do array species, executamos o metodo forEach , ou seja, executa uma callback para cada elemento do array, dessa forma, ele irá procurar o nome de cada elemento de devolvendo um array com a quantidade de nomes, cada nome será um numero acrescido nesse novo array. Assim, ao final, utiliza-se o metodo find para que quando passado o parametro, retorne o número de animais correspondente.

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const price = Object.keys(entrants);
  return price.reduce((previousValue, currentValue) => previousValue + (entrants[currentValue] * prices[currentValue]), 0);
}

//  Conforme orientação, a primeira parte da função concentra-se em retornar 0 quando não houver argumento ou o objeto for vazio, desta forma, sempre que entrants for undefined, o return será zero. Após, declaramos uma constante price onde através do object.keys, recebemos um array enumerado com os valores das entradas. Após, com o reduce, pegamos o valor da entrada, começando em zero, e realizamos diversas calculos para selecionar o tipo de entrada e multiplicalo pelo seu valor correspondente, deixando esse valor no acumulador, para ser somado aos demais valores, e retornando o total a ser cobrado de acordo com o número de adultos, crianças e idosos.

/*  function getAnimalMap(options) {
  // seu código aqui
} */

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const week = days.reduce((accumulator, currentValue) => {
    if (currentValue === 'Monday') {
      accumulator[currentValue] = 'CLOSED';
      return accumulator;
    }
    accumulator[currentValue] = `Open from ${hours[currentValue].open}am until ${hours[currentValue].close - 12}pm`;
    return accumulator;
  }, {});
  if (dayName) {
    return { [dayName]: week[dayName] };
  }
  return week;
}

// Precisei sair buscar minha filha. * Lembrar de acrescentar a explicacao depois.

function getOldestFromFirstSpecies(id) {
  const funcionarioId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieId = species.find((specie) => specie.id === funcionarioId).residents;
  const oldAnimal = specieId.sort((age1, age2) => age2.age - age1.age);
  return [oldAnimal[0].name, oldAnimal[0].sex, oldAnimal[0].age];
}

//  Com base nos testes, primeiro buscamos o primeiro funcionário responsável por gerenciar a especie. Com o Id desse funcionário, localizamos os animais daquela espécie. Através do sort, com a inversão na parte final do age2 - ag1, ordenamos o array do maior para o menor, e assim, apenas pedimos o retorno dos valores da posição 0, que será o animal de maior idade.

function increasePrices(percentage) {
  const priceIncrease = (1 + (percentage / 100));
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round(prices[key] * priceIncrease * 100) / 100;
  });
  return prices;
}

//  Em uma constante, colocamos o calculo da porcentagem, acessando as chaves do objeto price e realizando uma iteração para cada chave, alterando seu valor, de acordo com o parametro passado, onde o valor da chave do objeto price será igual ao valor arrendondado (atraves do math.round), do resultado da aplicação da porcentagem passada como parametro, retornando, ao final, o valor devidamente atualizado.

/*  function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
