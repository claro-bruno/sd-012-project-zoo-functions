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

// console.log(data.species[0].id)

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const arraySpecies = ids.map((specieId) => data.species.find((specie) => specie.id === specieId));
  return arraySpecies;
}
// tentei usar o filter mas ele retorna uma array então fica [[{ ... }]]

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => specie.name === animal);
  const animalOlderThan = findSpecie.residents.every((resident) => resident.age > age);
  return animalOlderThan;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const firstName = data.employees.find((employee) => employee.firstName === employeeName);
  const lastName = data.employees.find((employee) => employee.lastName === employeeName);
  if (firstName !== undefined) return firstName;
  return lastName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employeesManagers = data.employees.find((employee) => employee.managers.includes(id));
  if (employeesManagers) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployees = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return newEmployees;
}

function countAnimals(species) {
  if (species === undefined) {
    const allAnimals = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const especificAnimal = data.species.find((specie) => specie.name === species);
  return especificAnimal.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

function getAnimalMap(options) {
  return options;
}

function getSchedule(dayName) {
  const week = data.hours;
  const arrayWeek = Object.entries(week);
  if (dayName === undefined) {
    const schedule = arrayWeek.reduce((acc, curr) => {
      acc[curr[0]] = `Open from ${curr[1].open}am until ${curr[1].close - 12}pm`;
      if (curr[0] === 'Monday') {
        acc[curr[0]] = 'CLOSED';
      }
      return acc;
    }, {});
    return schedule;
  }
  const days = arrayWeek.find((day) => day[0] === dayName);
  if (days[0] === 'Monday') {
    return { [days[0]]: 'CLOSED' };
  }
  return { [days[0]]: `Open from ${days[1].open}am until ${days[1].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  const employeeFromId = data.employees.find((employee) => employee.id === id);
  const responsibleForThis = employeeFromId.responsibleFor;
  const speciesOfId = (...responsibleFor) => data.species
    .filter((specie) => responsibleFor.includes(specie.id));
  const residentsSpecies = speciesOfId(...responsibleForThis).reduce((acc, curr) => {
    const { residents } = curr;
    acc.push(...residents);
    return acc;
  }, []);
  residentsSpecies.sort((a, b) => b.age - a.age);
  return Object.values(residentsSpecies[0]);
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) { // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: Math.round(Adult * ((100 + percentage) / 100) * 100) / 100,
    Senior: Math.round(Senior * ((100 + percentage) / 100) * 100) / 100,
    Child: Math.round(Child * ((100 + percentage) / 100) * 100) / 100,
  };
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  return idOrName;
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
