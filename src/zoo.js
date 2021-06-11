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
  const speciesByIdReturn = [];
  if (ids.length === 0) {
    return speciesByIdReturn;
  } if (ids.length === 1) {
    speciesByIdReturn.push(data.species.find((specie) => specie.id === ids[0]));
    return speciesByIdReturn;
  } if (ids.length > 1) {
    return data.species.filter((specie) => ids.some((spe) => spe === specie.id));
  }
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((animals) => animals.name === animal);
  const checkAge = findAnimal.residents.every((resident) => resident.age >= age);
  return checkAge;
}

function getEmployeeByName(employeeName) {
  const findByFirstName = data.employees.find((employee) => employee.firstName === employeeName);
  const findByLastName = data.employees.find((employee) => employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  } if (data.employees.some((employee) => employee.firstName === employeeName) === true) {
    return findByFirstName;
  } if (data.employees.some((employee) => employee.lastName === employeeName) === true) {
    return findByLastName;
  }
}

function createEmployee(personalInfo, associatedWith) {
  const createEmploye = Object.assign(personalInfo, associatedWith);
  return createEmploye;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manage) => manage === id));
}
const checkEmpty = (array) => {
  if (array === undefined) {
    return [];
  } return array;
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = { id, firstName, lastName };
  data.employees.push(createEmployee(newEmployee, { managers: checkEmpty(managers),
    responsibleFor: checkEmpty(responsibleFor) }));
}

// function countAnimals(species) {
//   // seu código aqui
// }

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
  // countAnimals,
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
