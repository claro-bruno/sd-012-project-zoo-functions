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

function getSpeciesByIds(...ids) {
  const filterSpecies = species.filter((specie) => ids.some((id) => specie.id === id));
  return filterSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const minAge = findAnimal.residents.every((animals) => animals.age >= age);
  return minAge;
}

function getEmployeeByName(employeeName = {}) {
  const findFirstName = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return findFirstName || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  const CreateNewEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return CreateNewEmployee;
}

function isManager(id) {
  const findIdManager = employees.find((employee) => employee.id === id);
  const collaborator = employees.filter((employee) => employee.managers.includes(findIdManager.id));
  if (collaborator.length > 1) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animals) {
  if (!animals) {
    const newObject = {};
    species.forEach(({ name, residents }) => { newObject[name] = residents.length; });
    return newObject;
  }
  const animal = species.find((specie) => specie.name === animals).residents.length;
  return animal;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;  
  }
  const { Adult = 0, Child = 0, Senior = 0,} = entrants
  const { Adult: adultPrice, Child: chilPrice, Senior: seniorPrice,} = prices;
  const someAllEntry = (Adult * adultPrice + Child * chilPrice + Senior * seniorPrice);
  return someAllEntry;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
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
