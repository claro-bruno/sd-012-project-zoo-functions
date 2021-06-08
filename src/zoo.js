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
  if (ids.length === 0) return [];
  const specieFinder = (id) => data.species.find((specie) => id === specie.id);
  const selectSpecie = ids.map(specieFinder);
  return selectSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const specieFinder = data.species.find((specie) => animal === specie.name);
  const ageCompare = specieFinder.residents.every((resident) => resident.age > age);
  return ageCompare;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const getEmployee = data.employees.find(findEmployee);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (!species) {
    const reduceSpecie = (acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    };
    const speciesObj = data.species.reduce(reduceSpecie, {});
    return speciesObj;
  }
  const findSpecie = data.species.filter(({ name }) => name === species);
  const reduceToSpecieCount = (acc, { residents }) => acc + residents.length;
  const specieCount = findSpecie.reduce(reduceToSpecieCount, 0);
  return specieCount;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: numberOfAdults = 0, Child: numberOfChildren = 0,
    Senior: numberOfSeniors = 0 } = entrants;
  const resultAdults = data.prices.Adult * numberOfAdults;
  const resultChilds = data.prices.Child * numberOfChildren;
  const resultSeniors = data.prices.Senior * numberOfSeniors;
  const payment = resultAdults + resultChilds + resultSeniors;
  return payment;
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

/* function getSchedule(dayName) {
  if (!dayName) {
    const fullSchedule = {...data.hours};
    return fullSchedule;
  }
}
console.log(getSchedule()); */
function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const getFirstAnimal = findEmployee.responsibleFor[0];
  const findAnimal = data.species.find((specie) => specie.id === getFirstAnimal);
  const oldestAnimal = findAnimal.residents
    .sort((animal1, animal2) => animal2.age - animal1.age)[0];
  const { name, sex, age } = oldestAnimal;
  const oldestAnimalArray = [name, sex, age];
  return oldestAnimalArray;
}

/* function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

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
