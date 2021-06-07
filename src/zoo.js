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
//
const data = require('./data');

const { species, employees, prices, hours } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((specie) => animal === specie.name);
  return animalName.residents.every((residents) => residents.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    employeeName === employee.firstName || employeeName === employee.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employe) => employe.managers.some((idPerson) => idPerson === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (specie) {
    const animal = species.find((itemEspecie) => itemEspecie.name === specie).residents.length;
    return animal;
  }
  const obj = {};
  species.forEach((itemEspecie) => {
    obj[itemEspecie.name] = itemEspecie.residents.length;
  });
  return obj;
}
// Retorna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const totalAdult = Number(Adult) * Number(prices.Adult);
  const totalSenior = Number(Senior) * Number(prices.Senior);
  const totalChild = Number(Child) * Number(prices.Child);

  return totalAdult + totalSenior + totalChild;
}

function getAnimalMap() {
  // seu código aqui
}

function getSchedule(dayName) {
  const diasUteis = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  if (dayName === undefined) {
    return diasUteis;
  }
  return { [dayName]: diasUteis[dayName] };
}

function getOldestFromFirstSpecies() {
  // seu código aqui
}

function increasePrices() {
  // seu código aqui
}

function getEmployeeCoverage() {
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
