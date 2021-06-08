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
  const filterID = data.species.filter((specie) => ids.some((id) => specie.id === id));
  return filterID;
}

function getAnimalsOlderThan(animal, age) {
  const olderThan = (criatura) => criatura.age > age;
  const findAnimal = data.species.find((specie) => specie.name === animal);
  return findAnimal.residents.every(olderThan);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const name = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  return data.employees.find(name);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const manaID = (nums) => nums === id;
  const managersId = data.employees.some((manager) => manager.managers.some((manaID)));
  return managersId;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employee);
}

function countAnimals(species) {
  if (species === undefined) {
    const animalHeadCount = {};
    data.species.forEach(({ name, residents }) => {
      animalHeadCount[name] = residents.length;
    });
    return animalHeadCount;
  }
  const exactAnimal = data.species.find((animal) => animal.name === species).residents.length;
  return exactAnimal;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const price = Object.keys(entrants);
  const priceToPay = price.reduce((acc, age) => acc + entrants[age] * data.prices[age], 0);
  return priceToPay;
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  const allWeek = days.reduce((acc, item) => ({
    ...acc,
    [item]: `Open from ${data.hours[item].open}am until ${data.hours[item].close - 12}pm`,
  }), {});
  allWeek.Monday = 'CLOSED';
  if (!dayName) {
    return allWeek;
  }
  return { [dayName]: allWeek[dayName] };
}

/* function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  /* getAnimalMap, */
  getSpeciesByIds,
  getEmployeeByName,
  /* getEmployeeCoverage, */
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  /* getOldestFromFirstSpecies,
  increasePrices, */
  createEmployee,
};
