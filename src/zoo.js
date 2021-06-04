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

const { prices } = require('./data');
const data = require('./data');

const { species, employees, hours } = data;

function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return ({
    ...personalInfo,
    ...associatedWith,
  });
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
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

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((object, specie) => {
      const objectQty = object;
      objectQty[specie.name] = specie.residents.length;
      return objectQty;
    }, {});
  }
  return data.species.find((specie) => specie.name === animal).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrice = Adult * data.prices.Adult;
  const childPrice = Child * data.prices.Child;
  const seniorPrice = Senior * data.prices.Senior;
  return adultPrice + childPrice + seniorPrice;
}

// function getAnimalMap(options) {

// }

function getSchedule(dayName) {
  const days = Object.keys(hours);
  const infos = {};
  const response = {};

  days.forEach((day) => {
    const { open, close } = hours[day];
    const info = open === 0 ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    infos[day] = info;
  });

  response[dayName] = infos[dayName];
  return dayName ? response : infos;
}

function getOldestFromFirstSpecies(id) {
  const responsible = employees.find((employee) => id === employee.id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === responsible);
  let oldest = animal.residents[0];
  animal.residents.forEach((resident) => {
    if (resident.age > oldest.age) oldest = resident;
  });
  return [oldest.name, oldest.sex, oldest.age];
}

function increasePrices(percentage) {
  const pricePercentage = percentage / 100;
  prices.Adult = Math.round(((prices.Adult * pricePercentage) + prices.Adult) * 100) / 100;
  prices.Child = Math.round(((prices.Child * pricePercentage) + prices.Child) * 100) / 100;
  prices.Senior = Math.round(((prices.Senior * pricePercentage) + prices.Senior) * 100) / 100;
}

const getAllAnimalsEmployeeCoverage = (responsible) => {
  const animals = responsible.map((specieId) =>
  data.species.find(({ id }) => id === specieId).name);
  return animals;
};

function getAllEmployeeCoverage() {
  const result = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    result[`${firstName} ${lastName}`] = getAllAnimalsEmployeeCoverage(responsibleFor);
  });
  return result;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return getAllEmployeeCoverage();
  }
  const employee = data.employees
    .find(({ id, firstName, lastName }) =>
      idOrName === id || idOrName === firstName || idOrName === lastName);

  const { firstName, lastName, responsibleFor } = employee;
  const animals = getAllAnimalsEmployeeCoverage(responsibleFor);

  return { [`${firstName} ${lastName}`]: animals };
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
