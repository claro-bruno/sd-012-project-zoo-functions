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

const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const newArr = [];
  for (let index = 0; index < ids.length; index += 1) {
    const filtra = species.find((specie) => specie.id === ids[index]);
    newArr.push(filtra);
  }
  return newArr;
}

const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
console.log(getSpeciesByIds(lionId))

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const newAnimal = species.filter((specie) => specie.name === animal );
  const allAnimals = newAnimal[0].residents;
  return allAnimals.every((animal) => animal.age >= age)
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined || employeeName === null) {
     return {};
  }
  return employees.find((person) => person.firstName === employeeName || person.lastName === employeeName );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
     ...personalInfo,
     ...associatedWith
  };

  return newEmployee
}

function isManager(id) {
  // seu código aqui
  return employees.some((person) => person.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
     id,
     firstName,
     lastName,
     managers,
     responsibleFor
  };
  employees.push(newEmployee);
}

function countAnimals(especie) {
  // seu código aqui
  if (especie === undefined || especie === null) {
     const newObj = {};
     species.forEach((item) => {
      newObj[item.name] = item.residents.length
   });
   return newObj;
  }
  const newAnimal = species.find((item) => item.name === especie);
  return newAnimal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === null || entrants === undefined || entrants === {}) {
     return 0;
  };
  if (entrants.Adult === undefined) {
     entrants.Adult = 0;
  };
  if (entrants.Senior === undefined) {
   entrants.Senior = 0;
   };
   if (entrants.Child === undefined) {
      entrants.Child = 0;
   };
  const totalPrice = entrants.Adult * prices.Adult + entrants.Senior * prices.Senior + entrants.Child * prices.Child;
  return totalPrice;
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
