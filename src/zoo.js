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
  return ids.map((itemId) => data.species.find((species) => itemId === species.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalGet = data.species.find((item) => item.name === animal);
  return animalGet.residents.every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((item) => {
    if (item.firstName === employeeName || item.lastName === employeeName) return true;
    return false;
  });
}

function createEmployee(personal, associated) {
  return {
    ...personal,
    ...associated,
  };
}

function isManager(id) {
  const person = data.employees.find((item) => item.id === id);
  return person.managers.length === 1;
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
}

function countAnimals(species) {
  if (species) {
    return data.species.find((item) => item.name === species).residents.length;
  }
  return data.species.reduce((acc, item) => ({
    ...acc,
    [item.name]: item.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const allKeys = Object.keys(entrants);
  return allKeys.reduce((acc, item) => {
    const total = acc + entrants[item] * data.prices[item];
    return total;
  }, 0);
}

function getAnimalMap(options) {
  const perRegion = data.species.reduce((acc, item) => ({
    ...acc,
    [item.location]: data.species.filter((item2) => item2.location === item.location),
  }), {});
  const obj = {
    NE: perRegion.NE.map((item) => item.name),
    NW: perRegion.NW.map((item) => item.name),
    SE: perRegion.SE.map((item) => item.name),
    SW: perRegion.SW.map((item) => item.name),
  };
  return obj;
}

// console.log(getAnimalMap());

function getSchedule(dayName) {
  const allKeys = Object.keys(data.hours);
  const allWeek = allKeys.reduce((acc, item) => ({
    ...acc,
    [item]: `Open from ${data.hours[item].open}am until ${data.hours[item].close - 12}pm`,
  }), {});
  allWeek.Monday = 'CLOSED';
  if (!dayName) {
    return allWeek;
  }
  return { [dayName]: allWeek[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const animalCare = data.employees.find((item) => item.id === id).responsibleFor[0];
  const animalInfo = data.species.find((item) => item.id === animalCare).residents;
  animalInfo.sort((a, b) => b.age - a.age);
  const { name, sex, age } = animalInfo[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: Math.round((Adult * (1 + (percentage / 100)) * 100)) / 100,
    Child: Math.round((Child * (1 + (percentage / 100)) * 100)) / 100,
    Senior: Math.round((Senior * (1 + (percentage / 100)) * 100)) / 100,
  };
  return data.prices;
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
