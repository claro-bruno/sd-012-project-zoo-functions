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

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  return ids ? ids.map((wantedId) => species.find(({ id }) => id === wantedId)) : [];
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every((resident) => resident.age >= age);
}

const findEmployee = ({ firstName, lastName }, employeeName) =>
  firstName === employeeName || lastName === employeeName;

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((employee) => findEmployee(employee, employeeName)) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

const noParameter = () => species.reduce((acc, crr) => {
  const newObj = {};
  newObj[crr.name] = crr.residents.length;
  return Object.assign(acc, newObj);
}, {});

const yesParameter = (animal) => {
  const wantedSpecie = species.find(({ name }) => name === animal);
  return wantedSpecie.residents.length;
};

function countAnimals(animals) {
  return animals ? yesParameter(animals) : noParameter();
}

const sum = (arrayEntrants) => {
  const value = arrayEntrants.reduce((acc, crr) =>
    acc + (crr[1] * prices[crr[0]]), 0);
  return parseFloat(value.toFixed(2));
};

function calculateEntry(entrants = 0) {
  const arrayEntrants = Object.entries(entrants);
  return arrayEntrants.length === 0 ? 0 : sum(arrayEntrants);
}

// ********************************************* REQUISITO 9 ********************************

// sem parametro ------------------------------------------------------------------------------
const getSpeciesRegion = (region) => {
  const objSpeciesRegion = {};
  const speciesRegion = species.filter(({ location }) => location === region);
  const namesSpeciesRegion = speciesRegion.map(({ name }) => name);
  objSpeciesRegion[region] = namesSpeciesRegion;
  return objSpeciesRegion;
};

const noParameterMap = () => {
  const arrayObjects = ['NE', 'NW', 'SE', 'SW'].map((region) => getSpeciesRegion(region));
  return arrayObjects.reduce((acc, crr) => Object.assign(acc, crr), {});
};

// com parametro: includeNames = true -----------------------------------------------------------

const getAnimalsRegion = (region) => {
  const objRegions = {};
  let arrayAnimals = [];
  const animalsRegion = species.filter(({ location }) => location === region);
  const objAnimalsRegion = animalsRegion.map(({ name, residents }) => {
    const objAnimal = {};
    objAnimal[name] = residents.map(({ name }) => name);
    return objAnimal;
  });
  arrayAnimals = [...objAnimalsRegion];
  objRegions[region] = arrayAnimals;
  return objRegions;
};

const parameterIncludeName = () => {
  const arrayObjects = ['NE', 'NW', 'SE', 'SW'].map((region) => getAnimalsRegion(region));
  return arrayObjects.reduce((acc, crr) => Object.assign(acc, crr), {});
};

// com parametro: includeNames = true , sorted = true ---------------------------------------------
const getAnimalsRegionSorted = (region) => {
  const objRegions = {};
  let arrayAnimals = [];
  const animalsRegion = species.filter(({ location }) => location === region);
  const objAnimalsRegion = animalsRegion.map(({ name, residents }) => {
    const objAnimal = {};
    //const orderedResidents = (residents.name).sort((a, b) => a - b);
    objAnimal[name] = orderedResidents.map(({ name }) => name);
    console.log(objAnimal);
    return objAnimal;
  });
  arrayAnimals = [...objAnimalsRegion];
  objRegions[region] = arrayAnimals;
  return objRegions;
};

const parameterIncludeNameSorted = () => {
  const arrayObjects = ['NE', 'NW', 'SE', 'SW'].map((region) => getAnimalsRegionSorted(region));
  return arrayObjects.reduce((acc, crr) => Object.assign(acc, crr), {});
};
// ------------------------------------------------------------------------------------------------
function getAnimalMap(options) {
  if (!options) {
    return noParameterMap();
  } else if (options.includeNames === true && options.sorted === true) {
     return parameterIncludeNameSorted()
  } else if (options.includeNames === true) {
    return parameterIncludeName();
  };
}

console.log(getAnimalMap({ includeNames: true, sorted: true }));


// ------------------------------------- ---------- ----------------------------

const getWeekSchedule = () => {
  const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const week = {};
  weekDays.forEach((day) => {
    const closeHour = hours[day].close - 12;
    const scheduleDay = `Open from ${hours[day].open}am until ${closeHour}pm`;
    week[day] = scheduleDay;
  });
  week.Monday = 'CLOSED';
  return week;
};

const getDaySchedule = (dayName) => {
  const day = {};
  const closeHour = hours[dayName].close - 12;
  const scheduleDay = `Open from ${hours[dayName].open}am until ${closeHour}pm`;
  day[dayName] = scheduleDay;
  return dayName === 'Monday' ? { Monday: 'CLOSED' } : day;
};

function getSchedule(dayName) {
  return dayName ? getDaySchedule(dayName) : getWeekSchedule();
}
    
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
