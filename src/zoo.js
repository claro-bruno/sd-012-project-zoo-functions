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

const { prices, employees, species, hours } = data;

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

function getAnimalsOlderThan(animal, age) {
  const armazenaAnimal = species.find((specie) => specie.name === animal);
  const armazenaIdade = armazenaAnimal.residents.every((resident) => resident.age >= age);
  return armazenaIdade;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const job = employees.find((employes) =>
    employes.firstName === employeeName || employes.lastName === employeeName);
  return job;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const empregados = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(empregados);
}

function countAnimals(speciesAnimal) {
  const resultado = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (speciesAnimal) return resultado[speciesAnimal];
  return resultado;
}

function calculateEntry(entrants) {
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acumulador, chave) => (
    acumulador + (entrants[chave] * prices[chave])
  ), 0);
}

// function getAnimalMap(options) {
// }

function getSchedule(dayName) {
  const horarios = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (typeof dayName === 'string' && dayName.length !== 0) return { [dayName]: horarios[dayName] };
  return horarios;
}

function getOldestFromFirstSpecies(id) {
  const empregado = employees.find((employee) => employee.id === id);
  const especieResponsavel = empregado.responsibleFor[0];
  const animal = getSpeciesByIds(especieResponsavel)[0]; // recicla funcionamento do primeiro req
  const { residents } = animal;
  const maisVelho = residents.reduce((velho, atual) => (atual.age > velho.age ? atual : velho));
  return Object.values(maisVelho); // para pegar so os valores
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
  // increasePrices,
  createEmployee,
};
