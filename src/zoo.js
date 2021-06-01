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

const data = require('./data');

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = species.find((specie) => specie.name === animal);
  return selectedAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees = [...data.employees, newEmployee];
}

function countAnimals(specie) {
  // seu código aqui
  if (!specie) {
    const animals = {};
    species.forEach((animal) => {
      animals[animal.name] = animal.residents.length;
    });
    return animals;
  }
  const selectedAnimal = species.find((animal) => animal.name === specie);
  return selectedAnimal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const visitors = [entrants.Adult, entrants.Senior, entrants.Child];
  const values = [prices.Adult, prices.Senior, prices.Child];
  return visitors.reduce((totalValue, visitor = 0, index) => {
    let valorTotal = totalValue;
    valorTotal += visitor * values[index];
    return valorTotal;
  }, 0);
}

const locations = ['NE', 'NW', 'SE', 'SW'];

function speciesLocation() {
  const animalsLocation = {};
  locations.forEach((location) => {
    const speciesInTheLocation = species.filter((specie) =>
      specie.location === location);
    animalsLocation[location] = speciesInTheLocation.map((specie) => specie.name);
  });
  return animalsLocation;
}

function speciesLocationWithNames() {
  const animalsLocation = {};
  locations.forEach((location) => {
    const speciesInTheLocation = species.filter((specie) =>
      specie.location === location);
    const eachAnimal = speciesInTheLocation.map((specie) => specie.name);
    animalsLocation[location] = eachAnimal.map((animal) => {
      const nomes = speciesInTheLocation
        .filter((specie) => specie.name === animal)[0].residents
        .map((resident) => resident.name);
      return {
        [animal]: nomes,
      };
    });
  });
  return animalsLocation;
}

function speciesLocationWithNamesSorted() {
  const animalsLocation = {};
  locations.forEach((location) => {
    const speciesInTheLocation = species.filter((specie) =>
      specie.location === location);
    const eachAnimal = speciesInTheLocation.map((specie) => specie.name);
    animalsLocation[location] = eachAnimal.map((animal) => {
      const nomes = speciesInTheLocation
        .filter((specie) => specie.name === animal)[0].residents
        .map((resident) => resident.name);
      return {
        [animal]: nomes.sort(),
      };
    });
  });
  return animalsLocation;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return speciesLocation();
  if (options.includeNames === true) {
    if (options.sorted === true) return speciesLocationWithNamesSorted();
    return speciesLocationWithNames();
  }
}

function generateScheduleForEveryDay() {
  const keys = Object.keys(hours);
  const schedule = {};
  keys.forEach((day) => {
    if (day === 'Monday') schedule[day] = 'CLOSED';
    else {
      const { open, close } = hours[day];
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  return schedule;
}

function getSchedule(dayName) {
  if (!dayName) {
    return generateScheduleForEveryDay();
  }
  const { open, close } = hours[dayName];
  if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
  return { [dayName]: `Open from ${open}am until ${close - 12}pm` };
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
