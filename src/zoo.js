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
  const speciesFound = data.species.filter((specie) => ids.some((id) => specie.id === id));
  return speciesFound;
}

function getAnimalsOlderThan(animal, age) {
  const isOlder = data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age > age);
  return isOlder;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employeeFound = data.employees.find((employee) => ((employee.firstName === employeeName)
    || (employee.lastName === employeeName)));
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) =>
    manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(createEmployee({ id, firstName, lastName },
    { managers, responsibleFor }));
}

function countAnimals(species) {
  if (species) {
    const count = data.species.find((specie) =>
      specie.name === species).residents.length;
    return count;
  }
  const allSpeciesCount = {};
  data.species.forEach((specie) => {
    allSpeciesCount[specie.name] = specie.residents.length;
  });
  return allSpeciesCount;
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
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
