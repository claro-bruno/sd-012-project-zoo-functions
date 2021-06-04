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
  data.employees.push({
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
  let resultado = {};
  species.forEach((specie) => {
    const { name, residents } = specie;
    resultado[name] = residents.length;
  });
  return resultado;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = data.prices.Adult;
  const childPrice = data.prices.Child;
  const seniorPrice = data.prices.Senior;
  const resultado = Adult * adultPrice + Child * childPrice + Senior * seniorPrice;
  return resultado;
}

const regions = ['NE', 'NW', 'SE', 'SW'];
const getAllByRegion = () => regions.reduce((accumulator, current) => {
  accumulator[current] = data.species.filter((specie) =>
    specie.location === current).map((getNames) => getNames.name);
  return accumulator;
}, {});

const getAllByRegionWNames = (sex, sorted) => regions.reduce((accumulator, current) => {
  accumulator[current] = data.species.filter((getSpecies) =>
    getSpecies.location === current).map((getNames) => {
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
  if (options === undefined) {
    return getAllByRegion();
  }
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames === false) {
    return getAllByRegion();
  }
  if (includeNames === true) {
    const map = getAllByRegionWNames(sex, sorted);
    return map;
  }
}

function getSchedule(dayName) {
  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    const { open, close } = data.hours[day];
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName === undefined) {
    return schedule;
  }
  const result = { [dayName]: schedule[dayName] };
  return result;
}

function getOldestFromFirstSpecies(id) {
  const targetEmployee = data.employees.find((employee) => employee.id === id);
  const animal = data.species.find((specie) => specie.id === targetEmployee.responsibleFor[0]);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const { prices } = data;
  Object.keys(prices).forEach((key) => {
    const newPrice = (prices[key] * (1 + (percentage / 100))) + 0.001;
    prices[key] = Number(newPrice.toPrecision(4));
  });
}

const getAllAnimalsEmployeeCoverage = (respFor) => {
  const animals = respFor.map((specieId) => data.species.find(({ id }) => id === specieId).name);
  return animals;
};

const getAllEmployeeCoverage = () => {
  const result = {};
  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    result[`${firstName} ${lastName}`] = getAllAnimalsEmployeeCoverage(responsibleFor);
  });
  return result;
};

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return getAllEmployeeCoverage();
  }
  const employee = data.employees
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
