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

const { species, employees, prices, hours } = require('./data');
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeFound = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (!employeeFound) {
    return {};
  }
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;

  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((person, index) => person.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
}

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    species.forEach((specie) => {
      const { name, residents } = specie;
      obj[name] = residents.length;
    });
    return obj;
  }
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceAdult = Adult * prices.Adult;
  const priceSenior = Senior * prices.Senior;
  const priceChild = Child * prices.Child;
  const totalPrice = priceAdult + priceSenior + priceChild;
  return totalPrice;
}

function getAnimalNoPar() {
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  const NEobj = species.filter((specie) => specie.location === 'NE');
  NEobj.forEach((animal) => {
    obj.NE.push(animal.name);
  });
  const NWobj = species.filter((specie) => specie.location === 'NW');
  NWobj.forEach((animal) => {
    obj.NW.push(animal.name);
  });
  const SEobj = species.filter((specie) => specie.location === 'SE');
  SEobj.forEach((animal) => {
    obj.SE.push(animal.name);
  });
  const SWobj = species.filter((specie) => specie.location === 'SW');
  SWobj.forEach((animal) => {
    obj.SW.push(animal.name);
  });
  return obj;
}

function getAnimalIncludeNames() {
  const obj = { NE: {}, NW: {}, SE: {}, SW: {} };
  const NEobj = species.filter((specie) => specie.location === 'NE');
  NEobj.forEach((animal) => {
    obj.NE[animal.name] = (animal.residents.map((resident) => resident.name));
  });
  const NWobj = species.filter((specie) => specie.location === 'NW');
  NWobj.forEach((animal) => {
    obj.NW[animal.name] = (animal.residents.map((resident) => resident.name));
  });
  const SEobj = species.filter((specie) => specie.location === 'SE');
  SEobj.forEach((animal) => {
    obj.SE[animal.name] = (animal.residents.map((resident) => resident.name));
  });
  const SWobj = species.filter((specie) => specie.location === 'SW');
  SWobj.forEach((animal) => {
    obj.SW[animal.name] = (animal.residents.map((resident) => resident.name));
  });
  return obj;
}

function getAnimalMap(options) {
  if (!options) {
    return getAnimalNoPar();
  }
  if (options.includeNames === true) {
    return getAnimalIncludeNames();
  }
}

function getSchedule(dayName) {
  let hoursObj = {};
  if (!dayName) {
    hoursObj = {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
      Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
    return hoursObj;
  }
  hoursObj[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  if (dayName === 'Monday') hoursObj[dayName] = 'CLOSED';
  return hoursObj;
}

function getOldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => employee.id === id);
  const animalsEmployee = employeeId.responsibleFor;
  // const animals = species.filter((specie, index) => specie.id === animalsEmployee[index]);
  let animals = [];
  animalsEmployee.forEach((animal) => {
    animals = species.filter((specie) => specie.id === animal);
  });
  return animals;
}

function increasePrices(percentage) {
  let { Adult, Child, Senior } = prices;
  Adult += (Adult * (percentage / 100));
  Child += (Child * (percentage / 100));
  Senior += (Senior * (percentage / 100));
  prices.Adult = Math.round((Adult + Number.EPSILON) * 100) / 100;
  prices.Child = Math.round((Child + Number.EPSILON) * 100) / 100;
  prices.Senior = Math.round((Senior + Number.EPSILON) * 100) / 100;
}

function getEmployeeCoverage() {
  // idOrName
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
