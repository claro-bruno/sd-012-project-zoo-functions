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

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.find((animalId) => animalId === animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const catchSpecie = species.find((specie) => specie.name === animal); // verifica animal em species
  return catchSpecie.residents.every((specie) => specie.age > age); // checa se age é idade mínima
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employee) => {
    const fullName = employee.firstName === employeeName || employee.lastName === employeeName;
    return fullName;
  });
}
// using Object Destructuring
function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}
// usa some para localizar em -employees- um id de gerente
function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(specie) {
  if (specie === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const adultos = Adult * data.prices.Adult;
  const child = Child * data.prices.Child;
  const senior = Senior * data.prices.Senior;
  return adultos + child + senior;
}

function getAnimalMap() {
  // seu código aqui options
}
// Fiz esse requisito com apoio do PR do Kevin Oliveira //https://github.com/tryber/sd-012-project-zoo-functions/pull/40/
// commits/16fcd013fba9033347251dfe799c9b292aaaaa52#
function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  const schedule = days.reduce((acc, curr) => {
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    return acc;
  }, {});
  schedule.Monday = 'CLOSED';
  if (days.includes(dayName) === true) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const animalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const takeSpecie = data.species.find((specie) => specie.id === animalId);
  const moreOlder = takeSpecie.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = moreOlder;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const entrance = Object.keys(data.prices);
  entrance.forEach((type) => {
    data.prices[type] *= ((100 + percentage) / 100);
    data.prices[type] = Math.round(data.prices[type] * 100) / 100;
  });
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
