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

const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.find((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((specie) => specie.name === animal);
  return especie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName = {}) {
  return data.employees.find((employee) => employeeName === employee.firstName
  || employeeName === employee.lastName) || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  const empty = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      const especieVar = specie.name;
      const totalAnimals = specie.residents.length;
      empty[especieVar] = totalAnimals;
    });
    return empty;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === '') {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * data.prices.Adult) + (Senior * data.prices.Senior) + (Child * data.prices.Child);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const cronograma = { ...hours };
  const days = Object.keys(cronograma);
  days.forEach((day) => {
    cronograma[day] = `Open from ${cronograma[day].open}am until ${cronograma[day].close - 12}pm`;
    if (day === 'Monday') cronograma[day] = 'CLOSED';
  });
  if (dayName === undefined) return cronograma;
  const saida = {};
  saida[dayName] = cronograma[dayName];
  return saida;
}

function getOldestFromFirstSpecies(id) {
  const procuraId = data.employees.find((employee) => employee.id === id);
  const animalId = procuraId.responsibleFor[0];
  const linkando = data.species.find((specie) => specie.id === animalId).residents;
  linkando.sort((a, b) => b.age - a.age);
  const { name, sex, age } = linkando[0];
  return [name, sex, age];
}

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// function increasePrices(percentage) {
//   const incrementa = { ...prices };
//   const entryPrices = Object.keys(incrementa);
//   entryPrices.forEach((per) => {
//     incrementa[entryPrices] = (percentage / 100 + 1) * incrementa[entryPrices];
//     return incrementa[entryPrices];
//   });
// }

// console.log(increasePrices(50));
// // function getEmployeeCoverage(idOrName) {
// //   // seu código aqui
// // }

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
