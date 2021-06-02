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
  const retorno = ids.length === 0 ? []
    : ids.map((id) => species.find((specie) => specie.id === id));
  return retorno;
}

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((specie) => specie.name === animal);
  return animalName.residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  const retorno = employeeName === undefined ? {}
    : data.employees.find((pessoa) => pessoa.firstName === employeeName
    || pessoa.lastName === employeeName);
  return retorno;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const result = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return result;
}

function isManager(id) {
  const people = data.employees.find((pessoa) => pessoa.id === id);
  const result = people.managers.some((manager) => manager
    === '9e7d4524-363c-416a-8759-8aa7e50c0992');
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if(managers === undefined) {
    managers = [];
  } else if(responsibleFor === undefined) {
    responsibleFor = [];
  }
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
  if(species === undefined) {
    const name = data.species.map((specie) => specie.name);
    const quantidade = data.species.map((specie) => specie.residents.length);
    let result = {...quantidade};
    Object.keys(name).forEach((key, posicao) => {
      let newKey = name[key];
      result[newKey] = result[key];
      delete result[key];
    })
    return result;
  }
}
console.log(countAnimals());

// function calculateEntry(entrants) {
//   // seu código aqui
// }

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
