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
const { employees } = require('./data');
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

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
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
