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

const { species } = data;
const { employees } = data;
const { prices } = data;

function getSpeciesByIds(...ids) {
  const findId = (id) => species.find((specie) => specie.id === id);
  return ids.map(findId);
}

function getAnimalsOlderThan(animal, age) {
  const animalData = data.species.find((elem) => elem.name === animal);
  return animalData.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
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

function countAnimals(speciesInput) {
  const { species: specieData } = data;
  if (speciesInput) {
    return specieData.find((elem) => elem.name === speciesInput).residents
      .length;
  }
  return specieData.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
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

function getSchedule(dayName) {
  if (dayName) return { [dayName]: dayInfo(dayName) };
  return Object.keys(hours).reduce((acc, curr) => {
    acc[curr] = dayInfo(curr);
    return acc;
  }, {});
}

function getOldestFromFirstSpecies(id) {
  const firstAnimalId = employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const firstAnimal = species.find((specie) => specie.id === firstAnimalId);
  const oldestAnimal = firstAnimal.residents.find(
    (elem) =>
      elem.age
      === firstAnimal.residents.reduce(
        (acc, curr) => (curr.age > acc ? curr.age : acc),
        0,
      ),
  );
  return [...Object.values(oldestAnimal)];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((elem) => {
    const increase = data.prices[elem] + data.prices[elem] * (percentage / 100);
    data.prices[elem] = Number.parseFloat((increase + 0.001).toPrecision(4));
  });
}

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
