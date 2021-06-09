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

const getSpeciesByIds = (...ids) => {
  const animalId = species.filter((specie) => ids.includes(specie.id));
  return animalId;
};

const getAnimalsOlderThan = (animal, age) => {
  const animalAge = species.find((specie) => specie.name === animal);
  const yearsOld = animalAge.residents.every((resident) => resident.age > age);

  return yearsOld;
};

const getEmployeeByName = (employeeName) => {
  if (!employeeName) { // used '!' come from https://pt.stackoverflow.com/questions/108973/qual-a-fun%C3%A7%C3%A3o-do-operador-exclama%C3%A7%C3%A3o
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [], // uso condição veio de https://github.com/tryber/sd-012-project-zoo-functions/blob/tharcio-sampaio-zoo-functions-project/src/zoo.js
  });
}

const countAnimals = (specieName) => {
  const selectSpecies = species.find((specie) => specie.name === specieName);
  const returnQtd = {};

  species.forEach((specie) => { returnQtd[specie.name] = specie.residents.length; });

  if (specieName) {
    return selectSpecies.residents.length;
  }
  return returnQtd;
};

const calculateEntry = (entrants) => {
  const { Adult: AdultTickets, Child: ChildTickets, Senior: SeniorTickets } = prices;
  if (entrants) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (Adult * AdultTickets) + (Child * ChildTickets) + (Senior * SeniorTickets);
  }
  return 0;
};

/* function getAnimalMap(options) {
  // seu código aqui
} */

function getSchedule(dayName) {
  const schedules = {};

  Object.keys(hours).forEach((key) => {
    schedules[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    if (key === 'Monday') {
      schedules[key] = 'CLOSED';
    }
  });

  if (dayName) {
    return { [dayName]: schedules[dayName] };
  }
  return schedules;
}

/* function getOldestFromFirstSpecies(id) {
  // seu código aqui
} */

function increasePrices(percentage) {
  Object.keys(prices).forEach((client) => {
    prices[client] = Math.round(prices[client] * (1 + (percentage / 100)) * 100) / 100; // '/100' para que tenha 2 casas decimas.
  });
}
/* function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

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
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
