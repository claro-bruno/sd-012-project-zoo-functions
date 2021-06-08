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
  const animals = data.species.filter((specie, index) => specie.id === ids[index]);
  return animals;
}

function getAnimalsOlderThan(animal, age) {
  const Species = data.species.find((specie) => animal === specie.name);
  const Resident = (resident) => resident.age >= age;
  const checkIfOlderThan = Species.residents.every(Resident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const peopleEmployees = data.employees.find((people) =>
    employeeName === people.firstName || employeeName === people.lastName);
  return peopleEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const employees = data.employees.find((employee) => employee.id === id);
  return employees.managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addName = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(addName);
}

function countAnimals(species) {
  if (!species) {
    const returnArray = {};
    data.species.forEach((num) => {
      returnArray[num.name] = num.residents.length;
    });
    return returnArray;
  }
  const animal = data.species.find((num) =>
    num.name === species);
  return animal.residents.length;
}

const calculateEntry = (entrants) => {
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult: adulto = 0, Senior: idoso = 0, Child: crianca = 0 } = entrants;
  const totalValue = ((adulto * data.prices.Adult) + (idoso * data.prices.Senior)
    + (crianca * data.prices.Child));
  return totalValue;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return days;
  return { [dayName]: days[dayName] };
}

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
