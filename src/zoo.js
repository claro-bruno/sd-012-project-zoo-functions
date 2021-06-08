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
  const allAnimals = species.filter((specie, index) => specie.id === ids[index]);
  return allAnimals;
}

function getAnimalsOlderThan(animalName, age) {
  const listAnimal = species.find((animal) => animal.name === animalName);
  return listAnimal.residents.every((individual) => individual.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find((individual) => {
      const { firstName, lastName } = individual;
      return firstName === employeeName || lastName === employeeName;
    });
  }
  return {};
}
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
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

function countAnimals(nameSpecies) {
  if (nameSpecies) {
    const animalFind = species.find((animal) => animal.name === nameSpecies);
    return animalFind.residents.length;
  }
  const animalInfo = {};
  species.forEach((animal) => {
    animalInfo[animal.name] = animal.residents.length;
  });
  return animalInfo;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return ((Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child));
}

function getAnimalMap() {
  // seu código aqui (options)
}

function getSchedule() {
  // seu código aqui (dayName)
}

function getOldestFromFirstSpecies() {
  // seu código aqui (id)
}

function increasePrices(percentage) {
  const arrayKeys = Object.keys(data.prices);
  const converPercent = () => ((percentage / 100) + 1);
  arrayKeys.forEach((key) => {
    data.prices[key] = (Math.round(data.prices[key] * converPercent() * 100) / 100);
  });
}

function getEmployeeCoverage() {
  // seu código aqui (idOrName)
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
