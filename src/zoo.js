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
const {
  species,
  employees,
  prices,
  // hours,
} = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const filterAnimals = species.find((specie) => specie.name === animal);
  const filterAge = filterAnimals.residents.every((checkAge) => checkAge.age >= age);
  return filterAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName);
  return employees.find((findEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  if (speciesName) {
    return species.find(({ name }) => speciesName === name).residents.length;
  }
  const speciesScore = species.reduce((accumulator, currentValor) => {
    accumulator[currentValor.name] = currentValor.residents.length;
    return accumulator;
  }, {});
  return speciesScore;
}

function calculateEntry(entrants) {
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce(
    (accumulator, currentValor) => accumulator + entrants[currentValor] * prices[currentValor], 0,
  );
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

function getSchedule(dayName) {
  const infos = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return infos;
  const dayWeek = Object.entries(infos).find((day) => day[0] === dayName);
  return { [dayWeek[0]]: dayWeek[1] };
}

function getOldestFromFirstSpecies(idEmployee) {
  const { responsibleFor } = employees.find(({ id }) => id === idEmployee);
  console.log(responsibleFor);
  const careAnimals = getSpeciesByIds(...responsibleFor);
  console.log(careAnimals);
  const infoAnimals = careAnimals.reduce((acc, specie) => {
    const { residents } = specie;
    acc.push(...residents);
    return acc;
  }, []);
  infoAnimals.sort((ageA, ageB) => ageB.age - ageA.age);
  return Object.values(infoAnimals[0]);
}

function increasePrices(percentage) {
  prices.Adult = Math.round(((prices.Adult * (percentage / 100)) + prices.Adult) * 100) / 100;
  prices.Child = Math.round(((prices.Child * (percentage / 100)) + prices.Child) * 100) / 100;
  prices.Senior = Math.round(((prices.Senior * (percentage / 100)) + prices.Senior) * 100) / 100;
  return prices;
}

/* function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

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
