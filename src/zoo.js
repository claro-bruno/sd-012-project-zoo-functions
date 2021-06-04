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
  return ids.map((idAnimal) => data.species.find((animals) => idAnimal === animals.id));
}
// console.log(getSpeciesByIds('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

function getAnimalsOlderThan(animal, age) {
  // Every, so tem que descobrir como :) OK
  // Primeiro chegar ao nome da espécie OK
  // Depois chegar ao nome dos animais Ok
  // Depois chegar a idade dos animais  OK
  // Verificação de idade OK
  const animals = data.species.find((animalList) => animalList.name === animal);
  return animals.residents.every((idades) => idades.age > age);
}
// console.log(getAnimalsOlderThan('elephants', 10));

function getEmployeeByName(employeeName) {
  // Probabily metod to utilize: find and map
  // Split the name
  // 1° Find the first name of the employees
  // 2° Find te last name of the employees
  if (!employeeName) return {};
  const breakName = employeeName.split(' ');
  const firstName = breakName[0];
  const lastName = breakName[breakName.length - 1];
  const { employees } = data;
  return employees.find((names) => names.firstName === firstName || names.lastName === lastName);
}
// console.log(getEmployeeByName('Sthepanie Strauss'));

// const newEmployee = {
//   id: '0e7b460e-acf4-4e17-b3cb-ea472512pz83',
//   firstName: 'Luiz',
//   lastName: 'Henrique' };
// const responsabilities = {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ],
// };
function createEmployee(personalInfo, associatedWith) {
  // Recognize how use spread in the arguments
  // make the parameters
  // make a new object with 2 parameters
  return { ...personalInfo, ...associatedWith };
}
// console.log(createEmployee(newEmployee, responsabilities));

function isManager(id) {
  const employee = data.employees.find((empregado) => empregado.id === id);
  return employee.managers.length === 1;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  // probabily to use reduce and maybe use a filter
  // find the animals OK
  // make a object with the name of animals, and the quantity of animals
  if (!species) {
    return data.species.reduce((acc, item) => ({ ...acc, [item.name]: item.residents.length }), {});
  }
  return data.species.find((animal) => animal.name === species).residents.length;
}
// console.log(countAnimals('lions'));

function calculateEntry(entrants) {
  // Test the parameters
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const ageVisitants = Object.keys(entrants);
  return ageVisitants.reduce((acc, item) => {
    const finalValue = acc + entrants[item] * data.prices[item];
    return finalValue;
  }, 0);
}
// console.log(calculateEntry({ Adult: 2, Child: 3, Senior: 1 }));

function getAnimalMap() {
  // seu código aqui
  // options
}

function getSchedule() {
  // seu código aqui
  // dayName
}

function getOldestFromFirstSpecies(id) {
  // find the employee OK
  // find the first curated specie of this employee OK
  // find the older animal of this specie OK
  // return sex, name and age of this older animal
  const employeesList = data.employees.map((functionary) => functionary);
  const employee = employeesList.find((functionaryList) => functionaryList.id === id);
  const idCuratedSpecie = employee.responsibleFor[0];
  const species = data.species.map((animals) => animals);
  const curatedSpecie = species.find((animalsList) => animalsList.id === idCuratedSpecie);
  const curatedSpecieResidents = curatedSpecie.residents;
  const oldAgeInSpecieResidents = Math.max(...curatedSpecieResidents.map((o) => o.age));
  const olderResident = curatedSpecieResidents.find((old) => old.age === oldAgeInSpecieResidents);
  const organizeOlderResident = Object.values(olderResident);
  return organizeOlderResident;
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices() {
  // seu código aqui
  // percentage
}

function getEmployeeCoverage() {
  // seu código aqui
  // idOrName
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
