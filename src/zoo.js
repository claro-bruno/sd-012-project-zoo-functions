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

function getSchedule(dayName) {
  const allDates = Object.keys(data.hours);

  const allHours = Object.values(data.hours);

  if (dayName === undefined) {
    const schedule = {};

    allDates.forEach((date) => {
      const index = allHours[allDates.indexOf(date)];
      const message = `Open from ${(((index.open + 11) % 12) + 1)}am until ${(((index.close + 11) % 12) + 1)}pm`;
      schedule[allDates[allDates.indexOf(date)]] = message;
      return schedule;
    });
      
    schedule[allDates[allDates.length - 1]] = 'CLOSED';

    return schedule;
  }

  if (typeof (dayName) === 'string') {
//
    const theDay = allDates.find((thatDay) => thatDay === dayName);

    const theHour = allHours.find((thatHour) => allHours.indexOf(thatHour) === allDates.indexOf(theDay));

    let schedule = {
      [theDay]: `Open from ${(((theHour.open + 11) % 12) + 1)}am until ${(((theHour.close + 11) % 12) + 1)}pm`,
    };

    if (theHour.open === theHour.close) {
      schedule = { [theDay]: 'CLOSED' };
    }

    return schedule;
  }
}

console.log(getSchedule());

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
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
