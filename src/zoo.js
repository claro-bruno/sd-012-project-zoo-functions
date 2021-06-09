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
  const speciesArray = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesArray;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((animalList) => animalList.name === animal);
  return animals.residents.every((ages) => ages.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const foundEmployee = data.employees.find((employee) => ((employee.firstName === employeeName)
  || (employee.lastName === employeeName)));
  return foundEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(createEmployee({ id, firstName, lastName },
    { managers, responsibleFor }));
}

function countAnimals(species) {
  if (species) {
    const count = data.species.find((specie) => specie.name === species).residents.length;
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

const speciesCoverage = (employee) => employee.responsibleFor.map((specieId) =>
  getSpeciesByIds(specieId)[0].name);

function getEmployeeCoverage(idOrName) {
  if (idOrName) {
    const employeeFound = data.employees.find((employee) =>
      ((employee.id === idOrName) || (employee.firstName === idOrName)
        || (employee.lastName === idOrName)));
    return { [`${employeeFound.firstName} ${employeeFound.lastName}`]:
      speciesCoverage(employeeFound) };
  }

  const employeesCovarage = {};
  data.employees.forEach((employee) => {
    employeesCovarage[`${employee.firstName} ${employee
      .lastName}`] = speciesCoverage(employee);
  });
  return employeesCovarage;
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
