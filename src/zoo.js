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
  return data.species.filter((specie) => ids.includes(specie.id));
  /* if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  if (ids.length > 1) {
    return data.species.filter((specie) => ids.includes(specie.id));
  } */
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const specie = species.find((animals) => animals.name === animal);
  return specie.residents.every((resident) => resident.age >= age);
}
/* function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const specie = species.find((name) => name.name === animal);
  return specie.residents.every((animalonly) => animalonly.age >= age);
} */

function getEmployeeByName(employee) {
  if (employee === undefined) {
    return {};
  }
  return data.employees.find((employees) =>
    (employees.firstName === employee) || (employees.lastName === employee));
}

function createEmployee(personalInfo, associatedWith) {
  const employeeNew = { ...personalInfo, ...associatedWith };
  return employeeNew;
}

function isManager(id) {
  return data.employees.some((employee, index) => employee.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  // species.names.residents
  if (!species) {
    const result = {};
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  // prices:
  // Adult, Child e Senior,
  if (!entrants || entrants.length === 0) return 0;
  // desestrutura algumas chaves e predefine valores caso estes nao venham do parametro
  const { Adult: countAdults = 0, Child: countChildren = 0,
    Senior: countSeniors = 0 } = entrants;
  const accumulatorAdults = data.prices.Adult * countAdults;
  const accumulatorChildren = data.prices.Child * countChildren;
  const accumulatorSeniors = data.prices.Senior * countSeniors;
  return (accumulatorAdults + accumulatorChildren + accumulatorSeniors);
}

function getAnimalMap() {
  // seu código aqui  : options
}

function getSchedule(dayName) {
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  if (!dayName) {
    const schedule = Object.keys(data.hours);
    const timetable = schedule.reduce((acc, crr) => {
      acc[crr] = `Open from ${data.hours[crr].open}am until ${data.hours[crr].close - 12}pm`;
      return acc;
    }, {});
    timetable.Monday = 'CLOSED';
    return timetable;
  }
  return { [dayName]: `Open from ${data.hours[dayName].open}am until ${data
    .hours[dayName].close - 12}pm` };
}
/* 'Open from ${day.open}pm until ${day.close}pm'  */
console.log(getSchedule());

function getOldestFromFirstSpecies() {
  // id Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário,
  // e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
  /* const employeeFound = data.employees.find((employee) => employee.id === id);
  const animalFound = employeeFound.responsibleFor.forEach((especie) => especie.residents
  data.species.forEach(({ name, residents }) => {
    result[name] = residents.length;
  }); */
}

function increasePrices() {
  // seu código aqui   : percentage
}

function getEmployeeCoverage() {
  // seu código aqui    : idOrName
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
