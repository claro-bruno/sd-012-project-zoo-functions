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
const data = require('./data');

function getSpeciesByIds(...ids) {
  let speciesById = [];
  for (let index = 0; index < ids.length; index += 1) {
    const speciesFilter = (species.filter((specie) => specie.id === ids[index]));
    speciesById = [...speciesById, ...speciesFilter];
  }
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const specieByName = (species.filter((specie) => (specie.name === animal)));
  const { residents } = specieByName[0];
  const everyAnimal = (checkAnimalsAge) =>
    (Object.values(checkAnimalsAge).every((resident) =>
      resident.age > age));
  return everyAnimal(residents);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return ({});
  }
  return (employees.find((value) =>
    (value.firstName === employeeName || value.lastName === employeeName)));
}

function createEmployee(personalInfo, associatedWith) {
  employees.push({ ...personalInfo, ...associatedWith });
  return (employees[employees.length - 1]);
}

const isManager = (id) => (employees.some((value) => value.managers.some((ids) => ids === id)));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
  return employees;
}

function countAnimals(speciess) {
  if (speciess === undefined) {
    const animalCounter = {};
    species.forEach((value) => {
      (animalCounter[value.name] = value.residents.length);
    });
    return (animalCounter);
  }
  return (species.find((value) => value.name === speciess).residents.length);
}

function calculateEntry(entrants = { Adult: 0, Senior: 0, Child: 0 }) {
  function EntrantsConstructor(Adult = 0, Senior = 0, Child = 0) {
    this.Adult = Adult;
    this.Senior = Senior;
    this.Child = Child;
  }
  const entrants2 = new EntrantsConstructor(entrants.Adult, entrants.Senior, entrants.Child);
  return (
    (entrants2.Adult * prices.Adult)
    + (entrants2.Senior * prices.Senior)
    + (entrants2.Child * prices.Child));
}

// function getAnimalMap(options) {
// seu código aqui
// }
function formatSchedule(open, close) {
  if (open === close) {
    return ('CLOSED');
  }
  return (`Open from ${open}am until ${close - 12}pm`);
}

function getSchedule(dayName) {
  const schedule = {};
  if (dayName === undefined) {
    Object.keys(hours).forEach((day) => {
      schedule[day] = formatSchedule(hours[day].open, hours[day].close);
    });
  } else {
    schedule[dayName] = formatSchedule(hours[dayName].open, hours[dayName].close);
  }
  return (schedule);
}

function getOldestFromFirstSpecies(id) {
  const firstSpecies = species.find((specie) =>
    (specie.id === (employees.find((employee) => (employee.id === id))).responsibleFor[0]));
  const OldestResident = firstSpecies.residents.find((resident) =>
    resident.age === Math.max(...(firstSpecies.residents.map((resid) => resid.age))));
  return (Object.values(OldestResident));
}

function increasePrices(percentage) {
  // const { species, employees, prices, hours } = require('./data');
  // const data = require('./data');
  Object.keys(prices).forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (percentage / 100 + 1) * 100) / 100;
  });
  return (data.prices);
}
// console.log(increasePrices(50));
// function getEmployeeCoverage(idOrName) {
// seu código aqui
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
