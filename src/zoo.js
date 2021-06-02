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
  return data.species.filter((element, index) => element.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.filter((element) => element.name === animal);
  return animals.map((element) => element.residents.every((refAnimal) => refAnimal.age >= age))[0];
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { managers, responsibleFor } = associatedWith;
  const newObj = { ...personalInfo };
  newObj.managers = [...managers];
  newObj.responsibleFor = [...responsibleFor];
  return newObj;
}

function isManager(id) {
  return data.employees.some((element, index) => element.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const index = data.employees.length;
  data.employees[index] = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function countAnimals(speciess) {
  const numberOf = data.species.map((element) => element.residents.length);
  const obj = (lions, tigers, bears, penguins, otters, frogs, snakes, elephants, giraffes) => ({
    lions,
    tigers,
    bears,
    penguins,
    otters,
    frogs,
    snakes,
    elephants,
    giraffes,
  });
  if (speciess !== undefined) {
    return obj(...numberOf)[speciess];
  }
  return obj(...numberOf);
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult: a = 0, Child: c = 0, Senior: s = 0 } = entrants;
  const { Adult, Senior, Child } = data.prices;
  const result = (a * Adult) + (c * Child) + (s * Senior);
  return result;
}

// function getAnimalMap(options) {
//   return data.species.map((element) => element.location);
// }

function getSchedule(dayName) {
  // refatorar essa funçao assim que possivel;
  const programation = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  if (dayName === undefined) {
    return programation;
  }

  return { [dayName]: programation[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const firstResponsible = data.employees.find((element) => element.id === id).responsibleFor[0];
  const searchAnimal = (id2) => data.species.find((element) => element.id === id2).residents;
  const oldResident = searchAnimal(firstResponsible).sort((a, b) => b.age - a.age)[0];
  return Object.values(oldResident);
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

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
  // increasePrices,
  createEmployee,
};
