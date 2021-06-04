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

// Iniciando o projeto
const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((specie) => ids.find((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return data.employees.find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  }
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers
    .some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  // seu código aqui
  if (speciesName) {
    return data.species.find(({ name }) => name === speciesName).residents.length;
  }
  // O código a seguir foi retirado de: https://vmarchesin.medium.com/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  return data.species.reduce((acc, specie) => ({
    ...acc, [specie.name]: specie.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  // seu código aqui
  const prices = data.prices;
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  }
  return 0;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    const { open, close } = data.hours[day];
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
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
