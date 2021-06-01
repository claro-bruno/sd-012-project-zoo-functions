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

const { species, employees, prices } = data;

function getSpeciesByIds(...ids) {
  if (ids === '') {
    return [];
  }
  const filteredSpeciesById = species
    .filter((animals) => animals.id === ids[0] || animals.id === ids[1]);

  return filteredSpeciesById;
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = species.find((specie) => specie.name === animal);
  return animalSpecie.residents.every((animalResident) => animalResident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const filteredEmployeesByName = employees
    .find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);

  return filteredEmployeesByName;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);

  return employee;
}

function isManager(id) {
  const filteredEmployeesById = employees
    .some((employee) => employee.managers.includes(id));

  return filteredEmployeesById;
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

function countAnimals(species1) {
  if (!species1) {
    return species.reduce((acc, current) => {
      const { name, residents } = current;
      return { ...acc, [name]: residents.length };
    }, {});
  }

  return species.find((specie) => specie.name === species1).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

// function getAnimalMap(options) {
//   if (!options) {
//     return species.map((specie) => {
//       const { name, location } = specie;
//       return { [location]: name };
//     });
//   }
// }

// console.log(getAnimalMap());

function getSchedule(dayName) {
  const availableHours = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) {
    return availableHours;
  }
  return { [dayName]: availableHours[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees
    .find((employee) => employee.id === id).responsibleFor[0];
  const residentsFilter = species.find((specie) => specie.id === firstSpecieId).residents;
  const oldestSpecie = residentsFilter.sort((a, b) => b.age - a.age)[0];

  return Object.values(oldestSpecie);
}

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
  getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
