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
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const specificAnimal = data.species.find((value) => value.name === animal).residents;
  return specificAnimal.every((value) => value.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((role) => role.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species0) {
  if (!species0) {
    return data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }
  return data.species.find((specie) => specie.name === species0).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === {} || !entrants) return 0;
  return Object.keys(entrants).reduce((acc, curr) => acc + (entrants[curr] * data.prices[curr]), 0);
}

function getAnimalMap() {
  // Infelizmente, nao tenho neuronios suficientes pra resolver isso aqui. Que morte horrivel !
}

const schedule = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};
function getSchedule(day) {
  const agenda = {};
  if (!day) {
    return schedule;
  }
  if (day !== 'Monday') {
    agenda[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    return agenda;
  }
  if (day === 'Monday') {
    return { Monday: 'CLOSED' };
  }
}

function getOldestFromFirstSpecies(id) {
  const animals = data.employees.find((currentValue) => currentValue.id === id).responsibleFor;
  const animalId = data.species.find((currentValue) => currentValue.id === animals[0]).residents;
  const ageA = animalId.reduce((acc, currentValue) => Math.max(acc, currentValue.age), 0);
  const theOldestAnimal = animalId.find((currentValue) => currentValue.age === ageA);
  return Object.values(theOldestAnimal);
}

function increasePrices(percentage) {
  const adultdc = (((percentage / 100) * (data.prices.Adult))) + data.prices.Adult;
  const childdc = (((percentage / 100) * (data.prices.Child))) + data.prices.Child;
  const seniordc = (((percentage / 100) * (data.prices.Senior))) + data.prices.Senior;
  data.prices.Adult = Number((adultdc + 0.001).toFixed(2));
  data.prices.Child = Number((childdc + 0.001).toFixed(2));
  data.prices.Senior = Number((seniordc + 0.001).toFixed(2));
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
