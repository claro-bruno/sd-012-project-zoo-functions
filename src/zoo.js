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
// Incio do Projeto
const data = require('./data');

const { species, employees, prices, hours } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((item) => ids.find((item2) => item.id === item2));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const findAnimal = species.find((item) => item.name === animal);
  return findAnimal.residents.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const findByName = employees.find((item) => item.firstName === employeeName);
  const findByLast = employees.find((item) => item.lastName === employeeName);
  if (findByName) {
    return findByName;
  }
  if (findByLast) {
    return findByLast;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  const manager = employees.some((item) => item.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

const animalsAndPopulation = species.reduce((accumulator, item) => {
  accumulator[item.name] = item.residents.length;
  return accumulator;
}, {});

function countAnimals(animalToCount) {
  // seu código aqui
  if (animalToCount === undefined) {
    return animalsAndPopulation;
  }
  const countAnimal = species.find((item) => item.name === animalToCount).residents.length;

  return countAnimal;
}

// Function calculateEntry feita com ajuda do Thalles durante plantao de ajuda
function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = prices.Adult * Adult;
  const childPrice = prices.Child * Child;
  const seniorPrice = prices.Senior * Senior;

  return adultPrice + childPrice + seniorPrice;
}

/* function getAnimalMap(options) {
  // seu código aqui

} */

// Function getSchedule feita com ajuda do Thalles durante plantao de duvidas
function getSchedule(dayName) {
  // seu código aqui
  const hoursArray = Object.entries(hours);

  const hoursObject = hoursArray.reduce((accumulator, item) => {
    const { open, close } = item[1];
    accumulator[item[0]] = `Open from ${open}am until ${close - 12}pm`;

    if (item[0] === 'Monday') {
      accumulator[item[0]] = 'CLOSED';
    }
    return accumulator;
  }, {});
  if (!dayName) return hoursObject;

  const daySchedule = { [dayName]: hoursObject[dayName] };
  return daySchedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findFirstAnimal = employees.find((item) => item.id === id).responsibleFor[0];
  const findResidents = species.find((item) => item.id === findFirstAnimal).residents;

  findResidents.sort((itemA, itemB) => itemB.age - itemA.age);
  const { name, sex, age } = findResidents[0];
  return [name, sex, age];
}

/* function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  createEmployee,
  isManager,
  addEmployee,
  countAnimals,
  calculateEntry,
  getSchedule,
  getOldestFromFirstSpecies,
};

/* module.exports = {
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
}; */
