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
  const newArray = [];
  ids.forEach((id) => {
    const isEqual = data.species.find((species) => id === species.id);
    if (isEqual !== undefined) {
      newArray.push(isEqual);
    }
  });
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  const species = data.species.find((specie) => specie.name === animal);
  return species.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === null || employeeName === undefined) {
    return {};
  }
  const rightEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return rightEmployee;
}

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

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
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

function countAnimals(species) {
  if (species === undefined || species === null) {
    const newObject = {};
    data.species.forEach((creature) => {
      newObject[creature.name] = creature.residents.length;
    });
    return newObject;
  }
  const animal = data.species.find((specie) => specie.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === null || entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entries = Object.entries(entrants);
  const sum = entries.reduce((acc, currentValue) => {
    const sumAcc = acc + currentValue[1] * data.prices[currentValue[0]];
    return sumAcc;
  }, 0);
  return sum;
}

function getAnimalMap(options) {
  const object = {};
  const { species } = data;
  // const animals = species.map((specie) => specie.name);
  // const names = species.map((specie) => {
  //   const eachName = specie.residents.map((name) => name.name);
  //   return eachName;
  // });
  const locations = species.map((specie) => specie.location);
  if (options === undefined || options === null) {
    locations.forEach((location) => {
      const animalsLoc = species.filter((specie) => specie.location === location);
      const animalsFound = animalsLoc.map((name) => name.name);
      object[location] = animalsFound;
    });
    return object;
  }
}

function getSchedule(dayName) {
  const dayEntries = Object.entries(data.hours);
  const newObject = {};
  dayEntries.forEach((day) => {
    if (day[1].open === 0) {
      newObject[day[0]] = 'CLOSED';
    } else {
      newObject[day[0]] = `Open from ${day[1].open}am until ${day[1].close % 12}pm`;
    }
  });
  const object = {};
  object[dayName] = newObject[dayName];
  return (dayName === undefined || dayName === null) ? newObject : object;
}

function getOldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
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
