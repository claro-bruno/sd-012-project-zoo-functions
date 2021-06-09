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
  if (!ids.length) return [];
  return (
    species.filter((specie) => (
      ids.some((id) => specie.id === id)
    ))
  );
}

function getAnimalsOlderThan(animal, age) {
  return (
    species.find((specie) => (
      specie.name === animal
    )).residents.every((resident) => (
      resident.age >= age
    ))
  );
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return (
    employees.filter((employee) => (
      employee.firstName === employeeName || employee.lastName === employeeName
    ))[0]
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return (
    employees.some((employee) => (
      employee.managers.some((manager) => (
        manager === id
      ))
    ))
  );
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesTeste) {
  if (!speciesTeste) {
    const animal = {};
    species.forEach(({ name, residents }) => {
      animal[name] = residents.length;
    });
    return animal;
  }
  return species.find((specie) => (
    specie.name === speciesTeste
  )).residents.length;
}

function calculateEntry(entrants = {}) {
  if (entrants === {}) return 0;
  return (
    Object.keys(entrants).reduce((acc, people) => (
      acc + prices[people] * entrants[people]
    ), 0)
  );
}

function getAnimalMap(options) {
  const obj = {};
  if (!options) {
    species.forEach((specie) => {
      obj[specie.location] = [];
    });
    species.forEach((specie) => {
      obj[specie.location].push(specie.name);
    });
    return obj;
  }
}

function verifySchedule(day, open, close) {
  if (!open || !close) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
}

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    Object.entries(hours).forEach(([day, { open, close }]) => {
      schedule[day] = verifySchedule(day, open, close);
    });
    return schedule;
  }
  schedule[dayName] = verifySchedule(dayName, hours[dayName].open, hours[dayName].close);
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  return percentage;
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
