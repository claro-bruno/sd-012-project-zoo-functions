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
const { employees, hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  const getSpeciesById = (id, index) => {
    if (data.species[index].id === id) return data.species[index];
  };
  return ids.map(getSpeciesById);
}

const getAnimalsOlderThan = (animal, age) => (
  data.species
    .find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age)
);

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const objectEmployee = (employee) =>
    (employee.firstName === employeeName) || (employee.lastName === employeeName);
  return employees.find((objectEmployee));
}

function createEmployee(personalInfo, associatedWith) {
  const employeeInclude = { ...personalInfo, ...associatedWith };
  return employeeInclude;
}

const isManager = (id) => {
  const yesManager = employees.find((manager) => manager.id === id).managers.length <= 1;
  return yesManager;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => employees
  .push({ ...employees, id, firstName, lastName, managers, responsibleFor });

function countAnimals(species) {
  if (!species) {
    const count = data.species.reduce((accumulator, specie) => {
      accumulator[specie.name] = specie.residents.length;
      return accumulator;
    }, {});
    return count;
  }
  const specie = (data.species.find((name) => name.name === species));
  return specie.residents.length;
}

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof
function calculateEntry(entrants) {
  if (typeof entrants === 'object' && Object.entries(entrants).length === 0) return 0;
  if (!entrants) return 0;
  const visit = Object.keys(entrants); // verifica as chaves do objeto passado
  // usa o valor do total para o reduce.
  return visit.reduce((accumulator, currentValue) => {
    const total = accumulator + entrants[currentValue] * data.prices[currentValue];
    return total;
  }, 0);
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule(dayName) {
  const hour = Object.keys(hours);
  const tableOfHours = {};
  const hoursTable = hour.reduce((accumulator, currentValue) => {
    if (hours[currentValue].open === hours[currentValue].close) {
      accumulator[currentValue] = 'CLOSED';
    } else {
      accumulator[currentValue] = `Open from ${hours[currentValue]
        .open}am until ${hours[currentValue].close - 12}pm`;
    }
    return accumulator;
  }, {});
  if (!dayName) {
    return hoursTable;
  }
  tableOfHours[dayName] = hoursTable[dayName];
  return tableOfHours;
}
// aqui usei a mesma lógica da função getAnimalsOlderThan
// para os operadores ternários: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
function getOldestFromFirstSpecies(id) {
  const findId = employees.find((employee) => employee.id === id).responsibleFor[0]; // primeiro residente
  const { residents } = data.species.find((specie) => specie.id === findId);
  console.log(residents);
  const seniores = residents
    .reduce((older, resident) => ((resident.age > older) ? resident.age : older), 0); // aqui, operador ternario
  const seniorGold = Object.values(residents.find((resident) => resident.age === seniores));
  return seniorGold;
}

function increasePrices(percentage) {
  // const perCent = percentage / 100;
  const { Adult, Child, Senior } = data.prices;
  data.prices = {
    // toFixed não funciona!! Nada funcionava, consegui com a ajuda do Josimar Souza em
    // https://github.com/tryber/sd-012-project-zoo-functions/pull/134/commits/44dbb557423d42aeb15b862239d3d6c334fc80c6
    Adult: Math.round((Adult + ((Adult * percentage) / 100)) * 100) / 100,
    Child: Math.round((Child + ((Child * percentage) / 100)) * 100) / 100,
    Senior: Math.round((Senior + ((Senior * percentage) / 100)) * 100) / 100,
  };
  return data.prices;

  // const newPrice = ({})
}

function getEmployeeCoverage(idOrName) {
  const ids = employees
    .filter((id) => id === idOrName).responsibleFor;
  console.log(ids);
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
