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

const { species, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find((employee) => employee.firstName === employeeName
      || employee.lastName === employeeName);
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee, index) => employee.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  if (speciesName) {
    return species.find(({ name }) => name === speciesName).residents.length;
  }
  // O código a seguir foi retirado de: https://vmarchesin.medium.com/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  return species.reduce((acc, specie) => ({
    ...acc, [specie.name]: specie.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  }
  return 0;
}

// O código a seguir foi retirado de: https://dicasdejavascript.com.br/javascript-como-remover-valores-repetidos-de-um-array/
const getLocations = [...new Set(species.map((specie) => specie.location))];

const getAnimalLocations = () => getLocations.reduce((acc, location) => ({
  ...acc,
  [`${location}`]: species.filter((specie) => specie.location === location).map((e) => e.name),
}), {});

const getAnimalNames = (includeNames, sorted, sex) => getLocations.reduce((acc, location) => ({
  ...acc,
  [`${location}`]: species.filter((specie) => specie.location === location)
    .map((element) => {
      let { residents } = element;
      if (sex) {
        residents = residents.filter((e) => e.sex === sex);
      }
      residents = residents.map((resident) => resident.name);
      if (sorted) {
        residents.sort();
      }
      return { [element.name]: residents };
    }),
}), {});

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return getAnimalLocations();
  }
  const { includeNames, sorted = false, sex = false } = options;
  return getAnimalNames(includeNames, sorted, sex);
}

function getSchedule(dayName) {
  const schedule = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
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
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((animal) => animal.id === animalId).residents
    .reduce((residentA, residentB) => (residentA.age > residentB.age ? residentA : residentB));
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  Object.keys(prices)
    .forEach((key) => {
      prices[key] = Math.round(prices[key] * (1 + (percentage / 100)) * 100) / 100;
    });
}

function getEmployeeCoverage(idOrName) {
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
