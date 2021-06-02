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

const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...animals) {
  return species.filter((specie) => animals.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal)
    .residents.every((animals) => animals.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(animals) {
  const objeto = {};
  species.forEach(({ residents, name }) => { objeto[name] = residents.length; });
  return animals === undefined
    ? objeto : species.find((animal) => animal.name === animals).residents.length;
}
// const objetoPrice = Object.values(prices);
// console.log(objetoPrice);
function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

// function getAnimalMap(options) {

// }

function getSchedule(dayName) {
  const horas = hours;
  const resultado = {};
  Object.keys(horas).forEach((hora) => {
    if (horas[hora].close === 0) {
      resultado[hora] = 'CLOSED';
    } else {
      resultado[hora] = `Open from ${horas[hora].open}am until ${horas[hora].close - 12}pm`;
    }
  });
  if (dayName !== undefined) return { [dayName]: resultado[dayName] };
  return resultado;
}

function getOldestFromFirstSpecies(id) {
  const specieID = employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieResident = species.find((specie) => specie.id === specieID).residents;
  const oldestAnimal = specieResident.sort((a, b) => b.age - a.age)[0];
  const keys = Object.keys(oldestAnimal);
  const resultado = [];
  keys.forEach((key) => {
    resultado.push(oldestAnimal[key]);
  });
  return resultado;
}

function increasePrices(percentage) {
  const multiplicacao = (percentage / 100) + 1;
  const pricesKeys = Object.keys(prices);
  pricesKeys.forEach((priceKey) => {
    const resultado = prices[priceKey] * multiplicacao;
    prices[priceKey] = Math.round(resultado * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {

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
  increasePrices,
  createEmployee,
};
