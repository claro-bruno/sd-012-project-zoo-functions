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
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  return ids.map((id) => species.find((getSpecies) => getSpecies.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specimens = species.filter((getSpecies) => getSpecies.name === animal)[0].residents;
  return specimens.every((specimen) => specimen.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const {
    id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const getManagers = [];
  data.employees.forEach((employee) => getManagers.push(...employee.managers));
  // usei o data. para me livrar de um erro do lint
  return getManagers.some((managerId) => managerId === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
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
  // seu código aqui
  if (animal === undefined) {
    return species.reduce((accumulator, current) => {
      accumulator[current.name] = current.residents.length;
      return accumulator;
    }, {});
  }
  return species.find((getSpecies) => getSpecies.name === animal).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: priceAdult, Senior: priceSenior, Child: priceChild } = prices;
  return Adult * priceAdult + Child * priceChild + Senior * priceSenior;
}

function getAnimalMap(options) {
  // seu código aqui
  const regions = ['NE', 'NW', 'SE', 'SW'];
  const getAnimals = () => regions.reduce((accumulator, current) => {
    accumulator[current] = species.filter((getSpecies) =>
      getSpecies.location === current).map((getNames) => getNames.name);
    return accumulator;
  }, {});
  if (options === undefined) {
    return getAnimals();
  }
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames === true) {
    const getAnimalsWNames = () => regions.reduce((accumulator, current) => {
      accumulator[current] = species.filter((getSpecies) =>
        getSpecies.location === current).map((getNames) => {
        const object = {};
        object[getNames.name] = getNames.residents.map((getSpecimen) => getSpecimen.name);
        return object;
      });
      return accumulator;
    }, {});
    return getAnimalsWNames();
  }
}

console.log(getAnimalMap({ includeNames: true }));

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
