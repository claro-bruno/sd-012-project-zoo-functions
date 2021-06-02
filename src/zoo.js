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
  const { species } = data;
  const selectedSpecies = [];
  const findId = (id) => species.find((specie) => specie.id === id);
  ids.forEach((id) => selectedSpecies.push(findId(id)));
  return selectedSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const animalData = data.species.find((elem) => elem.name === animal);
  return animalData.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const gotEmployee = employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  if (gotEmployee) return gotEmployee;
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) =>
    employee.managers.some((elem) => elem === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = {
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  data.employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(species) {
  const { species: specieData } = data;
  if (species) {
    return specieData.find((elem) => elem.name === species).residents.length;
  }
  return specieData.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { prices } = data;
  return Object.entries(entrants).reduce(
    (acc, curr) => prices[curr[0]] * curr[1] + acc,
    0,
  );
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

const { hours } = data;

function dayInfo(day) {
  if (hours[day].open === 0 && hours[day].close === 0) return 'CLOSED';
  return `Open from ${
    hours[day].open < 12 ? `${hours[day].open}am` : `${hours[day].open - 12}pm`
  } until ${
    hours[day].close < 12
      ? `${hours[day].close}am`
      : `${hours[day].close - 12}pm`
  }`;
}
// console.log(dayInfo('Tuesday'));

function getSchedule(dayName) {
  if (dayName) return { [dayName]: dayInfo(dayName) };
  return Object.keys(hours).reduce((acc, curr) => {
    acc[curr] = dayInfo(curr);
    return acc;
  }, {});
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
