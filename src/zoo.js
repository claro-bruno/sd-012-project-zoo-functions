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
  const animals = data.species.filter((specie, index) => specie.id === ids[index]);
  return animals;
}

function getAnimalsOlderThan(animal, age) {
  const Species = data.species.find((specie) => animal === specie.name);
  const Resident = (resident) => resident.age >= age;
  const checkIfOlderThan = Species.residents.every(Resident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const peopleEmployees = data.employees.find((people) =>
    employeeName === people.firstName || employeeName === people.lastName);
  return peopleEmployees;
}

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addName = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addName);
}

function countAnimals(species) {
  if (!species) {
    const returnArray = {};
    data.species.forEach((num) => {
      returnArray[num.name]= num.residents.length;
    });
    return returnArray
  };
  const animal = data.species.find((num) =>
    num.name === species);
  return animal.residents.length;
}

// function calculateEntry(entrants) {
//   // seu código aqui
// }

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

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
  // calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
