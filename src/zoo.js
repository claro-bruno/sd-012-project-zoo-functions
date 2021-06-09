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
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) => {
    return specie.name === animal && specie.residents.every((resident) => resident.age >= age)
  });
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) => {
    return (employee.firstName === employeeName || employee.lastName === employeeName)
  });
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  data.employees.push(newEmployee);
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species !== undefined) {
    return data.species.find((specie) => specie.name === species).residents.length;
  }
  const obj = {};
  data.species.forEach((specie) => {
    obj[specie.name] = Object.keys(specie.residents).length;
  })
  return obj;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  let total = 0;
  if (entrants.Adult) total += entrants.Adult * data.prices.Adult;
  if (entrants.Senior) total += entrants.Senior * data.prices.Senior;
  if (entrants.Child) total += entrants.Child * data.prices.Child;
  return total;
}

function getAnimalMap(options) {
  return options;
}

function getSchedule(dayName) {
  const schedule = {
    Tuesday: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close - 12}pm`,
    Friday: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close - 12}pm`,
    Saturday: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  if (dayName === undefined) return schedule;
  const day = {};
  day[dayName] = schedule[dayName];
  return day;
}

function getOldestFromFirstSpecies(id) {
  const filterId = data.species.filter((specie) => {
    return specie.id === data.employees.find((employee) => employee.id === id).responsibleFor[0];
  });
  return Object.values(filterId[0].residents.sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  const aux = (percentage / 100) + Number.EPSILON;
  data.prices.Adult = Math.round((data.prices.Adult + data.prices.Adult * aux) * 100) / 100;
  data.prices.Senior = Math.round((data.prices.Senior + data.prices.Senior * aux) * 100) / 100;
  data.prices.Child = Math.round((data.prices.Child + data.prices.Child * aux) * 100) / 100;
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  return idOrName;
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
