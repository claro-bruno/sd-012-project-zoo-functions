const data = require('./data');

function getSpeciesByIds(...ids) {
  const selectedSpecie = [];
  ids.forEach((id) => selectedSpecie.push(data.species.find((specie) => specie.id === id)));
  return selectedSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = data.species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return data.employees.find((employee) => {
      const findEmloyee = employee.firstName === employeeName || employee.lastName === employeeName;
      return findEmloyee;
    });
  } return {};
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  let checkManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) checkManager = true;
  });
  return checkManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof (species) === 'undefined') {
    const animalsObjs = data.species.map((specie) => ({ [specie.name]: specie.residents.length }));
    return animalsObjs.reduce((prevValue, currValue) => Object.assign(prevValue, currValue), {});
  } return data.species.find((specie) => specie.name === species).residents.length;
}

const sumEntry = (entrants) => entrants.reduce((prevValue, currValue) => {
  if (currValue[0] === 'Adult') return prevValue + (currValue[1] * 49.99);
  if (currValue[0] === 'Senior') return prevValue + (currValue[1] * 24.99);
  return prevValue + (currValue[1] * 20.99);
}, 0);

function calculateEntry(entrants) {
  if (typeof (entrants) === 'undefined' || Object.keys(entrants).length === 0) return 0;
  return sumEntry(Object.entries(entrants));
}

/* const getSpeciesByLocation = (species, location) => {
  const specieByLocation = species.filter((specie) => specie.location === location);
  return specieByLocation.map((specie) => specie.name);
}; */

/* const getSpeciesWithName = (species, location) => {
  const specieWithName = species.filter((specie) => specie.location === location).map((specie) => {
    const objectSpecie = { [specie.name]: (specie.residents.map((resident) => resident.name)) };
    return objectSpecie;
  });
  return specieWithName;
}; */

/* const getSpeciesWithNameSorted = (species, location) => {
  const specieSorted = species.filter((specie) => specie.location === location).map((specie) => {
    const objectSpecieSorted = { [specie.name]: (specie.residents).sort((a, b) => {
      if (b.name > a.name) return -1;
      return 0;
    }).map((resident) => resident.name) };
    return objectSpecieSorted;
  });
  return specieSorted;
}; */

/* const callAnimalMapFunction = (animalMapFunction) => ({
  NE: animalMapFunction(data.species, 'NE'),
  NW: animalMapFunction(data.species, 'NW'),
  SE: animalMapFunction(data.species, 'SE'),
  SW: animalMapFunction(data.species, 'SW'),
}); */

/* function getAnimalMap(options) {
  const optionDefault = (typeof (options) === 'undefined');
  if (optionDefault) {
    return callAnimalMapFunction(getSpeciesByLocation);
  }
  const optionNames = (options.includeNames === true && Object.entries(options).length === 1);
  if (optionNames) {
    return callAnimalMapFunction(getSpeciesWithName);
  }
  const optionSorted = (options.includeNames === true && options.sorted === true);
  if (optionSorted) {
    return callAnimalMapFunction(getSpeciesWithNameSorted);
  }
  // const optionSex = ();
  // const optionSexSorted = ();
} */

const formatSchedule = (hour) => {
  if (hour[0] === 'Monday') return ({ [hour[0]]: 'CLOSED' });
  const open = parseInt(hour[1].open, 10);
  const close = parseInt(hour[1].close, 10) - 12;
  return ({ [hour[0]]: `Open from ${open}am until ${close}pm` });
};

const formatScheduleDefault = (hours) => {
  const format = hours.map((hour) => formatSchedule(hour));
  return format.reduce((prevValue, currValue) => Object.assign(prevValue, currValue), {});
};

function getSchedule(dayName) {
  if (typeof (dayName) === 'undefined') return formatScheduleDefault(Object.entries(data.hours));
  return formatSchedule(Object.entries(data.hours).find((hour) => hour[0] === dayName));
}

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldest = (data.species.find((specie) => specie.id === specieId).residents).sort((a, b) => {
    if (b.age < a.age) return -1;
    return 0;
  })[0];
  return [oldest.name, oldest.sex, oldest.age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((price) => {
    data.prices[price] = Math.round((data.prices[price] * (1 + (percentage / 100))) * 100) / 100;
  });
}

/* function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
