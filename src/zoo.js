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

// const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return ids;
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animals) =>
    animals.name === animal).residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((name) =>
    employeeName.includes(name.lastName) || employeeName.includes(name.firstName));
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {
    ...personalInfo,
    ...associatedWith,
  };
  return obj;
}
function isManager(id) {
  return data.employees.some((personal) => personal.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmpoyees = { id, firstName, lastName, managers, responsibleFor,
  };
  data.employees.push(newEmpoyees);
}

function countAnimals(species) {
  if (!species) {
    const animals = {};
    data.species.forEach((names) => {
      animals[names.name] = names.residents.length;
    });
    return animals;
  }
  const specie = data.species.find((sp) => sp.name === species);
  return specie.residents.length;
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
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
