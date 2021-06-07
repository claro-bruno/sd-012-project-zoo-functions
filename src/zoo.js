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

/* const { employees } = require('./data'); */
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((specie) => animal === specie.name);
  return findAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const returnEmployee = data.employees.find(findEmployee);
  return returnEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  return !species
    ? data.species.reduce((acc, { name: n, residents: r }) => ({ ...acc, [n]: r.length }), '')
    : data.species.find((spe) => spe.name === species).residents.length;
}

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { Adult: adults = 0, Child: childs = 0, Senior: seniors = 0 } = entrants;
  const { Adult, Senior, Child } = data.prices;
  const result = adults * Adult + childs * Child + seniors * Senior;
  return result;
};

/*  function getAnimalMap(options) {
  // seu código aqui
} */

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

/* function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
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
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
