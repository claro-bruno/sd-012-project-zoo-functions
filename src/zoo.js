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

const { species, employees } = require('./data');
// const data = require('./data');


function getSpeciesByIds(...args) {
  return species.filter((animal) => args.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const chosenAnimal = species.find(anim => anim.name === animal);
  return chosenAnimal.residents.every(item => item.age >= age);
}

function getEmployeeByName(employeeName) {
  const checkFirstName = employees.find(person => person.firstName === employeeName);
  const checkLastName = employees.find(person => person.lastName === employeeName);
  if (checkFirstName !== undefined) {
    return checkFirstName;
  }
  if (checkLastName !== undefined) {
    return checkLastName;
  }
  else {
    return emp = {};
  }
}

function createEmployee(personalInfo, associatedWith) {
  return emp = { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.includes(id))
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const emp = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: [managers],
    responsibleFor: [responsibleFor],
  };

  employees.push(emp);
  return employees;
}



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
