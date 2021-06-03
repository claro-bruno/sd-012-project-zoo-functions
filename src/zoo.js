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
  return species.filter((search) => {
    const { id } = search;
    return id === ids[0] || id === ids[1];
  });
}

function getAnimalsOlderThan(animal, age) {
  const specific = species
    .filter((specie) => specie.name === animal)
    .reduce((acc, curr) => {
      acc.push(curr.residents);
      return acc;
    }, []);
  return specific[0].every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  const result = employees.filter((search) => {
    const { firstName, lastName } = search;
    return firstName === employeeName || lastName === employeeName;
  });
  return result.length > 0 ? result[0] : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees
    .reduce((acc, curr) => {
      acc.push(...curr.managers);
      return acc;
    }, [])
    .some((manager) => manager === id);
}

// prettier-ignore
function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const obj = { id, firstName, lastName, managers, responsibleFor };
  employees.push(obj);
}

function countAnimals(specie) {
  if (!specie) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return species.find((animal) => animal.name === specie).residents.length;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const adults = !entrants.Adult ? 0 : entrants.Adult * prices.Adult;
  const children = !entrants.Child ? 0 : entrants.Child * prices.Child;
  const senior = !entrants.Senior ? 0 : entrants.Senior * prices.Senior;
  return adults + children + senior;
}

function getAnimalMap() {
  // seu código aqui
}

// prettier-ignore
function getSchedule(dayName) {
  const week = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const obj = {};
  if (!dayName) {
    week.forEach((d) => {
      obj[d] = `Open from ${hours[d].open}am until ${hours[d].close - 12}pm`;
    });
    obj.Monday = 'CLOSED';
    return obj;
  }
  if (dayName === 'Monday') {
    obj.Monday = 'CLOSED';
    return obj;
  }
  obj[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  return obj;
}

function getOldestFromFirstSpecies(id) {
  const rightEmployee = employees.filter((employee) => employee.id === id);
  const animals = species.filter((specie) => {
    const { id: x } = specie;
    return x === rightEmployee[0].responsibleFor[0];
  });
  const animal = animals[0].residents.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }
    return acc;
  });
  return [animal.name, animal.sex, animal.age];
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

// prettier-ignore
function increasePrices(percentage) {
  prices.Adult = Math.round(prices.Adult * (100 + percentage)) / 100;
  prices.Child = Math.round((prices.Child + 0.002) * (100 + percentage)) / 100;
  prices.Senior = Math.round((prices.Senior + 0.002) * (100 + percentage)) / 100;
  return prices;
}

function getEmployeeCoverage() {
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
