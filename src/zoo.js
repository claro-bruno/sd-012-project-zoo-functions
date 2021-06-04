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
  const speciesFound = data.species.filter((specie) => ids.some((id) => specie.id === id));
  return speciesFound;
}

function getAnimalsOlderThan(animal, age) {
  const isOlder = data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
  return isOlder;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employeeFound = data.employees.find((employee) => ((employee.firstName === employeeName)
    || (employee.lastName === employeeName)));
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) =>
    manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(createEmployee({ id, firstName, lastName },
    { managers, responsibleFor }));
}

function countAnimals(species) {
  if (species) {
    const count = data.species.find((specie) =>
      specie.name === species).residents.length;
    return count;
  }
  const allSpeciesCount = {};
  data.species.forEach((specie) => {
    allSpeciesCount[specie.name] = specie.residents.length;
  });
  return allSpeciesCount;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult: adult = 0, Child: child = 0, Senior: senior = 0 } = entrants;
  const total = ((adult * data.prices.Adult) + (child * data.prices.Child)
    + (senior * data.prices.Senior));
  return total;
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
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = data.species.find((specie) => specie.id === specieId);
  const highestAge = residents.reduce((highest, resident) =>
    ((resident.age > highest) ? resident.age : highest), 0);
  const oldestResident = Object.values(residents.find((resident) =>
    resident.age === highestAge));
  return oldestResident;
}

function increasePrices(percentage) {
  const prices = Object.keys(data.prices);
  prices.forEach((price) => {
    data.prices[price] = Math.round((data.prices[price]
      + ((data.prices[price] * percentage) / 100)) * 100) / 100;
  });
}

function getEmployeeCoverage(/* idOrName */) {
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
