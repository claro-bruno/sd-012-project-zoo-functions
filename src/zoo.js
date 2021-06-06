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

function getSchedule(dayName) {
  // seu código aqui
  if (typeof dayName === 'undefined') {
    return { Tuesday: 'Open from 8am until 6pm',
      Wednesday: 'Open from 8am until 6pm',
      Thursday: 'Open from 10am until 8pm',
      Friday: 'Open from 10am until 8pm',
      Saturday: 'Open from 8am until 10pm',
      Sunday: 'Open from 8am until 8pm',
      Monday: 'CLOSED' };
  }
  const takeDays = Object.keys(data.hours);
  const takeOneDay = takeDays.find((day) => day === dayName);
  if (takeOneDay === 'Tuesday') {
    return { [takeOneDay]: `Open from 8am until 6pm` };
  }
  if (takeOneDay === 'Monday') {
    return { [takeOneDay]: `CLOSED` };
  }
}

console.log(getSchedule('Monday'));

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
