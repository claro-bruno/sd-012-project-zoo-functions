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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  const speciesArray = ids.map((id) => species.find((specie) => specie.id === id));
  return speciesArray;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const minAge = findAnimal.residents.every((resident) => resident.age >= age);
  return minAge;
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  const employerName = employees.find((employer) => {
    const findName = employer.firstName === employeeName || employer.lastName === employeeName;
    return findName;
  });
  return employerName;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployer = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployer;
}

function isManager(id) {
  const manager = employees.some((employer) => employer.managers.find((any) => any === id));

  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employer = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employer);
}

function countAnimals(specieAnimal) {
  if (typeof specieAnimal === 'undefined') {
    const animals = {};
    species.forEach((specie) => { animals[specie.name] = specie.residents.length; });
    return animals;
  }
  const animalsFind = species.find((specie) => specie.name === specieAnimal).residents.length;
  return animalsFind;
}
function calculateEntry(entrants) {
  if (typeof entrants === 'undefined') return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const priceAdult = Adult * prices.Adult;
  const priceSenior = Senior * prices.Senior;
  const priceChild = Child * prices.Child;
  const total = priceAdult + priceSenior + priceChild;

  return total;
}

calculateEntry();
/* function getAnimalMap(options) {
  // seu código aqui
} */

/* function getSchedule(dayName) {
  // seu código aqui
} */

/* function getOldestFromFirstSpecies(id) {
  // seu código aqui
} */

/* function increasePrices(percentage) {
  // seu código aqui
} */

/* function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  /*  getSchedule, */
  countAnimals,

  /*   getAnimalMap, */
  getSpeciesByIds,
  getEmployeeByName,
  /*   getEmployeeCoverage, */
  addEmployee,
  isManager,
  getAnimalsOlderThan,

  /*   getOldestFromFirstSpecies, */
  /*   increasePrices, */
  createEmployee,
};
