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

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalSpecie = data.species.filter((specie) => specie.name === animal)[0];
  const getResidents = animalSpecie.residents;
  const getAge = getResidents.every((resident) => (resident.age >= age));
  return getAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(({ firstName, lastName }) => (firstName === employeeName
     || lastName === employeeName));
}
/*
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}
*/

function isManager(id) {
  const map = data.employees.map((employee) => {
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

function countAnimals(species) {
  if (species === undefined) {
    const result = {};
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}
console.log(countAnimals());
console.log(countAnimals('lions'));
console.log(countAnimals('snakes'));


// const map = findSpecie.map((specie) => specie.residents);
  // const reduce = map.reduce((acc, curr) => `${acc}, ${curr}`);
  // return `${reduce}.`;
  
  // const reduceSpecie = findSpecie.reduce((acc, curr) => {
  //   acc += curr.residents.length;
  // }, 0);

/*
function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

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
  // getSchedule,
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
