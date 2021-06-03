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

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const speciesEncontr = (id) => data.species.find((especie) => id === especie.id);
  const specieIgual = ids.map(speciesEncontr);
  return specieIgual;
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((especie) => especie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (!species) {
    const objSpecie = {};
    data.species.forEach((item) => { objSpecie[item.name] = item.residents.length; });
    return objSpecie;
  }
  return data.species.find((key) => key.name === species).residents.length;
}

function calculateEntry(entrants = 0) {
  if (!entrants) return entrants;
  let total = 0;
  const keysEntries = Object.keys(entrants); // cria array com as chaves do objeto
  keysEntries.forEach((key) => {
    if (key === 'Adult') {
      total += entrants[key] * data.prices.Adult;
    } else if (key === 'Child') {
      total += entrants[key] * data.prices.Child;
    } else {
      total += entrants[key] * data.prices.Senior;
    }
  });
  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((item) => item.id === id);
  const animalId = employee.responsibleFor.find((item) => item);
  const arrayAnimaInfo = data.species.find(({ id }) => id === animalId);
  const arrayOldAnim = arrayAnimaInfo.residents.map(({ age }) => age);
  const findOldest = arrayAnimaInfo.residents.find(({ age }) => age === Math.max.apply(Math, arrayOldAnim));
  return Object.values(findOldest);
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// function increasePrices(percentage) {
//   // seu código aqui
// }

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
  getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
