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

const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  // lógica da função getSpeciesByIds desenvolvida com a ajuda do Luiz Henrrique (https://github.com/lzzhenrique) e Bruno Yamamoto (https://github.com/BSY-Development) através de call.
  return ids.map((item) => species.find((specie) => specie.id === item));
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((name) => name.name === animal);
  return residents.every((indexAnimal) => indexAnimal.age > age);
}

function getEmployeeByName(employeeName) {
  // ideia do operador ternário para a função getEmployeeByName desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) através de call.
  const findEmployeeByName = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return !employeeName ? {} : findEmployeeByName;
}

function createEmployee(personalInfo, associatedWith) {
  const mergeParams = { ...personalInfo, ...associatedWith };
  return mergeParams;
}

const isManager = (id) => employees.some((index) => index.managers.includes(id));
// função isManager desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) e Caroline Banichio (https://github.com/carolbenichio) através de call.

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // ideia do default parameter para a função addEmployee desenvolvida com a ajuda do Eric kreis https://github.com/eric-kreis através de call.
  const params = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(params);
  return employees;
}

function countAnimals(specie) {
  // ideia do foreach para a função countAnimals desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) através de call.
  if (!specie) {
    const objSpecies = {};
    species.forEach((name) => {
      objSpecies[name.name] = name.residents.length;
    });
    return objSpecies;
  }
  const foundSpecies = species.find((animal) => animal.name === specie);
  const qtdSpecies = foundSpecies.residents.length;
  return qtdSpecies;
}

function calculateEntry(entrants) {
  // lógica da função calculateEntry desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) e Thalles Carneiro (https://github.com/thalles-carneiro)  através de call.
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: priceAdult, Child: priceChild, Senior: priceSenior } = prices;
  const totalPrice = (Adult * priceAdult) + (Child * priceChild) + (Senior * priceSenior);
  return totalPrice;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  // lógica dos horarios disponíveis da função getSchedule desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) e ideia do bracket notation desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) através de call.
  const obj1 = {};
  const newObj = Object.keys(hours);
  newObj.forEach((day) => {
    const { open, close } = hours[day];
    obj1[day] = day === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  });
  if (!dayName) {
    return obj1;
  }
  const obj2 = {
    [dayName]: obj1[dayName],
  };

  return obj2;
}

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

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
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
