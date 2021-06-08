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

const { species, employees, prices } = require('./data');
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
// console.log(getEmployeeByName());

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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
// A função irá adicionar uma nova pessoa colaboradora ao array employees, presente no arquivo data.js.

  // O que será avaliado
  // Adiciona um funcionário no fim da lista
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciess) {
  // Sem parâmetros, retorna animais e suas quantidades
  if (!speciess) {
    return species.reduce((acc, item) =>
      ({ ...acc, [item.name]: item.residents.length }), {});
  }
  // Com o nome de uma espécie de animal, retorna somente a quantidade
  return species.find((specie) => specie.name === speciess).residents.length;
}
console.log(countAnimals());

function calculateEntry(entrants) {
  // Retorna 0 se nenhum argumento for passado
  // Retorna 0 se um objeto vazio for passado
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  // Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants;
  const preçoTotal = ((adult * prices.Adult) + (child * prices.Child)
  + (senior * prices.Senior)); return preçoTotal;
}

// function getAnimalMap(options) {
// seu código aqui
// }

function getSchedule(dayName) {
// O que será avaliado

  // Sem parâmetros, retorna um cronograma legível para humanos
  if (!dayName) {
    const days = Object.entries(data.hours);
    // days.reduce((acc, item) => )
    // Reduce, filter, find, some, every, foreach, map - funcionam para um array
    return days;
  }
  // Se um único dia for passado, retorna somente este dia em um formato legível para humanos
}
console.log(getSchedule());
// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

function getEmployeeCoverage(idOrName) {
  // Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  if (!idOrName) {
    return employees.reduce((acc, item) => {
      const animalName = item.responsibleFor
        .map((id) => species.find((specie) => id === specie.id).name);
      return ({ ...acc, [`${item.firstName} ${item.lastName}`]: animalName });
    }, []);
  }
  // Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
  // Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  // Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  const employe = employees.find((employee) => employee.id === idOrName
  || employee.firstName === idOrName || employee.lastName === idOrName);

  return { [`${employe.firstName} ${employe.lastName}`]: employe.responsibleFor
    .map((id) => species.find((specie) => id === specie.id).name) };
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
