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

const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) {
    return [];
  }
  const pegaEspecie = species.filter((sId, index) => sId.id === ids[index]);
  return pegaEspecie;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const idadeMinima = species.find((ani) => ani.name === animal)
    .residents.every((ani) => ani.age >= age);
  return idadeMinima;
}
// console.log(getAnimalsOlderThan('otters', 7))

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const achaFunc = employees.find((func) =>
    func.firstName === employeeName || func.lastName === employeeName);
  return achaFunc;
}
// console.log(getEmployeeByName('Wishart'))

function createEmployee({ id, firstName, lastName }, { managers = [], responsibleFor = [] }) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  const checkId = employees.some((employee, index) => employee.managers[index] === id);
  return checkId;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  employees.push(newEmployee);
  return newEmployee;
}

// Exercício feito com a ajuda do meu amigo Caio Morato
function countAnimals(specie) {
  const contagem = species.find((animal) => animal.name === specie);
  if (specie) {
    return contagem.residents.length;
  }
  const todos = {};
  species.forEach((animal) => {
    todos[animal.name] = animal.residents.length;
  });
  return todos;
}
// console.log(countAnimals())

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * data.prices.Adult + Child * data.prices.Child + Senior * data.prices.Senior;
}
// console.log(calculateEntry({ 'Adult': 2, 'Child': 3, 'Senior': 1 }))

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   if (Object.keys(dayName).length === 0) { return }
// }

function getOldestFromFirstSpecies(funcId) {
  const checkFunId = employees.find((person) => funcId === person.id)
    .responsibleFor.find((especie) => especie);
  const checkSpecie = species.filter((specie) => specie.id === checkFunId);

  return checkSpecie;
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')) CORRIGIR

function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  const calculo = prices = {
    Adult: Math.round((Adult * (percentage / 100) + Adult) * 100) / 100,
    Senior: Math.round((Senior * (percentage / 100) + Senior) * 100) / 100,
    Child: Math.round((Child * (percentage / 100) + Child) * 100) / 100,
  };
  return calculo;
}
// console.log(increasePrices(30))

// function getEmployeeCoverage(idOrName) {
//   if (idOrName) {
//     const checkCredentials = employees.find((employee) => employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName);
//     return ({[`${checkCredentials.firstName} ${checkCredentials.lastName}`]: `${checkCredentials.responsibleFor}`})
//   } else {
//     employees.forEach((employee) => ({[`${employee.firstName} ${employee.lastName}`]: `${employee.responsibleFor}`}))
//   }
// }
// console.log(getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
