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

const { employees, species: animals, prices, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => animals.find((kind) => kind.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = animals.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }
  return employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const getManegers = employees.map((employee) => employee.managers);
  return getManegers.some((managers) => managers.some((maneger) => maneger === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (!species) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  const { residents } = animals.find((animal) => animal.name === species);
  return residents.length;
}

function calculateEntry(entrants = 0) {
  const { Adult: adultQ = 0, Child: childQ = 0, Senior: seniorQ = 0 } = entrants;
  const { Adult: adultP = 0, Child: childP = 0, Senior: seniorP = 0 } = prices;
  const total = (adultQ * adultP) + (childQ * childP) + (seniorQ * seniorP);
  return total;
}

function getAnimalMap(options) {
  // seu código aqui
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

const scheduleGenerate = (date) => {
  const week = Object.entries(hours);
  const day = week.find((dayDate) => dayDate[0] === date);
  const daySchedule = day[1];
  const dayName = day[0];
  if (daySchedule.open === 0 && daySchedule.close === 0) { return { [dayName]: 'CLOSED' }; }
  return { [dayName]: `Open from ${daySchedule.open}am until ${daySchedule.close - 12}pm` };
};

function getSchedule(dayName) {
  // const week = Object.keys(hours);
  if (!dayName) {
    // return week.map((day) => scheduleGenerate(day));
    return schedule;
  }
  return scheduleGenerate(dayName);
}

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = employees.find((employee) => employee.id === id);
  const { residents } = animals.find((species) => species.id === responsibleFor[0]);
  const oldest = residents.reduce((acc, cur) => (cur.age > acc.age ? cur : acc));
  return Object.values(oldest);
}

function increasePrices(percentage) {
  const currPrices = Object.keys(prices);
  currPrices.forEach((curr) => {
    prices[curr] = Math.round(prices[curr] * (1 + percentage / 100) * 100) / 100;
  });
  return prices;
}

const employeesCoverage = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions'],
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) { return employeesCoverage; }
  const { firstName, lastName, responsibleFor } = employees.find((person) => {
    return person.firstName === idOrName || person.id === idOrName || person.lastName === idOrName;
  });
  const species = responsibleFor.map((id) => animals.find((animal) => animal.id === id));
  const speciesNames = species.map((animal) => animal.name);
  return {
    [`${firstName} ${lastName}`]: speciesNames,
  };
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
