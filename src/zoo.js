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
// const data = require('./data');
const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((id) => ids.includes(id.id));
}

function getAnimalsOlderThan(animal, age) {
// seu código aqui
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeFName = employees.find((firstName) => employeeName.includes(firstName.firstName));

  const employeeLName = employees.find((lastName) => employeeName.includes(lastName.lastName));

  return employeeFName || employeeLName;
}

function createEmployee(personalInfo, associatedWith) {
// seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species1) {
  // seu código aqui
  if (species1 === undefined) {
    const totalAnimals = species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
    return totalAnimals;
  }
  const currentAnimal = species.find((animal) => animal.name === species1).residents.length;
  return currentAnimal;
}

function calculateEntry(entrants) {
  // seu código aqui entrants
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
