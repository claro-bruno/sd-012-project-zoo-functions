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

const getSpeciesByRegion = (region, regions) => {
  const objRegions = regions;
  const namesSpecies = [];
  const speciesByRegion = species.filter(({ location }) => location === region);
  speciesByRegion.forEach(({ name }) => namesSpecies.push(name));
  objRegions[region] = namesSpecies;
  return objRegions;
};

const noParameterOrNotIncludeNames = () => {
  const regions = {};
  ['NE', 'NW', 'SE', 'SW'].forEach((region) => getSpeciesByRegion(region, regions));
  return regions;
};

const getSpecieByRegion = (specieByRegion, speciesAndNamesbyRegion, options) => {
  const { name, residents } = specieByRegion;
  const { sorted, sex: sexOp } = options;
  const namesSpecies = {};
  let animalsNames = [];
  if (sexOp === 'female') {
    const females = residents.filter(({ sex }) => sex === 'female');
    animalsNames = females.map(({ name: nameFemales }) => nameFemales);
  } else if (sexOp === 'male') {
    const males = residents.filter(({ sex }) => sex === 'male');
    animalsNames = males.map(({ name: nameMales }) => nameMales);
  } else {
    animalsNames = residents.map(({ name: nameResident }) => nameResident);
  }
  if (sorted === true) {
    animalsNames.sort();
  }
  namesSpecies[name] = animalsNames;
  speciesAndNamesbyRegion.push(namesSpecies);
};

const getSpeciesIncludingNames = (region, regions, options) => {
  const objRegions = regions;
  const speciesAndNamesbyRegion = [];
  const speciesByRegion = species.filter(({ location }) => location === region);
  speciesByRegion.forEach((specieByRegion) =>
    getSpecieByRegion(specieByRegion, speciesAndNamesbyRegion, options));
  objRegions[region] = speciesAndNamesbyRegion;
  return objRegions;
};

const yesParameterAndIncludeNames = (options) => {
  const regions = {};
  ['NE', 'NW', 'SE', 'SW'].forEach((region) =>
    getSpeciesIncludingNames(region, regions, options));
  return regions;
};

function getAnimalMap(options) {
  let obj = {};
  if (!options || !options.includeNames) {
    obj = noParameterOrNotIncludeNames();
  } else {
    obj = yesParameterAndIncludeNames(options);
  }
  return obj;
}

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

function getOldestFromFirstSpecies(wantedId) {
  const { responsibleFor } = employees.find(({ id }) => id === wantedId);
  const { residents } = species.find(({ id }) => id === responsibleFor[0]);
  const { name, sex, age } = residents.sort((a, b) => b.age - a.age)[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  const keysPrices = Object.keys(prices);
  return keysPrices.forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

const getSpeciesName = (responsibleFor) => {
  const names = [];
  responsibleFor.forEach((animal) => {
    const { name } = species.find(({ id }) => id === animal);
    names.push(name);
  });
  return names;
};

const noParameterEmployeeCoverage = () => {
  const employeeAndAnimals = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const key = `${firstName} ${lastName}`;
    employeeAndAnimals[key] = getSpeciesName(responsibleFor);
  });
  return employeeAndAnimals;
};

const yesParameterEmployeeCoverage = (idOrName) => {
  const employeeAndAnimals = {};
  const { firstName, lastName, responsibleFor } = employees
    .find(({ id, firstName: firstNameEmployee, lastName: lastNameEmployee }) =>
      (id === idOrName) || (firstNameEmployee === idOrName) || (lastNameEmployee === idOrName));
  const key = `${firstName} ${lastName}`;
  employeeAndAnimals[key] = getSpeciesName(responsibleFor);
  return employeeAndAnimals;
};

function getEmployeeCoverage(idOrName) {
  return idOrName ? yesParameterEmployeeCoverage(idOrName) : noParameterEmployeeCoverage();
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
