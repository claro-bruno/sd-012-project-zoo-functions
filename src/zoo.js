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

const { employees, species, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((species1) => species1.name === animal);
  return animals.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find(((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species2) {
  if (!species2) {
    const animalObj = {};
    species.forEach((specie) => { animalObj[specie.name] = specie.residents.length; });
    return animalObj;
  }
  return species.find((specie) => specie.name === species2).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  return Object.keys(entrants).reduce(((sum, price) => sum + prices[price] * entrants[price]), 0);
}

// function getAnimalMap(options) {

// }

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    const scheduleDays = Object.keys(hours);
    scheduleDays.forEach((day) => {
      const { open, close } = hours[day];
      schedule[day] = day !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    });
    return schedule;
  }

  const { open, close } = hours[dayName];
  schedule[dayName] = dayName !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';

  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const speciesList = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalList = species.find((spec) => spec.id === speciesList).residents;
  const older = animalList.reduce((olderAnimal, animal) => {
    const { name, sex, age } = animal;
    const { age: ageOlder } = olderAnimal;
    return age > ageOlder ? { name, sex, age } : olderAnimal;
  }, { name: '', sex: '', age: 0 });
  return Object.values(older);
}

function increasePrices(percentage) {
  const priceKeys = Object.keys(prices);
  priceKeys.forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {

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
