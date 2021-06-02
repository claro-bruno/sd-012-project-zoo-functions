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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((specie, index) =>
    specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.filter((specie) => specie.name === animal);
  return animals[0].residents.every((animal2) => animal2.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const worker = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return worker;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  const manager = employees.some((employee, index) => employee.managers[index] === id);
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(speciesPar) {
  if (!speciesPar) {
    const allAnimals = {};
    data.species.forEach((animal) => {
      allAnimals[animal.name] = animal.residents.length;
      return true;
    });
    return allAnimals;
  }
  return data.species.find((animal) => animal.name === speciesPar).residents.length;
}

function calculateEntry(...entrants) {
  if (entrants.length === 0) {
    return 0;
  }

  if (Object.keys(...entrants).length === 0) {
    return 0;
  }

  const [people] = entrants;

  const { Adult: adultNum = 0, Child: childrenNum = 0, Senior: seniorNum = 0 } = people;

  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;

  return adultNum * adultPrice + childrenNum * childPrice + seniorNum * seniorPrice;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {

//   // const schedule = {
//   //   'Tuesday': 'Open from 8am until 6pm',
//   //   'Wednesday': 'Open from 8am until 6pm',
//   //   'Thursday': 'Open from 10am until 8pm',
//   //   'Friday': 'Open from 10am until 8pm',
//   //   'Saturday': 'Open from 8am until 10pm',
//   //   'Sunday': 'Open from 8am until 8pm',
//   //   'Monday': 'CLOSED'
//   // }

//   // if(!dayName) {
//   //   return schedule;
//   // }

//   // return 

//   // const fullSchedule = data.hours;

//   // console.log(fullSchedule, 'datas');

//   // const {Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday} = fullSchedule;

//   // console.log(Tuesday, 'horario');



//   // if(dayName = 0){
//   //   return 
//   // }

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
