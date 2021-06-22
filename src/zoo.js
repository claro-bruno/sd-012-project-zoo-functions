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

// Referencia para o requisito 1, (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  const speciesIds = data.species.filter((specie) => ids.includes(specie.id));
  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((animalList) => animalList.name === animal);
  return animals.residents.every((animalOld) => animalOld.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const selectedEmployee = data.employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
  return selectedEmployee;
}
// Referencia para o requisito 4: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const managerId = data.employees.some((manager) => manager.managers.includes(id));
  return managerId;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

// Referencia Requisito 7: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, item) => ({
      ...acc,
      [item.name]: item.residents.length,
    }), {});
  }
  const animal = data.species.find((animalCount) =>
    animalCount.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants = {}) {
  const price = data.prices;
  if (entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const finalPrice = (Adult * price.Adult) + (Child * price.Child) + (Senior * price.Senior);
  return finalPrice;
}

function getAnimalMap(/* options */) {
  // seu código aqui
}

function getSchedule(dayName) {
  const weekSchedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return weekSchedule;
  return { [dayName]: weekSchedule[dayName] };
}

function getOldestFromFirstSpecies(/* id */) {
  // seu código aqui
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices.Adult = (Math.ceil(Adult * (percentage + 100))) / 100;
  data.prices.Child = (Math.ceil(Child * (percentage + 100))) / 100;
  data.prices.Senior = (Math.ceil(Senior * (percentage + 100))) / 100;
}

function getEmployeeCoverage(/* idOrName */) {
  // seu código aqui
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
