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
  const speciesArray = ids.map((id) => data.species.find((specie) => specie.id === id));
  return speciesArray;
}

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((animalList) => animalList.name === animal);
  return animals.residents.every((ages) => ages.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const foundEmployee = data.employees.find((employee) => ((employee.firstName === employeeName)
  || (employee.lastName === employeeName)));
  return foundEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(createEmployee({ id, firstName, lastName },
    { managers, responsibleFor }));
}

/*
function countAnimals(species) {
  // seu código aqui
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
*/

module.exports = {
  /*  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap, */
  getSpeciesByIds,
  getEmployeeByName,
  /*  getEmployeeCoverage,  */
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  /* getOldestFromFirstSpecies,
  increasePrices,  */
  createEmployee,
};
