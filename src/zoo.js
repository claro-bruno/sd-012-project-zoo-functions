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
  if (employeeName === undefined) return {};
  return employees.find(({ firstName, lastName }) => (firstName === employeeName
     || lastName === employeeName));
}

/*
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}
*/

function isManager(id) {
  const map = employees.map((employee) => {
    if (employee.managers.includes(id)) return true;
    return false;
  });
  const some = map.some((item) => item === true);
  return some;
}

/*
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}
*/

function countAnimals(specie) {
  if (specie === undefined) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return species.find((item) => item.name === specie).residents.length;
}

/*
function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}
*/

// eslint-disable-next-line max-lines-per-function
function getSchedule(dayName) {
  //
}
console.log(getSchedule());

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
  // calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
