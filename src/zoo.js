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

// const test = data.species.filter((spicie) => spicie.id === '0938aa23-f153-4937-9f88-4858b24d6bce');
// console.log(test);

function getSpeciesByIds(...ids) {
  const selectedSpecie = [];
  ids.forEach((id) => selectedSpecie.push(data.species.find((specie) => specie.id === id)));
  return selectedSpecie;
}

// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = data.species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return data.employees.find((employee) => {
      const findEmloyee = employee.firstName === employeeName || employee.lastName === employeeName;
      return findEmloyee;
    });
  } return {};
}

// console.log(getEmployeeByName());
// console.log(getEmployeeByName('Emery'));
// console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  // data.employees.push(newEmployee);
  return newEmployee;
}

/* const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  ],
}; */

// console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  let checkManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) checkManager = true;
  });
  return checkManager;
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

/* function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
} */

/* function countAnimals(species) {
  // seu código aqui
} */

/* function calculateEntry(entrants) {
  // seu código aqui
} */

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
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
