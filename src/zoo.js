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
  const speciesByID = ids.map((id) => (data.species.find((speciesId) => speciesId.id === id)));
  return speciesByID;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimals = data.species.find((species) => species.name === animal);
  return getAnimals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const nameEmployee = data.employees.find(({ firstName }) => (firstName === employeeName));
  const lastNameEmployee = data.employees.find(({ lastName }) => (lastName === employeeName));
  if (nameEmployee === undefined && lastNameEmployee === undefined) {
    return {};
  }
  if (nameEmployee !== undefined) {
    return nameEmployee;
  }
  return lastNameEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((idManager) => idManager === id));
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, item) => ({
      ...acc, [item.name]: item.residents.length,
    }), {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants = 0) {
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const result = (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  return result;
}

// function getAnimalMap(options) {
// seu código aqui
// }

function getSchedule(dayName) {
  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return schedule;
  }
  return { [dayName]: schedule[dayName] };
}

// function getOldestFromFirstSpecies(id) {
// seu código aqui
// }

// function increasePrices(percentage) {
// seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
// seu código aqui
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
