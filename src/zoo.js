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

const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }

  if (ids.length === 1) {
    return ids.map((idsIndex) => data.species.find((animal) => animal.id === idsIndex));
  }
  if (ids.length > 1) {
    return ids.map((idsIndex) => species.find((animal) => animal.id === idsIndex));
  }
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.map((element) => {
    let acc;
    if (element.name === animal) {
      acc = element.residents.every((idade) => idade.age > age);
    }
    return acc;
  });
  return animals.some((verify) => verify === true);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const name = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  return name;
}

function createEmployee(personalInfo, associatedWith) {
  const obj = Object.assign(personalInfo, associatedWith);
  return obj;
}

function isManager(id) {
  return employees.some((element) => {
    for (let index = 0; index <= element.managers.length; index += 1) {
      if (element.managers[index] === id) {
        return true;
      }
    }
    return false;
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const aa = employees;
  aa.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return aa;
}

function countAnimals(specie) {
  const numberAnimals = species.reduce((acc, current) => {
    if (specie === undefined) {
      acc[current.name] = current.residents.length;
    } else if (specie === current.name) {
      return current.residents.length;
    }
    return acc;
  }, {});
  return numberAnimals;
}

function calculateEntry(entrants = 0) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const entrant = Object.keys(entrants);
  let sum = 0;
  entrant.forEach((element) => {
    if (element === 'Adult') {
      sum += entrants[element] * prices.Adult;
    } else if (element === 'Child') {
      sum += entrants[element] * prices.Child;
    } else if (element === 'Senior') {
      sum += entrants[element] * prices.Senior;
    }
  });
  return sum;
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayname
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices(percentage) {
  const decimal = percentage / 100;
  prices.Adult += (prices.Adult * decimal);
  prices.Child += (prices.Child * decimal);
  prices.Senior += (prices.Senior * decimal);
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Child = Math.round(prices.Child * 100) / 100;
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  return prices;
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
