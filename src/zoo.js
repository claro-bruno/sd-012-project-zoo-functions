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

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((id) => id.name === animal).residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((em) => em.firstName === employeeName || em.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(employee);
}

function countAnimals(animals) {
  const object = {};
  if (!animals) {
    species.forEach((specie) => { object[specie.name] = specie.residents.length; });
    return object;
  }
  return data.species.find((specie) => specie.name === animals).residents.length;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  return prices.Adult * Adult + prices.Child * Child + prices.Senior * Senior;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    schedule[day] = `Open from ${hours[day].open}am until ${hours[day].close % 12}pm`;
    if (day === 'Monday') schedule[day] = 'CLOSED';
  });
  if (dayName) return { [dayName]: schedule[dayName] };
  return schedule;
}

function responsible(id) {
  return employees.find((employee) => employee.id === id).responsibleFor[0];
}
function getOldestFromFirstSpecies(id) {
  const { name, sex, age } = species.find((specie) =>
    specie.id === responsible(id)).residents.reduce((acc, animal) =>
    (animal.age > acc.age ? animal : acc));
  return [name, sex, age];
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((price) => {
    prices[price] = Math.round(prices[price] * (1 + percentage / 100) * 100) / 100;
  });
}

const animalId = (id) => species.find((animal) => animal.id === id);
const arrayId = (animals) => animals.map((animal) => animalId(animal).name);

function emp(id) {
  return employees.find((employee) => employee.id === id)
  || employees.find((employee) => employee.firstName === id)
  || employees.find((employee) => employee.lastName === id);
}

function getEmployeeCoverage(idOrName) {
  const object = {};
  employees.forEach((employee) => {
    const key = `${employee.firstName} ${employee.lastName}`;
    object[key] = arrayId(employee.responsibleFor);
  });
  if (idOrName) {
    const newKey = `${emp(idOrName).firstName} ${emp(idOrName).lastName}`;
    return { [newKey]: object[newKey] };
  }
  return object;
}
console.log(getEmployeeCoverage('Nigel'));

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
