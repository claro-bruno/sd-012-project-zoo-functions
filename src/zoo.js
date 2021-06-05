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
const data = require('./data');

const arrayVazio = [];
const objetoVazio = {};

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return arrayVazio;
  }
  const [firstSpecie, secondSpecie] = ids;
  const specie1 = species.filter((specie) => specie.id === firstSpecie);
  const specie2 = species.filter((specie) => specie.id === secondSpecie);
  const allSpecies = [...specie1, ...specie2];
  return allSpecies;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const getSpecie = species.find((specie) => specie.name === animal);
  const isOlder = getSpecie.residents.every((resident) => age < resident.age);
  return isOlder;
}

// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return objetoVazio;
  }

  const n = employeeName;

  const getEmp = employees.find((employee) => employee.firstName === n || employee.lastName === n);
  return getEmp;
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

// console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  const getManager = employees.some((employee) => employee.managers.some((item) => item === id));
  return getManager;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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

function countAnimals(getSpecies) {
  if (getSpecies === undefined) {
    const result = {};
    const eachSpecie = species.map((specie) => {
      const nome = specie.name;
      const quantidade = specie.residents.length;
      result[`${nome}`] = quantidade;
      // console.log(result);
      return result;
    });
    return eachSpecie[0];
  }
  const specie = (nome) => species.find((thisSpecie) => thisSpecie.name === nome).residents.length;
  return specie(getSpecies);
}

// console.log(countAnimals('lions'));

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const entryPrices = prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPriceTotal = Adult * entryPrices.Adult;
  const seniorPriceTotal = Senior * entryPrices.Senior;
  const childPriceTotal = Child * entryPrices.Child;

  return adultPriceTotal + seniorPriceTotal + childPriceTotal;
}

// console.log(calculateEntry({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

// function getAnimalMap(options) {

// }

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

// console.log(getSchedule('Tuesday'));

function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id);
  const firstSpecie = species.find((specie) => specie.id === person.responsibleFor[0]);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldest[0]);
}

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) {
  const increase = (percentage / 100) + 1;
  const newPrices = prices;
  newPrices.Adult = Math.round((newPrices.Adult * increase) * 100) / 100;
  newPrices.Senior = Math.round((newPrices.Senior * increase) * 100) / 100;
  newPrices.Child = Math.round((newPrices.Child * increase) * 100) / 100;
  return newPrices;
}

// console.log(increasePrices(50));

function getEmployeeCoverage(idOrName) {
  const allResults = {};
  employees.forEach((employee) => {
    const { firstName, lastName } = employee;
    const idSpecies = employee.responsibleFor.map((id) => species.find((name) => name.id === id));
    const specieList = [];
    idSpecies.forEach((specie) => specieList.push(specie.name));
    allResults[`${firstName} ${lastName}`] = specieList;
  });
  if (idOrName === undefined) return allResults;
  const srchEmp = employees.find((emp) => Object.values(emp).find((info) => info === idOrName));
  const { firstName, lastName } = srchEmp;
  const idSpecies = srchEmp.responsibleFor.map((id) => species.find((name) => name.id === id));
  // const [first, second] = nameSpecies;
  const result = {};
  const specieList = [];
  idSpecies.forEach((specie) => specieList.push(specie.name));
  result[`${firstName} ${lastName}`] = specieList;
  return result;
}

// console.log(getEmployeeCoverage('Bethea'));

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
