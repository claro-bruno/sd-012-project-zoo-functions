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

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const cola = employees.find((f) => f.firstName === employeeName || f.lastName === employeeName);
  return cola;
}

function createEmployee(personalInfo, associatedWith) {
  const objetoResposta = Object.assign(personalInfo, associatedWith);
  return objetoResposta;
}

function isManager(id) {
  return employees.some((elemento) => {
    for (let index = 0; index <= elemento.managers.length; index += 1) {
      if (elemento.managers[index] === id) {
        return true;
      }
    }
    return false;
  });
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objetoAdicionar = { id: null };
  objetoAdicionar.id = id;
  objetoAdicionar.firstName = firstName;
  objetoAdicionar.lastName = lastName;
  objetoAdicionar.managers = managers;
  objetoAdicionar.responsibleFor = responsibleFor;
  return employees.push(objetoAdicionar);
}

function countAnimals(speciesP) {
  let resposta = {};
  if (speciesP === undefined) {
    species.map((animal) => {
      resposta[animal.name] = animal.residents.length;
      return null;
    });
  } else {
    resposta = species.find((animal) => animal.name === speciesP);
    resposta = resposta.residents.length;
  }
  return resposta;
}

function calculateEntry(entrants) {
  let total = 0;
  const arrayDoParametro = [entrants];
  if (entrants === undefined || arrayDoParametro === [{}]) return total;
  Object.entries(entrants).forEach((tipoEntrada) => {
    switch (tipoEntrada[0]) {
    case 'Adult':
      total += entrants.Adult * 49.99;
      break;
    case 'Child':
      total += entrants.Child * 20.99;
      break;
    case 'Senior':
      total += entrants.Senior * 24.99;
      break;
    default:
      break;
    }
  }); return total;
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
