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
  const workTime = Object.values(hours);
  const allResult = {};
  Object.keys(hours).map((day, index) => {
    const openTime = workTime[index].open;
    let closeTime = workTime[index].close;
    if (closeTime > 12) closeTime %= 12;
    allResult[`${day}`] = `Open from ${openTime}am until ${closeTime}pm`;
    if (workTime[index].open === 0) allResult[`${day}`] = 'CLOSED';
    return allResult;
  });
  if (dayName === undefined) return allResult;
  const result = {};
  const allDays = Object.entries(allResult);
  const myDay = allDays.find((day) => day[0] === dayName);
  const [day, message] = myDay;
  result[`${day}`] = message;
  return result;
}

function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldest[0]);
}

function increasePrices(percentage) {
  const increase = (percentage / 100) + 1;
  const newPrices = prices;
  newPrices.Adult = Math.round((newPrices.Adult * increase) * 100) / 100;
  newPrices.Senior = Math.round((newPrices.Senior * increase) * 100) / 100;
  newPrices.Child = Math.round((newPrices.Child * increase) * 100) / 100;
  return newPrices;
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
