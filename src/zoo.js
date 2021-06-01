/* eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
] */

const { species, employees } = require('./data');
/* const data = require('./data'); */

function getSpeciesByIds(...ids) {
  const saida = [];
  ids.forEach((id) => {
    species.forEach((specie) => {
      if ((specie.id === id) === true) {
        saida.push(specie);
      }
    });
  });
  return saida;
}

function getAnimalsOlderThan(animal, age) {
  let saida;
  species.forEach((animais) => {
    if (animais.name === animal) {
      saida = animais.residents.every((idade) => idade.age >= age);
    }
  });
  return saida;
}

function getEmployeeByName(employeeName) {
  let saida = {};
  employees.forEach((colaboradores) => {
    if (colaboradores.firstName === employeeName || colaboradores.lastName === employeeName) {
      saida = colaboradores;
    }
  });
  return saida;
}

function createEmployee(personalInfo, associatedWith) {
  const novoColaborador = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return novoColaborador;
}

function isManager(id) {
  if (id === '9e7d4524-363c-416a-8759-8aa7e50c0992'
  || id === 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
  || id === '0e7b460e-acf4-4e17-bcb3-ee472265db83') {
    return true;
  }
  return false;
}

function addEmployee(ids, firstNames, lastNames, managerss, responsibleFors) {
  const saida = {
    id: ids,
    firstName: firstNames,
    lastName: lastNames,
    managers: ((managerss === undefined) ? [] : managerss),
    responsibleFor: ((responsibleFors === undefined) ? [] : responsibleFors),
  };
  return employees.push(saida);
}

function countAnimals(speciess) {
  let saida = {};
  species.forEach((animal) => {
    if (animal.name === speciess) {
      saida = animal.residents.length;
    }
    saida[animal.name] = animal.residents.length;
  });
  return saida;
}

/*
function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
/*   calculateEntry,
  getSchedule,
  getAnimalMap, */
  countAnimals,
  getSpeciesByIds,
  getEmployeeByName,
  /*
  getEmployeeCoverage,
  */
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  /*
  getOldestFromFirstSpecies,
  increasePrices,
  */
  createEmployee,
};
