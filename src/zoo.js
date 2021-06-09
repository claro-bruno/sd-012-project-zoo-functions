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

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const findSpecie = (id) => species.find((specie) => id === specie.id);
  const speciesSelected = ids.map(findSpecie);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => animal === specie.name);
  const checkEachResident = (resident) => resident.age > age;
  const checkIfOlderThan = findSpecie.residents.every(checkEachResident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const getEmployee = data.employees.find(findEmployee);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

const { employees } = require('./data');

function isManager(id) {
  const manager = employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const informationEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(informationEmployee);
}

function countAnimals(especie) {
  if (!especie) {
    const reduzespecie = (acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    };
    const especieobjeto = data.species.reduce(reduzespecie, {});
    return especieobjeto;
  }
  const encontraespecie = data.species.filter(({ name }) => name === especie);
  const reduzparaespeciacontada = (acc, { residents }) => acc + residents.length;
  const contaespecie = encontraespecie.reduce(reduzparaespeciacontada, 0);
  return contaespecie;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult: qtdadeAdulto = 0, Child: qtdadeCrianca = 0,
    Senior: qtdadeIdoso = 0 } = entrants;
  const totalAdultos = data.prices.Adult * qtdadeAdulto;
  const totalCriancas = data.prices.Child * qtdadeCrianca;
  const totalIdosos = data.prices.Senior * qtdadeIdoso;
  const precoFinal = totalAdultos + totalCriancas + totalIdosos;
  return precoFinal;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;
  const porcentagem = percentage / 100;
  const novoPrecoAdulto = Math.round((Adult * (1 + (porcentagem)) * 100)) / 100;
  const novoPrecoCrianca = Math.round((Child * (1 + (porcentagem)) * 100)) / 100;
  const novoPrecoIdoso = Math.round((Senior * (1 + (porcentagem)) * 100)) / 100;
  data.prices = {
    Adult: novoPrecoAdulto,
    Child: novoPrecoCrianca,
    Senior: novoPrecoIdoso,
  };
  return data.prices;
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
