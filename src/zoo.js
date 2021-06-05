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

// const data = require('./data');

const { species, employees, prices } = require('./data');
// Questão 01
function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}
// console.table(species);
// console.log(species);

// Questão 02
function getAnimalsOlderThan(animal, age) {
  const animalChave = species.find((specie) => animal === specie.name);

  return animalChave.residents.every((residents) => residents.age > age);
}

// Questão 03
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const first = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return (first);
}
// Questão 04
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}
// Questão 05
function isManager(id) {
  // seu código aqui
  // return employees.some((managers) => id.find((idManeger) => employees.managers.includes === id));

  // return employees.some((manage) => manage.managers.includes === id);
  return employees.some((manage) => manage.managers.includes(id));
}
// console.loge(employees);
// Questão 06
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id, firstName, lastName, managers, responsibleFor
  });
}
// console.log(employees);
// Questão 07
function countAnimals(speciesConunts) {
  const animals = {};
  species.forEach(({ name, residents }) => {
    animals[name] = residents.length;
  });
  const allAnimals = !speciesConunts ? animals : species.find((animal) =>
    animal.name === speciesConunts).residents.length;
  return allAnimals;
}
// Questão 08
function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

/*
function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}
*/

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
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
