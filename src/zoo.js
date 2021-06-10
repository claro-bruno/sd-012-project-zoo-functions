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

const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = ids.map((id) => (data.species.find((speciesId) => speciesId.id === id)));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((animalList) => animalList.name === animal);
  return animals.residents.every((ages) => ages.age > age);
}

function getEmployeeByName(employeeName) {
// seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(((employee) => employee.firstName === employeeName
|| employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
// seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
// seu código aqui
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// seu código aqui
function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
// seu código aqui
  if (!species) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
// seu código aqui
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (
    Adult * data.prices.Adult
    + Child * data.prices.Child
    + Senior * data.prices.Senior
  );
}

function getAnimalMap(options = {}) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  if (!options.includeNames) {
    data.species.forEach((specie) => locations[specie.location].push(specie.name));
    return locations;
  }

  data.species.forEach((specie) => {
    let { residents } = specie;
    if (options.sex) {
      residents = specie.residents.filter((resident) => resident.sex === options.sex);
    }
    const residentsNames = residents.map((resident) => resident.name);
    if (options.sorted) residentsNames.sort();
    locations[specie.location].push({ [specie.name]: residentsNames });
  });

  return locations;
}

function hoursConverter(hour) {
  if (hour > 12) return `${(hour - 12)}pm`;
  if (hour === 0) return '12pm';
  return `${hour}am`;
}
function scheduleMessage(dayName, schedule) {
  if (schedule[dayName].open !== schedule[dayName].close) {
    return `Open from ${hoursConverter(schedule[dayName]
      .open)} until ${hoursConverter(schedule[dayName].close)}`;
  }
  return 'CLOSED';
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {};
  const { hours } = data;
  if (dayName) {
    schedule[dayName] = scheduleMessage(dayName, hours);
  } else {
    Object.keys(hours).forEach((day) => {
      schedule[day] = scheduleMessage(day, hours);
    });
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
// seu código aqui
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = data.species.find((specie) => specie.id === specieId);
  const highestAge = residents.reduce((highest, resident) =>
    ((resident.age > highest) ? resident.age : highest), 0);
  const oldestResident = Object.values(residents.find((resident) =>
    resident.age === highestAge));
  return oldestResident;
}

function increasePrices(percentage) {
// seu código aqui
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

function getEmployeeCoverage() {
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
