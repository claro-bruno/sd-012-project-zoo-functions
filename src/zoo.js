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
  if (ids.length === 0) return ids;
  if (ids.length < 2) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  return data.species.filter((specie) =>
    ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) => {
    const verifyAllAge = specie.residents.every((resident) => resident.age >= age);
    return specie.name === animal && verifyAllAge;
  });
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const findEmployee = data.employees.find((employee) =>
    employee.id === id);
  const managements = data.employees.filter((employee) =>
    employee.managers.includes(findEmployee.id));
  if (managements.length > 0) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function countAnimals(species) {
  if (species === undefined) {
    const animalsObj = {};
    data.species.forEach((specie) => {
      animalsObj[specie.name] = specie.residents.length;
    });
    return animalsObj;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants = 0) {
  if (entrants === undefined) return entrants;
  const entrantsKeys = Object.keys(entrants);
  let totalValue = 0;
  entrantsKeys.forEach((key) => {
    if (key === 'Adult') {
      totalValue += entrants[key] * data.prices.Adult;
    } else if (key === 'Child') {
      totalValue += entrants[key] * data.prices.Child;
    } else if (key === 'Senior') {
      totalValue += entrants[key] * data.prices.Senior;
    }
  });
  return totalValue;
}

function getAnimalMap(options) {

}

function getSchedule(dayName) {
  // seu código aqui
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
