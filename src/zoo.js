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
  return ids.map((id) => data.species.find((animalsId) => animalsId.id === id));
} // consultei o repositório da Camila Malvess e do kevin Oliveira para ajudar no meu raciocínio
// console.log(getSpeciesByIds());
// console.log((getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')));
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46', '01422318-ca2d-46b8-b66c-3e9e188244ed'));

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animalName.name === animal)
    .residents.every((resident) => resident.age > age);
}
// console.log((getAnimalsOlderThan('lions', 3)));

function getEmployeeByName(employeeName) {
  const findEmployee = data.employees.find((firstAndLastName) => firstAndLastName.firstName
  === employeeName || firstAndLastName.lastName === employeeName);
  if (findEmployee === undefined) {
    return {};
  }
  return findEmployee;
}
// console.log((getEmployeeByName('Nigel')));
// console.log((getEmployeeByName()));

function createEmployee(personalInfo, associatedWith) {
  const personalInfoAndAssociateWith = { ...personalInfo, ...associatedWith };
  return personalInfoAndAssociateWith;
}
// console.log(createEmployee({
//  id: '19p01s87',
//  firstName: 'Patricia',
//  lastName: 'Silvestre',
//  managers: [
//    'p5b83cb3',
//    '9e7d4524',
//  ],
//  responsibleFor: [
//    '0938aa23',
//    '89be95b3',
//  ],
// }));

function isManager(id) {
  const findManager = data.employees.some((employeeId, index) => employeeId.managers[index] === id);
  return findManager;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('stephanieId'));
console.log(isManager('burlId'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
} // para colocar a questão do [] no managers e responsibleFor, tive que consultar o respositório de alguns colegas, como o da Camila Malves, pois não sabia.

// function countAnimals(species) {
// // seu código aqui
// }

// function calculateEntry(entrants) {
// // seu código aqui
// }

// function getAnimalMap(options) {
// // seu código aqui
// }

// function getSchedule(dayName) {
// // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
// // seu código aqui
// }

// function increasePrices(percentage) {
// // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
// // seu código aqui
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
