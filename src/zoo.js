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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animals = species.find((specie) => specie.name === animal);
  return animals.residents.every((minimun) => minimun.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const emp = ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName;
  return employees.find(emp);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(createEmployee({ id, firstName, lastName },
    { managers, responsibleFor }));
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

function calculateEntry(...entrants) {
  if (!entrants.length || Object.keys(entrants).length > 1) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants[0];
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}

// function getAnimalMap(options) {
// }

function getSchedule(dayName) {
  const { hours } = data;
  const days = Object.keys(hours);
  const obj2return = {};
  if (!dayName) {
    days.forEach((aux) => {
      obj2return[aux] = `Open from ${hours[aux].open}am until ${hours[aux].close - 12}pm`;
    });
    obj2return.Monday = 'CLOSED';
    return obj2return;
  }
  const day = days.findIndex((aux) => dayName === aux);
  if (dayName !== 'Monday') {
    obj2return[days[day]] = `Open from ${hours[days[day]].open}am until ${hours[days[day]]
      .close - 12}pm`;
  } else {
    obj2return.Monday = 'CLOSED';
  }
  return obj2return;
}

function getOldestFromFirstSpecies(id) {
  const specId = data.employees.find((aux) => aux.id === id).responsibleFor[0];
  const animal = data.species.find((aux) => aux.id === specId);
  const arrayAnimal = animal.residents;
  const localiza = arrayAnimal.reduce((acc, value) => (acc.age >= value.age ? acc : value));
  return [localiza.name, localiza.sex, localiza.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  const arrayPrices = Object.keys(prices);
  arrayPrices.forEach((aux) => {
    console.log(prices);
    prices[aux] = Math.round((prices[aux] * (1 + (percentage / 100))) * 100) / 100;
    console.log(prices);
  });
  return prices;
}

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
  increasePrices,
  createEmployee,
};
