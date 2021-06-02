/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const { species, employees } = require('./data');
// const data = require('./data');

// function getSpeciesByIds(ids) {
//   // seu código aqui
// }

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalName = species.find((animals) => animals.name === animal);
  return animalName.residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const employee = employees.find(
    (emp) => emp.firstName === employeeName || emp.lastName === employeeName,
  );
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const obj = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return obj;
}
console.log(
  createEmployee(
    {
      id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      managers: [
        'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        '9e7d4524-363c-416a-8759-8aa7e50c0992',
      ],
      responsibleFor: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      ],
    },
  ),
);

// function isManager(id) {
//   // seu código aqui
//   const manager = employees.filter((manage) => manage.id === id);
//   return manager;
// }
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(specie) {
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
  // getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
