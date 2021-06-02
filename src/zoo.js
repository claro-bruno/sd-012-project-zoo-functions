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
  // seu código aqui
  if (ids.length === 0) {
    return ids;
  }
  const species = [];
  ids.forEach((idFor) => {
    const array = data.species.filter(({ id }) => idFor === id);
    species.push(array[0]);
  });
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = data.species.find((specie) => specie.name === animal);
  const minimalAge = getAnimal.residents.every((resident) => resident.age >= age);
  return minimalAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employee = data.employees.find((employeeFind) => employeeFind.firstName === employeeName
  || employeeFind.lastName === employeeName);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmplyee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmplyee;
}

function isManager(id) {
  // seu código aqui
  const bool = data.employees.some((employee) => employee.managers.some((manID) => manID === id));
  return bool;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    const animals = {};
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }
  const animal = data.species.find((specie) => specie.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const age = Object.keys(entrants);
  const people = Object.values(entrants);
  let result = 0;
  age.forEach((key, index) => {
    result += data.prices[key] * people[index];
  });
  return result;
}

function getAnimalMap(/* options */) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const days = Object.keys(data.hours);
  const daysValues = Object.values(data.hours);
  if (dayName === undefined) {
    const week = {};        
    days.forEach((day, index) => {
      if (daysValues[index].open === 0) {
        week[day] = `CLOSED`;
      } else {
        week[day] = `Open from ${daysValues[index].open}am until ${daysValues[index].close - 12}pm`;
      }
    });
    return week;
  }
  const dayObject = {};
  let dayIndex = 0;
  const dayGeted = days.find((day, index) => {
    if (day === dayName) {
      dayIndex = index;
      return day;
    }
  });
  if (daysValues[dayIndex].open === 0) {
    dayObject[dayGeted] = `CLOSED`;
  } else {
    dayObject[dayGeted] = `Open from ${daysValues[dayIndex].open}am until ${daysValues[dayIndex].close - 12}pm`;
  }
  return dayObject;
}
console.log(getSchedule('Tuesday'));
function getOldestFromFirstSpecies(/* id */) {
  // seu código aqui
}

function increasePrices(/* percentage */) {
  // seu código aqui
}

function getEmployeeCoverage(/* idOrName */) {
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
