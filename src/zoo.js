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

const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(ids) {
  // seu código aqui
  const speciesFound = data.species.filter((specie) => ids.some((id) => specie.id === id));
  return speciesFound;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((animalList) => animalList.name === animal);
  return animals.residents.every((ages) => ages.age > age);
}

function getEmployeeByName(employeeName) {
// seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(((employee) => employee.firstName === employeeName
|| employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
// seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
// seu código aqui
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
}

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
// seu código aqui
function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
// seu código aqui
  if (!species) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
// seu código aqui
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (
    Adult * data.prices.Adult
    + Child * data.prices.Child
    + Senior * data.prices.Senior
  );
}

function getAnimalMap() {
// seu código aqui
}

function getSchedule(dayName) {
// seu código aqui
  if (!dayName) {
    const array = Object.entries(data.hours);
    const reduceEntry = (acc, entrie) => {
      const { open, close } = entrie[1];
      acc[entrie[0]] = `Open from ${open}am until ${close - 12}pm`;
      if (entrie[0] === 'Monday') acc[entrie[0]] = 'CLOSED';
      return acc;
    };
    const finalSchedule = array.reduce(reduceEntry, {});
    return finalSchedule;
  }
  const { open, close } = data.hours[dayName];
  const daySchedule = { [dayName]: `Open from ${open}am until ${close - 12}pm` };
  if (dayName === 'Monday') daySchedule[dayName] = 'CLOSED';
  return daySchedule;
}

function getOldestFromFirstSpecies(id) {
// seu código aqui
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = data.species.find((specie) => specie.id === specieId);
  const highestAge = residents.reduce((highest, resident) =>
    ((resident.age > highest) ? resident.age : highest), 0);
  const oldestResident = Object.values(residents.find((resident) =>
    resident.age === highestAge));
  return oldestResident;
}

function increasePrices(percentage) {
// seu código aqui
  const keys = Object.keys(data.prices);
  keys.forEach((key) => {
    data.prices[key] = Math.round(data.prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
// seu código aqui
if (!idOrName) return formatEmployeeCoverage(employees);

  const filteredEmployees = employees.filter((employee) => employee.firstName === idOrName
    || employee.lastName === idOrName
    || employee.id === idOrName);
  return formatEmployeeCoverage(filteredEmployees);
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
