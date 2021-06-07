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

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const animalId = species.filter((specie) => ids.includes(specie.id));
  return animalId;
};

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const animalAge = species.find((specie) => specie.name === animal);
  const yearsOld = animalAge.residents.every((resident) => resident.age > age);

  return yearsOld;
};

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (!employeeName) { // used '!' come from https://pt.stackoverflow.com/questions/108973/qual-a-fun%C3%A7%C3%A3o-do-operador-exclama%C3%A7%C3%A3o
    return {};
  }
  return employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  return employees.push({
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [], // ideia da condição veio de https://github.com/tryber/sd-012-project-zoo-functions/blob/tharcio-sampaio-zoo-functions-project/src/zoo.js
  });
}

const countAnimals = (specieName) => {
  // seu código aqui
  const selectSpecies = species.find((specie) => specie.name === specieName);
  const returnQtd = {};
  species.forEach((specie) => { returnQtd[specie.name] = specie.residents.length });

  if (specieName) {
    return selectSpecies.residents.length;
  }
  return returnQtd;
};

function calculateEntry(entrants) {
  // seu código aqui

  const { Adult: AdultTickets, Child: ChildTickets, Senior: SeniorTickets } = prices;
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * AdultTickets) + (Child * ChildTickets) + (Senior * SeniorTickets);
  }
  return 0;
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
