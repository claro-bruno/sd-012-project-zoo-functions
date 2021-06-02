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

const { species, employees, hours, prices } = require('./data');
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

function getSchedule(dayName) {
  const objDias = {};
  const dias = Object.keys(hours);
  dias.forEach((Chave) => {
    if (hours[Chave].close === 0) {
      objDias[Chave] = 'CLOSED';
    } else {
      objDias[Chave] = `Open from ${hours[Chave].open}am until ${(hours[Chave].close) - 12}pm`;
    }
  });
  if (dayName) {
    return { [dayName]: objDias[dayName] };
  }
  return objDias;
}

function getOldestFromFirstSpecies(id) {
  const acharColaborador = employees.find((elemento) => elemento.id === id);
  const primeiroAnimal = acharColaborador.responsibleFor[0];
  const animal = species.find((elemento) => elemento.id === primeiroAnimal);
  let maisVelho;
  let velho = 0;
  animal.residents.forEach((elemento) => {
    if (elemento.age > velho) {
      velho = elemento.age;
      maisVelho = elemento;
    }
  });
  return Object.values(maisVelho);
}

function increasePrices(percentage) {
  const percentage2 = percentage / 100;
  prices.Adult += (prices.Adult * percentage2);
  prices.Child += (prices.Child * percentage2);
  prices.Senior += (prices.Senior * percentage2);
  prices.Adult = Math.round(prices.Adult * 100) / 100;
  prices.Child = Math.round(prices.Child * 100) / 100;
  prices.Senior = Math.round(prices.Senior * 100) / 100;
  return prices;
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
