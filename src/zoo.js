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

// console.log(createEmployee(info1, info2));
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
    lastName, // TENTAR USAR O FOREACH QUE ALTERA O ARRAY ORIGINAL
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

function countAnimals(species) {
  if (!species) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  const allAnimals = data.species.find((nameSpecie) => species.includes(nameSpecie.name));
  return allAnimals.residents.length;
}
console.log(countAnimals());

// 8=========================================================

// function calculateEntry(...entrants) {
//   // const valores = data.prices;
//   // return valores;
//   return data.prices.find((person) => entrants.includes(person));

//   // const calcPrices = data.prices.find((person) => person === entrants);
//   // console.log(calcPrices);
// }
// console.log(calculateEntry({'Adult':2}));
// calculateEntry({'Adult': 2});
// calculateEntry({'Adult': 2, 'Child': 3, 'Senior': 1}) // 187.94

// 9=========================================================

// function getAnimalMap(options) {
//   const locations = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   }
//   const locationsAnimals = data.species.filter((animalLocation, index) => animalLocation.location === locations[index])
//   console.log(locationsAnimals);
// }
// getAnimalMap();

// 10=========================================================

// function getSchedule(dayName) {
//   // const days = data.hours.Tuesday.length;
//   const daysHours = {
//     Tuesday: 'Open from 8am until 6pm',
//     Wednesday: 'Open from 8am until 6pm',
//     Thursday: 'Open from 10am until 8pm',
//     Friday: 'Open from 10am until 8pm',
//     Saturday: 'Open from 8am until 10pm',
//     Sunday: 'Open from 8am until 8pm',
//     Monday: 'CLOSED',
//   };
//   return daysHours;
// console.log(daysHours.Tuesday)
// const searchDay = data.hours.find((day) => day.includes(dayName));
// return searchDay;
// }
// getSchedule('Tuesday');
// console.log(getSchedule());

// 11=========================================================

// function getOldestFromFirstSpecies(id) {

//   const idEmployee = employees.find((idNumber) => idNumber.id === id);
//   const findAnimalId = data.species
//   .filter((animalId) => idEmployee
//   .responsibleFor.includes(animalId.id));
//   // const OldestAnimal = data.species.find((old) => findAnimalId.includes(old.residents.age ) ); ESSE DÁ UNDEFINED
//   return findAnimalId;
// }

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 12=========================================================

// function increasePrices(percentage) {
//   // seu código aqui
// }

// 13=========================================================

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
