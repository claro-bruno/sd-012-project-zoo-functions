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

const { species, employees, hours /* prices */ } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = species.filter((specie) => specie.name === animal)[0];
  const getResidents = animalSpecie.residents;
  const getAge = getResidents.every((resident) => (resident.age >= age));
  return getAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) => (firstName === employeeName
     || lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const map = employees.map((employee) => {
    if (employee.managers.includes(id)) return true;
    return false;
  });
  const some = map.some((item) => item === true);
  return some;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return species.find((item) => item.name === specie).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
}
console.log(calculateEntry());

/*
function getAnimalMap(options) {
  // seu código aqui
}
*/

// eslint-disable-next-line max-lines-per-function
function getSchedule(dayName) {
  if (!dayName) {
    const arraySchedule = Object.entries(hours);
    const schedule = arraySchedule.reduce((acc, entries) => {
      const { open, close } = entries[1];
      acc[entries[0]] = `Open from ${open}am until ${close - 12}pm`;
      if (entries[0] === 'Monday') acc[entries[0]] = 'CLOSED';
      return acc;
    }, {});
    return schedule;
  }
  const { open, close } = hours[dayName];
  const day = { [dayName]: `Open from ${open}am until ${close - 12}pm` };
  if (dayName === 'Monday') day[dayName] = 'CLOSED';
  return day;
}

/*
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
