const data = require('./data');

function getSpeciesByIds(...ids) {
  const selectedSpecie = [];
  ids.forEach((id) => selectedSpecie.push(data.species.find((specie) => specie.id === id)));
  return selectedSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = data.species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return data.employees.find((employee) => {
      const findEmloyee = employee.firstName === employeeName || employee.lastName === employeeName;
      return findEmloyee;
    });
  } return {};
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  let checkManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) checkManager = true;
  });
  return checkManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof (species) === 'undefined') {
    const animalsObjs = data.species.map((specie) => ({ [specie.name]: specie.residents.length }));
    return animalsObjs.reduce((prevValue, currValue) => Object.assign(prevValue, currValue), {});
  } return data.species.find((specie) => specie.name === species).residents.length;
}

const sumEntry = (entrants) => entrants.reduce((prevValue, currValue) => {
  if (currValue[0] === 'Adult') return prevValue + (currValue[1] * 49.99);
  if (currValue[0] === 'Senior') return prevValue + (currValue[1] * 24.99);
  return prevValue + (currValue[1] * 20.99);
}, 0);

function calculateEntry(entrants) {
  if (typeof (entrants) === 'undefined' || Object.keys(entrants).length === 0) return 0;
  return sumEntry(Object.entries(entrants));
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

/* function getSchedule(dayName) {
  // seu código aqui
} */

/* function getOldestFromFirstSpecies(id) {
  // seu código aqui
} */

/* function increasePrices(percentage) {
  // seu código aqui
} */

/* function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

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
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
