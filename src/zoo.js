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
const {
  species
} = require('./data');
const {
  employees
} = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  //return ids.map((idAnimal) => species.find((animals) => idAnimal === animals.id));
  return ids.map((id)=> {
    return species.find((specie) => {
      return id === specie.id;
    })
  })
  console.log(getSpeciesByIds(ids))
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))

function getAnimalsOlderThan(animal, age) {
  return species
    .find(({
      name
    }) => name === animal).residents.every((animalonly) => animalonly.age >= age);
}
// referencia  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function getEmployeeByName(name) {
  if (!name) return {};
  return employees.find((index) => name === index.firstName || name === index.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  const newobject = {...personalInfo, ...associatedWith}
  return newobject;
  console.log(newobject)
}
const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992'
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  ]
};
console.log(createEmployee(personalInfo,associatedWith))
/* function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
*/
module.exports = {
  //  calculateEntry,
  //  getSchedule,
  //  countAnimals,
  //  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  //  getEmployeeCoverage,
  //  addEmployee,
  //  isManager,
  getAnimalsOlderThan,
  //  getOldestFromFirstSpecies,
  //  increasePrices,
  createEmployee,
};
