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

const especies = data.species;
const funcionarios = data.employees;
const precos = data.prices;

function getSpeciesByIds(...ids) {
  const acessSpecies = especies;
  // seu código aqui
  const resposta = [];
  if (ids.length === 0) {
    return resposta;
  }
  ids.forEach((id) => resposta.push(acessSpecies.find((animal) => animal.id === id)));
  return resposta;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const acharAnimal = especies.filter((item) => item.name === animal);
  const acharResidents = acharAnimal.find((resident) => resident.residents);
  return acharResidents.residents.every((idade) => idade.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const userDisplay = typeof employeeName === 'undefined' ? {} : employeeName;
  const acharPrimeiroNome = data.employees.find((nome) => nome.firstName === employeeName);
  const acharSegundoNome = data.employees.find((nome) => nome.lastName === employeeName);
  return acharPrimeiroNome || acharSegundoNome || userDisplay;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const resposta = {
    ...personalInfo,
    ...associatedWith,
  };
  return resposta;
}

function isManager(id) {
  // seu código aqui
  const gerentes = funcionarios.map((gerente) => gerente.managers);
  return gerentes.some((pessoa, index) => (pessoa[index] === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const resposta = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  funcionarios.push(resposta);
  // return funcionarios;
}

function countAnimals(species) {
  // seu código aqui
  const nomesEspecies = especies.map((especie) => especie.name);
  const numerosEspecies = especies.map((animal) => animal.residents.length);
  if (nomesEspecies.some((animal) => animal === species)) {
    const animalParam = especies.find((animal) => animal.name === species);
    return animalParam.residents.length;
  }
  const resposta = nomesEspecies.reduce((accumulator, currentValue, index) => {
    accumulator[currentValue] = numerosEspecies[index];
    return accumulator;
  }, {});
  return resposta;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants.length > 3) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * precos.Adult + Child * precos.Child + Senior * precos.Senior;
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
