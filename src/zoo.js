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

const { employees, species, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animals) => ids.find((id) => id === animals.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalsAge = data.species.find((animalName) => animalName.name === animal);
  return animalsAge.residents.every((ages) => ages.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((professional) => professional.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
  return newEmployee;
}

// console.log(addEmployee('2323232', 'Lucifer', 'Morningstar', ['burlId', 'olaId'], ['lionId', 'tigersId']));

function countAnimals(specie) {
  if (specie === undefined) {
    return species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
  }
  return species.find((specieToFind) => specieToFind.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  // Tive ajuda do Rodrigo Merlone pra desenvolver a lógica de programação na parte que segue:
  return Object.keys(entrants).reduce(((acc, value) => acc + (entrants[value] * prices[value])), 0);
}

function getAnimalMap() {
  // seu código aqui
}

const openingHours = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};
function getSchedule(dayName) {
  if (dayName === undefined) {
    return openingHours;
  }
  const openingDay = Object.keys(openingHours).find((day) => day === dayName);
  return { [openingDay]: openingHours[openingDay] };
}
// console.log(getSchedule('Friday'));

function getOldestFromFirstSpecies(id) {
// seu código aqui
}

function increasePrices(percentage) {
// seu código aqui
}

function getEmployeeCoverage(idOrName) {
// seu código aqui
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
