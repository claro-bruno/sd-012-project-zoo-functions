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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((itemId) => data.species.find((animal) => animal.id === itemId));
}

function getAnimalsOlderThan(animal, age) {
  const animalSel = data.species.find((item) => item.name === animal);
  return animalSel.residents.every((individuo) => individuo.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((em) => em.lastName === employeeName || em.firstName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const personal = {
    id: `${personalInfo.id}`,
    firstName: `${personalInfo.firstName}`,
    lastName: `${personalInfo.lastName}`,
  };
  const associated = {
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return { ...personal, ...associated };
}

function isManager(id) {
  const managerList = data.employees.map((empl) => empl.managers).flat();
  return managerList.some((item) => item === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(specie) {
  const animalObj = {};
  if (!specie) {
    data.species.forEach((animal) => {
      animalObj[animal.name] = animal.residents.length;
    });
    return animalObj;
  }
  const findName = data.species.find((animal) => animal.name === specie);
  return findName.residents.length;
}

const calculaValor = (Adult = 0, Senior = 0, Child = 0) =>
  Adult * 49.99 + Senior * 24.99 + Child * 20.99;

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calculaValor(entrants.Adult, entrants.Senior, entrants.Child);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getAnimalId = getEmployee.responsibleFor[0];
  const selectedAnimal = data.species.find((animal) => animal.id === getAnimalId);
  const maiorIdade = selectedAnimal.residents.map((anim) => anim.age)
    .sort((a, b) => (b - a))[0];
  const oldestFromFirst = selectedAnimal.residents
    .find((individuo) => individuo.age === maiorIdade);
  return Object.values(oldestFromFirst);
}

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
  getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
