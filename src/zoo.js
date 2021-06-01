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
  if (ids.length === 0) {
    return [];
  }

  if (ids.length === 1) {
    const ac1 = ids.map((id) => species.find((especie) => especie.id === id));
    return ac1;
  }

  if (ids.length > 1) {
    const ac = ids.map((id) => data.species.find((especie) => especie.id === id));
    return ac;
  }
}

function getAnimalsOlderThan(animal, age) {
  const resposta = species.map((elemento) => {
    let respostaEvery;
    if (elemento.name === animal) {
      respostaEvery = elemento.residents.every((residente) => residente.age > age);
    }
    return respostaEvery;
  });
  return resposta.some((elemento) => elemento === true);
}

function getEmployeeByName() {
  // seu código aqui employeeName
}

function createEmployee() {
  // seu código aqui personalInfo, associatedWith
}

function isManager() {
  // seu código aqui id
}

function addEmployee() {
  // seu código aqui id, firstName, lastName, managers, responsibleFor
}

function countAnimals() {
  // seu código aqui species
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
