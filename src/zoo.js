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

function getSpeciesByIds(...species) {
  return species.map((itemId) => data.species.find((specie) => specie.id === itemId));
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((old) => old.name === animal);
  return nomeAnimal.residents.every((ag) => ag.age > age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const emp = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return emp;
}
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((manage) => manage.managers.includes(id));
}

// manager = [] significa que se não receber parâmetro esse é seu valor
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(add);
}

// countAnimals resolvido com ajuda do PR do https://github.com/tryber/sd-012-project-zoo-functions/pull/41/files
function countAnimals(species) {
  if (species === undefined) {
    const objName = {};
    data.species.forEach(({ name, residents }) => {
      objName[name] = residents.length;
    });
    return objName;
  }
  const result = data.species.find(({ name }) => name === species).residents.length;
  return result;
}

function calculateEntry() {
  // seu código aqui entrants
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
