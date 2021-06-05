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
// const data = require('./data');

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
    const speciesCount = {};
    animals.forEach((animal) => {
      speciesCount[animal.name] = animal.residents.length;
    });
    return speciesCount;
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

// let animalsMap = {};

// function getAnimalMap(options) {
//   const map = ['NE', 'NW', 'SE', 'SW'];

//   if (!options) {
//     const species = map.map((dir) => animals.filter((animal) => animal.location === dir));
//     const speciesName = species.map((animal) => animal);
//     return species;
//   }
// }

// console.log(getAnimalMap());

let schedule = {};

const scheduleGenerate = (date) => {
  const week = Object.entries(hours);
  const day = week.find((dayDate) => dayDate[0] === date);
  const daySchedule = day[1];
  const dayName = day[0];
  if (daySchedule.open === 0 && daySchedule.close === 0) {
    schedule[dayName] = 'CLOSED';
  } else {
    schedule[dayName] = `Open from ${daySchedule.open}am until ${daySchedule.close - 12}pm`;
  }
  return schedule;
};

function getSchedule(dayName) {
  const week = Object.keys(hours);
  if (!dayName) {
    return week.map((day) => scheduleGenerate(day))[0];
  }
  schedule = {};
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

let coverage = {};

const generateCoverage = (emInfo) => {
  const { firstName, lastName, responsibleFor } = employees.find((em) => {
    const result = em.firstName === emInfo || em.id === emInfo || em.lastName === emInfo;
    return result;
  });
  const species = responsibleFor.map((id) => animals.find((animal) => animal.id === id));
  const speciesNames = species.map((animal) => animal.name);
  coverage[`${firstName} ${lastName}`] = speciesNames;
  return coverage;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) { return employees.map((employee) => generateCoverage(employee.id))[0]; }
  coverage = {};
  return generateCoverage(idOrName);
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
