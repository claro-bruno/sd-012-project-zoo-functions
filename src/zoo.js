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
  return species.filter((specie) => ids.find((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName) {
    return employees.find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers
    .some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  // seu código aqui
  if (speciesName) {
    return species.find(({ name }) => name === speciesName).residents.length;
  }
  // O código a seguir foi retirado de: https://vmarchesin.medium.com/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  return species.reduce((acc, specie) => ({
    ...acc, [specie.name]: specie.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  // seu código aqui
  const { AdultPrice, ChildPrice, SeniorPrice } = data.prices;
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * AdultPrice) + (Child * ChildPrice) + (Senior * SeniorPrice);
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
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((animal) => animal.id === animalId).residents
    .reduce((residentA, residentB) => (residentA.age > residentB.age ? residentA : residentB));
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const { prices } = data;
  Object.keys(prices)
    .forEach((key) => {
      prices[key] = Math.round(prices[key] * (1 + (percentage / 100)) * 100) / 100;
    });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (idOrName) {
    const employee = employees.find((e) => idOrName === e.id
      || idOrName === e.firstName
      || idOrName === e.lastName);
    const animals = employee.responsibleFor
      .map((id) => species.find((animal) => animal.id === id).name);
    return { [`${employee.firstName} ${employee.lastName}`]: animals };
  }
  return employees.reduce((acc, employee) => ({
    ...acc,
    [`${employee.firstName} ${employee.lastName}`]: employee.responsibleFor
      .map((id) => species.find((animal) => animal.id === id).name),
  }), {});
}
console.log(getEmployeeCoverage());

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
