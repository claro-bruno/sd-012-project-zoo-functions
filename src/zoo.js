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
  if (ids.length === 0) {
    return [];
  }
  return species.filter((specie, index) =>
    specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((specie) => specie.name === animal);
  return animals[0].residents.every((animal2) => animal2.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const worker = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return worker;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  const manager = employees.some((employee, index) => employee.managers[index] === id);
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(speciesPar) {
  if (!speciesPar) {
    const allAnimals = {};
    data.species.forEach((animal) => {
      allAnimals[animal.name] = animal.residents.length;
      return true;
    });
    return allAnimals;
  }
  return data.species.find((animal) => animal.name === speciesPar).residents.length;
}

function calculateEntry(...entrants) {
  if (entrants.length === 0) {
    return 0;
  }

  if (Object.keys(...entrants).length === 0) {
    return 0;
  }

  const [people] = entrants;

  const { Adult: adultNum = 0, Child: childrenNum = 0, Senior: seniorNum = 0 } = people;

  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;

  return adultNum * adultPrice + childrenNum * childPrice + seniorNum * seniorPrice;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const schedule = {};
  function getHours(element) {
    if (element[0] === 'Monday') {
      schedule[element[0]] = 'CLOSED';
    } else {
      schedule[element[0]] = `Open from ${element[1].open}am until ${element[1].close - 12}pm`;
    }
  }
  Object.entries(data.hours).forEach(getHours);
  if (!dayName) {
    return schedule;
  }
  const newSchedule = Object.entries(schedule).find((day) => day[0] === dayName);
  const first = newSchedule[0];
  const second = newSchedule[1];
  const dailySchedule = {};
  dailySchedule[first] = second;
  return dailySchedule;
}

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const specificAnimal = species.find((specific) => specific.id === animal).residents;
  const oldest = specificAnimal.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  const oldestObj = Object.values(oldest);
  return oldestObj;
}

function increasePrices(percentage) {
  const adult = Object.values(data.prices)[0];
  const senior = Object.values(data.prices)[1];
  const child = Object.values(data.prices)[2];
  data.prices.Adult = Math.round((adult + adult * (percentage / 100)) * 100) / 100;
  data.prices.Senior = Math.round((senior + senior * (percentage / 100)) * 100) / 100;
  data.prices.Child = Math.round((child + child * (percentage / 100)) * 100) / 100;
  return data.prices;
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
