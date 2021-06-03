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
const { employees } = require('./data');

// 1=========================================================

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}// se o filter não receber nenhum item ele retorna array vazio
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

// 2=========================================================

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((animalName) => animalName.name === animal)
    .residents.every((specie) => specie.age > age);
}
// console.log(getAnimalsOlderThan('otters', 7));

// 3=========================================================

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}
// console.log(getEmployeeByName());

// 4=========================================================

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
const info1 = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};
const info2 = {
  managers: ['c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'],
  responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'],
};
console.log(createEmployee(info1, info2));
// 5=========================================================

function isManager(id) {
  const employee = employees
    .some((isEmployee) => isEmployee.managers.find((idManager) => idManager === id));
  // .some((isEmployee) => isEmployee.managers.length === 0 || isEmployee.managers.find((idManager) => idManager === id))// CEO
  return employee;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));l

// 6=========================================================

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (!newEmployee.managers) {
    newEmployee.managers = [];
  }
  if (!newEmployee.responsibleFor) {
    newEmployee.responsibleFor = [];
  }
  console.log(newEmployee);
  employees.push(newEmployee);
  return employees;
}
// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');
// console.log(employees.length);

// 7=========================================================

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
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  isManager,
  addEmployee,
  createEmployee,
};

// module.exports = {
//   calculateEntry,
//   getSchedule,
//   countAnimals,
//   getAnimalMap,
//   getSpeciesByIds,
//   getEmployeeByName,
//   getEmployeeCoverage,
//   addEmployee,
//   isManager,
//   getAnimalsOlderThan,
//   getOldestFromFirstSpecies,
//   increasePrices,
//   createEmployee,
// };
