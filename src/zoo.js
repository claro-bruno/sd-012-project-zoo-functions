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

// const { employees } = require('./data');
const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return ids;
  return ids.map((id) => data.species.find((animal) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animals) =>
    animals.name === animal).residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((name) =>
    employeeName.includes(name.lastName) || employeeName.includes(name.firstName));
}

function createEmployee(personalInfo, associatedWith) {
  const obj = {
    ...personalInfo,
    ...associatedWith,
  };
  return obj;
}
function isManager(id) {
  return data.employees.some((personal) => personal.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmpoyees = { id, firstName, lastName, managers, responsibleFor,
  };
  data.employees.push(newEmpoyees);
}

function countAnimals(species) {
  if (!species) {
    const animals = {};
    data.species.forEach((names) => {
      animals[names.name] = names.residents.length;
    });
    return animals;
  }
  const specie = data.species.find((sp) => sp.name === species);
  return specie.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return ((Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior));
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

const hour = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function getSchedule(dayName) {
  if (!dayName) return hour;
  const chave = Object.keys(data.hours);
  const value = chave.find((valor) => valor === dayName);
  const obj = Object.values(data.hours[value]);
  if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  let valor;
  switch (obj[1]) {
  case 18:
    valor = 6;
    break;
  case 20:
    valor = 8;
    break;
  default: valor = 10;
  }
  return { [value]: `Open from ${obj[0]}am until ${valor}pm` };
}
console.log(getSchedule('Tuesday'));
function getOldestFromFirstSpecies(id) {
  const personal = data.employees.find((funcionario) => funcionario.id === id);
  const [firstsSpecieId] = personal.responsibleFor;
  const firstSpecie = data.species.find((specie) => specie.id === firstsSpecieId);
  const old = firstSpecie.residents.sort((a, b) => b.age - a.age).shift();
  return Object.values(old);
}

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  data.prices.Adult = Math.round(Adult * (1 + percentage / 100) * 100) / 100;
  data.prices.Senior = Math.round(Senior * (1 + percentage / 100) * 100) / 100;
  data.prices.Child = Math.round(Child * (1 + percentage / 100) * 100) / 100;
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
