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

const { species, employees, hours, prices } = data;
// , employees, hours, prices

function getSpeciesByIds(...ids) {
  const allAnimais = species.filter((specie, index) => specie.id === ids[index]);
  return allAnimais;
}
function getAnimalsOlderThan(animal, age) {
  const nomeSpecie = species.find((specie) => specie.name === animal);
  return nomeSpecie.residents.every((specieAnimal) => specieAnimal.age >= age);
}

// console.log(getAnimalsOlderThan('lions', 4));

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName);
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = {
    managers: (managers) || [],
    responsibleFor: (responsibleFor) || [],
  };

  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(speciesName) {
  if (speciesName) {
    return species.find(({ name }) => speciesName === name).residents.length;
  }
  const speciescontagem = species.reduce((acc, atual) => {
    acc[atual.name] = atual.residents.length;
    return acc;
  }, {});
  return speciescontagem;
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = {}) {
  const { Adult: valorAdult, Senior: valorSenior, Child: valorChild } = prices;

  const totalAdult = Adult * valorAdult;
  const totalSenior = Senior * valorSenior;
  const totalChild = Child * valorChild;

  return totalAdult + totalSenior + totalChild;
}

// console.log(calculateEntry({ Adult: 2, Senior: 2 }));

function getAnimalMap() {

  //  seu código aqui
  // (options)
}

function getSchedule(dayName) {
  const diasSemana = Object.keys(hours);
  const createObjecto = {};
  diasSemana.forEach((day) => {
    const abertoZoo = hours[day].open;
    const fechadoZoo = hours[day].close - 12;
    createObjecto[day] = `Open from ${abertoZoo}am until ${fechadoZoo}pm`;
  });
  createObjecto.Monday = 'CLOSED';
  if (dayName === undefined) {
    return createObjecto;
  }
  return { [dayName]: createObjecto[dayName] };
}
// console.log(getSchedule('Monday'));

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const primeraSpecie = funcionario.responsibleFor[0];
  const armazenarSpecie = species.find((specie) => specie.id === primeraSpecie);
  const armazenarSpecieVelho = armazenarSpecie.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = armazenarSpecieVelho;
  return [name, sex, age];
}
// console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100)) * 100)) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100)) * 100)) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100)) * 100)) / 100;
  return prices;
}
// console.log(increasePrime(50));
function getEmployeeCoverage() {

  //  seu código aqui
  // (idOrName)
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
