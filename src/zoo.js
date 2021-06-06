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
// MEU TESTE AQUI
/*
const filteringSpecies = species
  .filter((specie) => specie.id === '0938aa23-f153-4937-9f88-4858b24d6bce');

console.log(filteringSpecies); */

// FUNÇÃO PARA O TESTE ACIMA

/*
function getSpeciesByIds(...ids) {
  // seu código aqui
  if (typeof ids === 'undefined') {
    return [];
  }

  const filteringSpecies = species.filter((specie) => specie.id === ids);
  return filteringSpecies;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); */

function getAnimalsOlderThan(animal, minAge) {
  // seu código aqui
  const findAnimls = data.species.find((specie) => specie.name === animal);
  return findAnimls.residents.every((resident) => resident.age >= minAge);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (typeof employeeName === 'undefined') {
    return {};
  }

  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign(personalInfo, associatedWith);
}

function isManager(ids) {
  // seu código aqui
  const takeId = data.employees.filter((employee) => employee.id === ids);
  return takeId
    .some((manager) => manager.managers.length === 1 || manager.managers.length === 0);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(oneSpecie) {
  // seu código aqui
  if (typeof oneSpecie === 'undefined') {
    const animals = {};

    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });

    return animals;
  }

  const takeAnimal = data.species
    .find((specie) => specie.name === oneSpecie);

  return takeAnimal.residents.length;
}

/* function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }

  const adult = 0;
  const child = 0;
  const senior = 0;

  return ;
} */

// function getAnimalMap(options) {
//   // seu código aqui
// }

const defaultHours = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function getSchedule(dayName) {
  // seu código aqui
  if (typeof dayName === 'undefined') {
    return defaultHours;
  }
  const takeDays = Object.keys(data.hours);
  const takeOneDay = takeDays.find((day) => day === dayName);
  const takeValues = Object.values(data.hours[takeOneDay]);
  if (dayName === 'Monday') {
    return { [takeOneDay]: 'CLOSED' };
  }
  let convertHour;
  switch (takeValues[1]) {
  case 18: convertHour = 6; break;
  case 20: convertHour = 8; break;
  // case 22: convertHour = 10; break;
  default: convertHour = 0;
  }
  return { [takeOneDay]: `Open from ${takeValues[0]}am until ${convertHour}pm` };
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
  // calculateEntry,
  getSchedule,
  countAnimals,
  //   getAnimalMap,
  //   getSpeciesByIds,
  getEmployeeByName,
  //   getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  //   getOldestFromFirstSpecies,
  //   increasePrices,
  createEmployee,
};
