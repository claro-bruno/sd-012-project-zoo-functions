/* eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
] */

const { species, employees, prices, hours } = require('./data');
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

function calculateEntry(entrants) {
  let valorFinal = 0;
  if (entrants !== undefined) {
    Object.entries(entrants).forEach((entrada) => {
      switch (entrada[0]) {
      case 'Adult':
        valorFinal += entrants.Adult * prices.Adult;
        break;
      case 'Child':
        valorFinal += entrants.Child * prices.Child;
        break;
      case 'Senior':
        valorFinal += entrants.Senior * prices.Senior;
        break;
      default:
        valorFinal += 0;
      }
    });
  } return valorFinal;
}

/*
function getAnimalMap(options) {
  // seu código aqui
}
*/
const verifica = (dayName) => ((dayName === 'Monday') ? 'CLOSED'
  : `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`);
function getSchedule(dayName) {
  const calendario = Object.entries(hours);
  const saida = {};
  if (dayName === undefined) {
    const verifica2 = (dia) => ((dia[0] === 'Monday') ? 'CLOSED'
      : `Open from ${dia[1].open}am until ${dia[1].close - 12}pm`);
    calendario.forEach((dia) => {
      saida[dia[0]] = verifica2(dia);
      return saida;
    });
  } else {
    saida[dayName] = verifica(dayName);
  }
  return saida;
}
/*
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
  calculateEntry,
  /*
  getAnimalMap, */
  getSchedule,
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
