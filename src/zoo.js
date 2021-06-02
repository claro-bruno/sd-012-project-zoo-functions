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

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
