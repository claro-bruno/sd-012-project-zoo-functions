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

const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const findSpecie = ids.map((index) => species.find((specie) => specie.id === index));
  return findSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => animal === specie.name);
  return findSpecie.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const checkManager = (manager) => manager === id;
  return employees.some((employee) => employee.managers.some(checkManager));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species1) { // referencia: eullerbraz-tuma-12
  if (!species1) { // reduce e spread para criar novo objeto com nome e quant de animais.
    return data.species.reduce((acc, specie) =>
      ({ ...acc, [specie.name]: specie.residents.length }), {});
  }
  return data.species.find((specie) => specie.name === species1).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((prices.Adult * Adult) + (prices.Child * Child) + (prices.Senior * Senior));
}
/* referencia: Wadson92 turma10-triboB */
function getSchedule(dayName) {
  const hours = { // cria um objeto com as informações de saída
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return hours; // sem parametro retorna o objeto hours.
  return { [dayName]: hours[dayName] }; // retorna o valor referente a chave passada por parametro.
}

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((ids) => ids.id === id).responsibleFor[0];
  const resident = species.find((specie) => specie.id === firstAnimal);
  const oldest = resident.residents.reduce((acc, current) => {
    if (current.age > acc.age) return current;
    return acc;
  });
  return [oldest.name, oldest.sex, oldest.age];
}

/*   const oldest = resident.reduce((acc, current) => {
  if (current.age > acc.age) acc.age = current.age;
  });
  const {name, sex, age} = oldest;
  return [name, sex, age];
} */
/* function getAnimalMap (option) {

}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}
 */
module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  createEmployee,
  isManager,
  addEmployee,
  countAnimals,
  calculateEntry,
  /* getAnimalMap, */
  getSchedule,
  getOldestFromFirstSpecies,

  /* getEmployeeCoverage,

  increasePrices, */
};
