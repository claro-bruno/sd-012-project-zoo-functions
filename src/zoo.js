/* eslint-disable max-lines-per-function */
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
  if (ids.length === 0) return [];
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = species.filter((specie) => specie.name === animal)[0];
  const getResidents = animalSpecie.residents;
  const getAge = getResidents.every((resident) => (resident.age >= age));
  return getAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) => (firstName === employeeName
     || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const map = employees.map((employee) => {
    if (employee.managers.includes(id)) return true;
    return false;
  });
  const some = map.some((item) => item === true);
  return some;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return species.find((item) => item.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, curr) => acc + (entrants[curr] * prices[curr]), 0);
}

const groupAnimalsByLocation = ((arrayAnimals) => {
  const result = {};
  arrayAnimals.map((specie) => {
    if (result[specie.location]) return result[specie.location].push(specie.name);
    result[specie.location] = [specie.name];
    return result;
  });
  return result;
});

function filterSpecieBySex(sex, residents) {
  return residents.filter((resident) => resident.sex === sex);
}

function getResidentsBySpecieName(specieArray, name, options = {}) {
  const filteredSpecie = specieArray.find((specie) => specie.name === name).residents;
  return options.sex ? filterSpecieBySex(options.sex, filteredSpecie) : filteredSpecie;
}

const getResidentsName = ((arrayResidents, options = {}) => {
  const names = [];
  arrayResidents.forEach((resident) => names.push(resident.name));
  return options.sorted ? names.sort() : names;
});

const getGroupedAnimalsWithNames = ((groupedAnimals, options) => {
  const groupedAnimalsWithName = {};
  const regions = Object.keys(groupedAnimals);
  regions.forEach((region) => {
    groupedAnimalsWithName[region] = [];
    groupedAnimals[region].forEach((animal) => {
      const animalObject = {};
      const residents = getResidentsBySpecieName(species, animal, options);
      animalObject[animal] = getResidentsName(residents, options);
      groupedAnimalsWithName[region].push(animalObject);
    });
  });
  return groupedAnimalsWithName;
});

function getAnimalMap(options = {}) {
  const groupedAnimals = groupAnimalsByLocation(species);
  if (options.includeNames) return getGroupedAnimalsWithNames(groupedAnimals, options);
  return groupedAnimals;
}

function formatDaySchedule(day) {
  if (day.open === day.close) return 'CLOSED';
  return `Open from ${day.open}am until ${day.close - 12}pm`;
}

function getSchedule(dayName) {
  const arraySchedule = dayName ? [dayName] : Object.keys(hours);
  const formattedSchedule = {};
  arraySchedule.forEach((day) => {
    formattedSchedule[day] = formatDaySchedule(hours[day]);
  });
  return formattedSchedule;
}

function getOldestFromFirstSpecies(id) {
  const getId = employees.find((employee) => employee.id === id);
  const getFirstSpecies = getId.responsibleFor[0];
  const getSpecies = species.find((specie) => specie.id === getFirstSpecies);
  const getResidents = getSpecies.residents;
  const getOldest = getResidents.reduce((acc, curr) => {
    if (curr.age > acc.age) return curr;
    return acc;
  });
  return Object.values(getOldest);
}

function increasePrices(percentage) {
  const getPrices = Object.keys(prices);
  const getPercentage = 1 + (percentage / 100);
  getPrices.forEach((item) => {
    prices[item] = Math.round(prices[item] * getPercentage * 100) / 100;
  });
  return prices;
}

const getAnimalsById = ((idArray) => {
  const result = [];
  idArray.forEach((id) => {
    const find = species.find((specie) => specie.id === id);
    result.push(find.name);
  });
  return result;
});

const formatEmployeeCoverage = ((employeesArray) => {
  const result = {};
  employeesArray.forEach(({ firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    result[fullName] = getAnimalsById(responsibleFor);
  });
  return result;
});

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return formatEmployeeCoverage(employees);

  const filteredEmployees = employees.filter((employee) => employee.firstName === idOrName
    || employee.lastName === idOrName
    || employee.id === idOrName);
  return formatEmployeeCoverage(filteredEmployees);
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
