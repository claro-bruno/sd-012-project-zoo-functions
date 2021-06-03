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

const { species, employees, prices, hours } = data;

const getSpeciesByIds = (...ids) => ids.map((id) =>
  species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal)
    .residents.map((ano) => ano.age).every((idade) => idade >= age);

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};

function createEmployee() {
  // seu código aqui
  // personalInfo, associatedWith
}

const isManager = (ids) => employees.some((employee) =>
  employee.managers.find((id) => ids === id));

function addEmployee() {
  // seu código aqui
  // id, firstName, lastName, managers, responsibleFor
}

const countAnimals = (especies) => {
  if (especies === undefined) {
    const names = species.map((specie) => specie.name);
    const quantidades = species.map((specie) => specie.residents.length);
    const nameQuantidade = {};
    names.forEach((key, index) => {
      nameQuantidade[key] = quantidades[index];
    }); /* referência: https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays */
    return nameQuantidade;
  }
  return species.find((specie) => specie.name === especies).residents.length;
};

const calculateEntry = ({ Adult = 0, Senior = 0, Child = 0 } = 0) => {
  const { Adult: pricesAdult, Senior: pricesSenior, Child: pricesChild } = prices;
  const soma = ((pricesAdult * (Adult))
    + (pricesSenior * (Senior))
    + (pricesChild * (Child)));
  return soma;
};

function getAnimalMap() {
  // seu código aqui
  // options
}

const getSchedule = (dayName) => {
  let resultado = {};
  if (dayName === undefined) {
    const keys = Object.keys(hours);
    const values = Object.values(hours);
    keys.forEach((key, index) => {
      resultado[key] = `Open from ${values[index].open}am until ${values[index].close - 12}pm`;
      resultado.Monday = 'CLOSED';
    });
  } else if (dayName === 'Monday') {
    resultado = { Monday: 'CLOSED' };
  } else {
    resultado = { [dayName]:
    `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
  }
  return resultado;
};

const getOldestFromFirstSpecies = (id) => {
  const idAnimal = employees.find((employee) => employee.id === id)
    .responsibleFor.find((animal) => animal);
  const sortAnimal = species.find((specie) => specie.id === idAnimal)
    .residents.filter((nameAnimal) => nameAnimal).sort((a, b) => b.age - a.age);
  return Object.values(sortAnimal[0]);
};

const increasePrices = (percentage) => {
  const keys = Object.keys(prices);
  const values = Object.values(prices).map((value) =>
    Math.round((value + (value * percentage) / 100) * 100) / 100); /* https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary */
  keys.forEach((key, index) => {
    prices[key] = values[index];
  });
  return prices;
};

const funcaoObjeto = (parameters = undefined) => {
  const idEName = parameters;
  const funcionárioFind = employees.find((employee) => employee.id === idEName
  || employee.firstName === idEName || employee.lastName === idEName);
  const animaisFilter = species.filter((animais) => animais);
  const acharAnimais = funcionárioFind.responsibleFor.map((idName) =>
    animaisFilter.filter((animal) => animal.id === idName))
    .map((name) => name.map((name2) => name2.name)).join(' ').split(' ');
  const fullName = [`${funcionárioFind.firstName} ${funcionárioFind.lastName}`];
  const resultado = {};
  fullName.forEach((key) => {
    resultado[key] = acharAnimais;
  });
  return resultado;
};

const getEmployeeCoverage = (idOrName) => {
  if (idOrName === undefined) {
    const listaGeral = {};
    employees.map((funcionários) =>
      Object.assign(listaGeral, funcaoObjeto(funcionários.firstName)));
    return listaGeral;
  }
  return funcaoObjeto(idOrName);
};
console.log(getEmployeeCoverage());

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
