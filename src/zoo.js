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

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const targetSpecie = species.find((specie) => specie.name === animal);
  return targetSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const result = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  if (result) return result;
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee, index) => employee.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}
function countAnimals(animal) {
  if (animal) {
    const targetSpecie = species.find((specie) => specie.name === animal);
    return targetSpecie.residents.length;
  }
  const resultado = {};
  species.forEach((specie) => {
    const { name, residents } = specie;
    resultado[name] = residents.length;
  });
  return resultado;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const resultado = Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
  return resultado;
}

const regions = ['NE', 'NW', 'SE', 'SW'];
const getAllByRegion = () => regions.reduce((accumulator, current) => {
  accumulator[current] = species.filter((specie) =>
    specie.location === current).map((objSpecie) => objSpecie.name);
  return accumulator;
}, {});

const getAllByRegionWNames = (sex, sorted) => regions.reduce((accumulator, current) => {
  accumulator[current] = species.filter((specie) =>
    specie.location === current).map((getNames) => {
    const object = {};
    object[getNames.name] = getNames.residents.map((getSpecimen) => getSpecimen.name);
    if (sorted === true) { object[getNames.name].sort(); }
    if (sex.length !== 0) {
      object[getNames.name] = object[getNames.name].filter((animal) =>
        getNames.residents.find((resident) => resident.name === animal).sex === sex);
    }
    return object;
  });
  return accumulator;
}, {});

function getAnimalMap(options) {
  if (!options) return getAllByRegion();
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames === false) return getAllByRegion();
  return getAllByRegionWNames(sex, sorted);
}

function getSchedule(dayName) {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) return schedule;
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const targetEmployee = employees.find((employee) => employee.id === id);
  const animal = species.find((specie) => specie.id === targetEmployee.responsibleFor[0]);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    const newPrice = (prices[key] * (1 + percentage / 100)) + 0.001;
    prices[key] = Number(newPrice.toPrecision(4));
  });
}

const getAllAnimalsEmployeeCoverage = (respFor) => {
  const animals = respFor.map((specieId) => species.find(({ id }) => id === specieId).name);
  return animals;
};

const getAllEmployeeCoverage = () => {
  const result = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    result[`${firstName} ${lastName}`] = getAllAnimalsEmployeeCoverage(responsibleFor);
  });
  return result;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return getAllEmployeeCoverage();
  const employee = employees
    .find(({ id, firstName, lastName }) =>
      idOrName === id || idOrName === firstName || idOrName === lastName);

  const { firstName, lastName, responsibleFor } = employee;
  const animals = getAllAnimalsEmployeeCoverage(responsibleFor);

  return { [`${firstName} ${lastName}`]: animals };
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
