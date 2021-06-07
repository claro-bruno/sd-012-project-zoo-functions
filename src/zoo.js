/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const { species, employees, prices, hours } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;
  const findId = species.filter((specie) => ids.includes(specie.id));
  return findId;
}

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((animals) => animals.name === animal);
  return animalName.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const employee = employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return obj;
}

function isManager(id) {
  const manager = employees.some((manage) => manage.managers.includes(id));
  return manager;
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specie) {
  const animal = species.map((animals) => animals.name);
  const animalQtd = species.map((animals) => animals.residents.length);
  if (!specie) {
    const obj = {};
    animal.forEach((element, index) => {
      obj[element] = animalQtd[index];
    });
    return obj;
  }
  const animalValue = species.find((animalName) => animalName.name === specie);
  const animalCount = animalValue.residents.length;
  return animalCount;
}

function calculateEntry(entrants = 0) {
  if (!entrants) return entrants;
  let total = 0;
  const entrantsKeys = Object.keys(entrants);
  entrantsKeys.forEach((key) => {
    if (key === 'Adult') {
      total += entrants[key] * prices.Adult;
    } else if (key === 'Senior') {
      total += entrants[key] * prices.Senior;
    } else {
      total += entrants[key] * prices.Child;
    }
  });
  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const hour = Object.values(hours);
  const obj = {};
  days.forEach((element, index) => {
    if (element !== 'Monday') {
      obj[element] = `Open from ${hour[index].open}am until ${hour[index].close - 12}pm`;
    } else {
      obj[element] = 'CLOSED';
    }
  });
  if (!dayName) {
    return obj;
  } if (dayName !== 'Monday') {
    const userDay = hours[dayName];
    return { [dayName]: `Open from ${userDay.open}am until ${userDay.close - 12}pm` };
  } return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(ids) {
  const { responsibleFor } = employees.find(({ id }) => ids === id);
  const firstAnimal = responsibleFor[0];
  const { residents } = species.find(({ id }) => id === firstAnimal);
  const animalAge = residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalAge);
}

function increasePrices(percentage) {
  const people = Object.keys(prices);
  people.forEach((element) => {
    prices[element] *= ((100 + percentage) / 100);
    prices[element] = Math.round(prices[element] * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
