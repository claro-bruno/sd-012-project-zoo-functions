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
  // seu código aqui
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.every((anemal) => anemal.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const trabalhador = (e) => e.firstName === employeeName || e.lastName === employeeName;
  return employees.find(trabalhador);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  const managerIds = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
    'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

  return managerIds.some((managerId) => managerId === id);
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  //  seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  });
  return employees;
}

function countAnimals(animals) {
  // seu código aqui
  if (!animals) {
    const speciesArray = species.map((s) => `"${s.name}": ${s.residents.length}`).sort();
    return JSON.parse(`{${speciesArray.join(', ')}}`);
  } return species.find((specie) => specie.name === animals).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  let entrantsArray = [entrants.Adult, entrants.Child, entrants.Senior];
  entrantsArray = entrantsArray.map((entrant) => ((entrant === undefined) ? 0 : entrant));
  return (prices.Adult * entrantsArray[0]) + (prices.Child * entrantsArray[1])
   + (prices.Senior * entrantsArray[2]);
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

/* function getSchedule(dayName) {
  // seu código aqui
  const weekDays = Object.keys(hours)
}
function getOldestFromFirstSpecies(id) {
  // seu código aqui
} */

function increasePrices(percentage) {
  // seu código aqui
  prices.Adult += Math.round((prices.Adult * percentage) / 100, 2);
  prices.Child += Math.round((prices.Child * percentage) / 100, 2);
  prices.Senior += Math.round((prices.Senior * percentage) / 100, 2);
  return prices;
}
/* function getEmployeeCoverage(idOrName) {
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
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
