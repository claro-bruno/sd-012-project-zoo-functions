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

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const objetoAnimal = species.find((specie) => specie.name === animal);
  return objetoAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employee) => {
    const retorno = employee.firstName === employeeName || employee.lastName === employeeName;
    return retorno;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  if (animal === undefined) {
    const objetoAnimais = {};
    species.forEach((eachSpecie) => {
      objetoAnimais[eachSpecie.name] = eachSpecie.residents.length;
    });
    return objetoAnimais;
  }
  const retorno = data.species.find((eachSpecie) => eachSpecie.name === animal);
  return retorno.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === {} || !entrants) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * data.prices.Adult + Child * data.prices.Child + Senior * data.prices.Senior;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

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
