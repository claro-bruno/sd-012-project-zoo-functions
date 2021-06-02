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

const { species, employees, prices } = require('./data');
// const data = require('./data');

const getSpeciesByIds = (...ids) => {
  const array = [];
  ids.forEach((id) => {
    array.push(species.find((specie) => specie.id === id));
  });
  array.forEach((index) => {
    if (index === undefined) {
      return [];
    }
  });
  return array;
};

const getAnimalsOlderThan = (animal, age) => {
  const array = species.find((specie) => specie.name === animal);
  return array.residents.every((resident) => resident.age >= age);
};

const getEmployeeByName = (employeeName) => {
  const obj = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (obj === undefined) {
    return {};
  }
  return obj;
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = (id) => employees.some((employee) =>
  employee.managers.some((manager) => manager === id));

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  let man = managers;
  let res = responsibleFor;
  if (man === undefined) man = [];
  if (res === undefined) res = [];
  employees.push({
    id,
    firstName,
    lastName,
    managers: man,
    responsibleFor: res,
  });
};

const countAnimals = (animal) => {
  if (animal === undefined) {
    const obj = {};
    species.forEach((specie) => {
      obj[`${specie.name}`] = specie.residents.length;
    });
    return obj;
  }
  return species.find((specie) => specie.name === animal).residents.length;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const array = [];
  array.push(entrants.Adult * prices.Adult);
  array.push(entrants.Child * prices.Child);
  array.push(entrants.Senior * prices.Senior);
  let price = 0;
  array.forEach((index) => {
    if (Number.isNaN(index) === false) {
      price += index;
    }
  });
  return price;
};

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

const getOldestFromFirstSpecies = (id) => {
  const emp = employees.find((employee) => employee.id === id);
  const animalId = emp.responsibleFor[0];
  const animal = species.find((specie) => specie.id === animalId);
  let oldest = animal.residents[0];
  animal.residents.forEach((resident) => {
    if (resident.age > oldest) {
      oldest = resident.age;
    }
  });
  return oldest;
};

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
