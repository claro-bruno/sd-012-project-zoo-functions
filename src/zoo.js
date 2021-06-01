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
  const findSpecie = (id) => data.species.find((specie) => id === specie.id);
  const speciesSelected = ids.map(findSpecie);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => animal === specie.name);
  const checkEachResident = (resident) => resident.age > age;
  const checkIfOlderThan = findSpecie.residents.every(checkEachResident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
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
  const verifyById = (employeeId) => employeeId === id;
  const checkManagers = ({ managers }) => managers.some(verifyById);
  const resultOfCheck = data.employees.some(checkManagers);
  return resultOfCheck;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const reduceSpecie = (acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    };
    const speciesObj = data.species.reduce(reduceSpecie, {});
    return speciesObj;
  }
  const findSpecie = data.species.filter(({ name }) => name === specie);
  const reduceToSpecieCount = (acc, { residents }) => acc + residents.length;
  const specieCount = findSpecie.reduce(reduceToSpecieCount, 0);
  return specieCount;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: numberOfAdults = 0, Child: numberOfChildren = 0,
    Senior: numberOfSeniors = 0 } = entrants;
  const totalAdults = data.prices.Adult * numberOfAdults;
  const totalChildren = data.prices.Child * numberOfChildren;
  const totalSeniors = data.prices.Senior * numberOfSeniors;
  const totalPrice = totalAdults + totalChildren + totalSeniors;
  return totalPrice;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
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
