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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === null) {
    return [];
  }
  const rightId = ids;
  return species.filter((specie) => specie.id === rightId.find((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  let thisAnimalsAreOlder = false;
  data.species.forEach((specie) => {
    const theyAreOlder = specie.residents.every((resident) => resident.age >= age);
    if (specie.name === animal && theyAreOlder === true) {
      thisAnimalsAreOlder = true;
    }
  });
  return thisAnimalsAreOlder;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const determinedEmployee = employees.find((employee) => {
    const findByName = employee.firstName === employeeName || employee.lastName === employeeName;
    return findByName;
  });
  return determinedEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers = [], responsibleFor = [] } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = { managers, responsibleFor };
  employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(animals) {
  const membersOfSpecie = {};
  let numberOfAnimals = 0;
  data.species.forEach((specie) => {
    if (animals === undefined) {
      membersOfSpecie[specie.name] = specie.residents.length;
      return membersOfSpecie;
    }
    if (typeof animals === 'string') {
      const thatSpecie = data.species.find((animal) => animal.name === animals);
      numberOfAnimals = thatSpecie.residents.length;
      return numberOfAnimals;
    }
  });
  return animals === undefined ? membersOfSpecie : numberOfAnimals;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceAdult = 49.99 * Adult;
  const priceSenior = 24.99 * Senior;
  const priceChild = 20.99 * Child;
  const totalPrice = priceAdult + priceSenior + priceChild;
  return totalPrice;
}

function getAnimalMap() {
  // options
}

function createSchedule(keys, values) {
  const schedule = {};

  keys.forEach((date) => {
    const index = values[keys.indexOf(date)];
    const opens = `Open from ${(((index.open + 11) % 12) + 1)}am`;
    const closes = `until ${(((index.close + 11) % 12) + 1)}pm`;
    const window = `${opens} ${closes}`;
    schedule[keys[keys.indexOf(date)]] = window;
    return schedule;
  });

  schedule[keys[keys.length - 1]] = 'CLOSED';

  return schedule;
}

function getSchedule(dayName) {
  const allDates = Object.keys(data.hours);

  const allHours = Object.values(data.hours);

  if (dayName === undefined) {
    return createSchedule(allDates, allHours);
  }

  if (typeof (dayName) === 'string') {
    const rightDay = createSchedule(allDates, allHours);

    return { [dayName]: rightDay[dayName] };
  }
}

function getOldestFromFirstSpecies(id) {
  const responsible = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === responsible.responsibleFor[0]);
  const residentsFromFirstSpecies = firstSpecie.residents;
  let oldest = {
    name: 'any',
    sex: 'any',
    age: 0,
  };
  const oldestFromFirstSpecies = residentsFromFirstSpecies.forEach((animal) => {
    if (animal.age > oldest.age ) {
      return oldest = animal;
    }
    return oldest;
  })
  const { name, sex, age } = oldest;
  return [ name, sex, age ];
}

function increasePrices(percentage) {
  const adultPrice = data.prices.Adult;
  const seniorPrice = data.prices.Senior;
  const childPrice = data.prices.Child;

  const newPrices = {
    Adult: Math.round((adultPrice + (adultPrice * (0.01 * percentage))) * 100) / 100,
    Senior: Math.round((seniorPrice + (seniorPrice * (0.01 * percentage))) * 100) / 100,
    Child: Math.round((childPrice + (childPrice * (0.01 * percentage))) * 100) / 100,
  };

  data.prices = newPrices;
  return data.prices;
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
