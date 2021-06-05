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

const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    const emptyVect = [];
    return emptyVect;
  }
  const allSpecies = ids.map((id) => species.find((specie) => specie.id === id));
  return allSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const getSpecie = species.find((specie) => specie.name === animal);
  const isOlder = getSpecie.residents.every((resident) => age < resident.age);
  return isOlder;
}


function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const emptyObject = {};
    return emptyObject;
  }

  const n = employeeName;

  const getEmp = employees.find((employee) => employee.firstName === n || employee.lastName === n);
  return getEmp;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const getAdm = employees.some((employee) => employee.managers.some((item) => item === id));
  return getAdm;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
    const newEmployee = () => ({
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    });
    data.employees.push(newEmployee());
    return employees;
  }
}

function countAnimals(getSpecies) {
  if (getSpecies === undefined) {
    const result = {};
    const eachSpecie = species.map((specie) => {
      const nome = specie.name;
      const quantidade = specie.residents.length;
      result[`${nome}`] = quantidade;
      return result;
      });
      return eachSpecie[0];
    }
    const specie = (nome) => species.find((thisSpecie) => thisSpecie.name === nome).residents.length;
    return specie(getSpecies);
  }

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const entryPrices = prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPriceTotal = Adult * entryPrices.Adult;
  const seniorPriceTotal = Senior * entryPrices.Senior;
  const childPriceTotal = Child * entryPrices.Child;
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
