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

const { hours, prices, employees, species } = data;

function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(nomes, idade) {
  const index = data.species
    .find((nome) => nome.name === nomes).residents
    .filter((idades) => idades.age)
    .every((age) => age.age >= idade);
  return index;
}

function getEmployeeByName(nome) {
  if (nome === undefined) {
    return {};
  }
  const ml = data.employees;
  const retorno = ml.find((employee) => employee.firstName === nome || employee.lastName === nome);
  return retorno;
}

function createEmployee(person, associate) {
  const obj = {
    id: person.id,
    firstName: person.firstName,
    lastName: person.lastName,
    managers: associate.managers,
    responsibleFor: associate.responsibleFor,
  };
  return obj;
}

function isManager(id) {
  return data.employees.some((valor) => valor.managers.some((manager) =>
    manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(obj);
}

function countAnimals(contador) {
  let obj = {};
  if (contador !== undefined) {
    obj = data.species.find((cont) => cont.name === contador).residents.length;
  } else {
    data.species.forEach((valor) => { obj[valor.name] = valor.residents.length; });
  }
  return obj;
}

function calculateEntry(paramter) {
  if (paramter === undefined || Object.keys(paramter).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = paramter;

  const sum = Adult * data.prices.Adult
   + Child * data.prices.Child + Senior * data.prices.Senior;
  return sum;
}

function getAnimalMap() {
  // seu código aqui
}

function getSchedule(nome) {
  const objVazio = {};
  if (!nome) {
    const chavesArray = Object.keys(hours);
    chavesArray.forEach((dia) => {
      const { open, close } = hours[dia];
      objVazio[dia] = dia === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    });
    return objVazio;
  }
  const { open, close } = hours[nome];
  objVazio[nome] = nome === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  return objVazio;
}

function getOldestFromFirstSpecies() {
  // seu código aqui
}

function increasePrices(numero) {
  const chaves = Object.keys(data.prices);
  chaves.forEach((valor) => {
    data.prices[valor] = Math.round((prices[valor] * (1 + (numero / 100)) * 100)) / 100;
  });
}

function getEmployeeCoverage(id) {
  const obj = {};
  if (!id) {
    employees.forEach((valor) => {
      obj[`${valor.firstName} ${valor.lastName}`] = valor.responsibleFor.map((specieId) =>
        species.find((animaus) => animaus.id === specieId).name);
    });
    return obj;
  }
  const empregado = employees.find((employee) =>
    employee.id === id || employee.firstName === id || employee.lastName === id);
  const animais = empregado.responsibleFor;
  const arAnimals = animais.map((specieId) =>
    species.find((animaus) => animaus.id === specieId).name);
  obj[`${empregado.firstName} ${empregado.lastName}`] = arAnimals;
  return obj;
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
