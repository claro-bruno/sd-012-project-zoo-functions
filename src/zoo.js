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
  return ids.map((actualId) => data.species.find((actualAnimal) => actualAnimal.id === actualId));
}

function getAnimalsOlderThan(animalName, age) {
  const allAnimals = data.species.find((actualAnimal) => actualAnimal.name === animalName);
  return allAnimals.residents.every((currentAnimal) => currentAnimal.age > age);
}

function getEmployeeByName(employee) {
  if (typeof employee === 'undefined') {
    return {};
  }
  const elements = data.employees;
  return elements.find((actual) => actual.firstName === employee || actual.lastName === employee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof species === 'undefined') {
    return data.species.reduce((accumulator, animalSpecie) => {
      accumulator[animalSpecie.name] = animalSpecie.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;

  return (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
}

function getAnimalMap() {
  // options
  // const animals = data.species;

  // const locations = animals.reduce((acc, current) => {
  //   acc[current.location] = [];
  //   return acc;
  // }, {});

  // const animalsBySex = (sex) => {
  //   return animals.filter((element) => element.residents).filter((animal) => animal.sex === 'sex');
  // };

  // return animalsBySex('female');
}

const msgReturn = (acc, day) => {
  const { open, close } = data.hours[day];
  const msg = `Open from ${open}am until ${close - 12}pm`;
  acc[day] = (open > 0 && close > 0) ? msg : 'CLOSED';
  return acc;
};

function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  if (typeof dayName === 'undefined') {
    return days.reduce((accumulator, day) => msgReturn(accumulator, day), {});
  }

  const obj = {};
  return msgReturn(obj, dayName);
}

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((people) => people.id === id).responsibleFor[0];
  const individuals = data.species.find((current) => current.id === animal).residents;
  let oldest = individuals[0].age;
  individuals.map((currentAnimal) => {
    if (currentAnimal.age > oldest) {
      oldest = currentAnimal;
    }
    return oldest;
  });
  const { name, sex, age } = oldest;
  return [name, sex, age];
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
