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

const { species, employees } = require('./data');
// dica colega Caio para colocar as arrays de objetos aqui p chamar com amsi facilidades nas funçòes.
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids.length) return [];
  return data.species.filter((specie, index) => specie.id === ids[index]);
  // dica de usar o index dentro do filter na monitoria.
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui animal, age
  // const name = species[0].name;
  const findindSpecie = species.find((specie) => specie.name === animal);
  return findindSpecie.residents.every((resident) => age < resident.age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.lastName === employeeName || employee.firstName === employeeName;
  return employees.find(findEmployee);
}
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) =>
    employee.managers.some((value) => value === id));
  // ajuda do colega Luis Fernando
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
  // ajuda colega Caio
}

function countAnimals(species2) {
  // seu código aqui
  if (!species2) {
    return species.reduce((acc, curr) => {
      const animalName = curr.name;
      acc[animalName] = curr.residents.length;
      return acc;
    }, {});
  }
  const findSpecie = species.find((specie) => specie.name === species2);
  return findSpecie.residents.length;
}
console.log(countAnimals('lions'));

// function calculateEntry() {
//   // seu código aqui entrants
// }

// function getAnimalMap() {
//   // seu código aqui options
// }

// function getSchedule() {
//   // seu código aqui dayName
// }

// function getOldestFromFirstSpecies() {
//   // seu código aqui id
// }

// function increasePrices() {
//   // seu código aqui percentage
// }

// function getEmployeeCoverage() {
//   // seu código aqui idOrName
// }

module.exports = {
  // calculateEntry,
  // getSchedule,
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
