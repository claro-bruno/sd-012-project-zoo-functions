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
  if (employeeName) {
    return employees.find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);
  }
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

function countAnimals(animalName) {
  if (animalName) {
    const targetSpecie = species.find((specie) => specie.name === animalName);
    return targetSpecie.residents.length;
  }
  return species.reduce((acc, curr) => ({
    ...acc,
    [curr.name]: curr.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
}

const regions = ['NE', 'NW', 'SE', 'SW'];
const getAllByRegion = () => regions.reduce((acc, curr) => ({
  ...acc,
  [`${curr}`]: species.filter((specie) => specie.location === curr).map((specie) => specie.name),
}), {});

const getAllByRegionWNames = (sex, sorted) => regions.reduce((accumulator, current) => ({
  ...accumulator,
  [`${current}`]: species.filter((specie) => specie.location === current)
    .map((element) => {
      let { residents } = element;
      if (sex.length !== 0) residents = residents.filter((animal) => animal.sex === sex);
      residents = residents.map((resident) => resident.name);
      if (sorted) residents.sort();
      return { [element.name]: residents };
    }),
}), {});

function getAnimalMap(options) {
  if (!options || !options.includeNames) return getAllByRegion();
  const { sorted = false, sex = '' } = options;
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
  const animalId = species.find((specie) => specie.id === targetEmployee.responsibleFor[0]);
  const oldestAnimal = animalId.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + (percentage / 100)) * 100) / 100;
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
