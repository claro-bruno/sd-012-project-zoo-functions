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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((specie) => specie.name === animal);
  return especie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const employee = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return employee;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(especies) {
  if (!especies) {
    const objeto = {};
    species.forEach((specie) => {
      objeto[specie.name] = specie.residents.length;
    });
    return objeto;
  }
  return species.find((specie) => specie.name === especies).residents.length;
}

function calculateEntry(entrants = 0) {
  if (!entrants) return entrants;
  let price = 0;
  const entrantsKeys = Object.keys(entrants);
  entrantsKeys.forEach((key) => {
    if (key === 'Adult') {
      price += (entrants[key] * prices.Adult);
    } else if (key === 'Senior') {
      price += (entrants[key] * prices.Senior);
    } else {
      price += (entrants[key] * prices.Child);
    }
  });
  return price;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// eslint-disable-next-line max-lines-per-function
function getSchedule(dayName) {
  const dias = Object.keys(hours);
  const horarios = Object.values(hours);
  const prog = {};
  dias.forEach((dia, index) => {
    if (dia !== 'Monday') {
      prog[dia] = `Open from ${horarios[index].open}am until ${horarios[index].close - 12}pm`;
    } else {
      prog[dia] = 'CLOSED';
    }
  });
  if (!dayName) { return prog; }
  if (dayName !== 'Monday') {
    const diaEspecifico = hours[dayName];
    return {
      [dayName]: `Open from ${diaEspecifico.open}am until ${diaEspecifico.close - 12}pm`,
    };
  }
  return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(inputId) {
  const { responsibleFor } = employees.find(({ id }) => id === inputId);
  const firstAnimalId = responsibleFor[0];
  const { residents } = species.find(({ id }) => id === firstAnimalId);
  const oldest = residents.sort((a, b) => b.age - a.age)[0];
  const chaves = Object.keys(oldest);
  return chaves.map((chave) => oldest[chave]);
}

function increasePrices(percentage) {
  const pessoas = Object.keys(prices);
  pessoas.forEach((pessoa) => {
    const novoPreco = (prices[pessoa] * (1 + (percentage / 100))) + 0.001;
    prices[pessoa] = Number(novoPreco.toFixed(2));
  });
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
