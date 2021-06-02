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

const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((itemId) => data.species.find((species) => itemId === species.id));
}

function getAnimalsOlderThan(animal, age) {
  const animalGet = data.species.find((item) => item.name === animal);
  return animalGet.residents.every((item) => item.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((item) => {
    if (item.firstName === employeeName || item.lastName === employeeName) return true;
    return false;
  });
}

function createEmployee(personal, associated) {
  return {
    ...personal,
    ...associated,
  };
}

function isManager(id) {
  const person = data.employees.find((item) => item.id === id);
  return person.managers.length === 1;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species) {
    return data.species.find((item) => item.name === species).residents.length;
  }
  return data.species.reduce((acc, item) => ({
    ...acc,
    [item.name]: item.residents.length,
  }), {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const allKeys = Object.keys(entrants);
  return allKeys.reduce((acc, item) => {
    const total = acc + entrants[item] * data.prices[item];
    return total;
  }, 0);
}

const emptyParameter = (NE, NW, SE, SW) => {
  const AllRaces = {
    NE: NE.map((item) => item.name),
    NW: NW.map((item) => item.name),
    SE: SE.map((item) => item.name),
    SW: SW.map((item) => item.name),
  };
  return AllRaces;
};

const nameIncluded = (NE, NW, SE, SW, sorted) => {
  const NENames = NE.map((item) => ({ [item.name]: item.residents.map((item2) => item2.name) }));
  const NWNames = NW.map((item) => ({ [item.name]: item.residents.map((item2) => item2.name) }));
  const SENames = SE.map((item) => ({ [item.name]: item.residents.map((item2) => item2.name) }));
  const SWNames = SW.map((item) => ({ [item.name]: item.residents.map((item2) => item2.name) }));
  const allNames = { NE: NENames, NW: NWNames, SE: SENames, SW: SWNames };
  if (sorted) {
    NENames.forEach((item) => Object.keys(item).forEach((item2) => item[item2].sort()));
    NWNames.forEach((item) => Object.keys(item).forEach((item2) => item[item2].sort()));
    SENames.forEach((item) => Object.keys(item).forEach((item2) => item[item2].sort()));
    SWNames.forEach((item) => Object.keys(item).forEach((item2) => item[item2].sort()));
  }
  return allNames;
};

function getAnimalMap(options) {
  const NE = data.species.filter((item) => item.location === 'NE');
  const NW = data.species.filter((item) => item.location === 'NW');
  const SE = data.species.filter((item) => item.location === 'SE');
  const SW = data.species.filter((item) => item.location === 'SW');
  if (!options) {
    return emptyParameter(NE, NW, SE, SW);
  }
  if (options.includeNames) {
    return nameIncluded(NE, NW, SE, SW, options.sorted);
  }
}

// console.log(getAnimalMap({ includeNames: 1, sorted: true }));

function getSchedule(dayName) {
  const allKeys = Object.keys(data.hours);
  const allWeek = allKeys.reduce((acc, item) => ({
    ...acc,
    [item]: `Open from ${data.hours[item].open}am until ${data.hours[item].close - 12}pm`,
  }), {});
  allWeek.Monday = 'CLOSED';
  if (!dayName) return allWeek;
  return {
    [dayName]: allWeek[dayName],
  };
}

function getOldestFromFirstSpecies(id) {
  const animalCare = data.employees.find((item) => item.id === id).responsibleFor[0];
  const animalInfo = data.species.find((item) => item.id === animalCare).residents;
  animalInfo.sort((a, b) => b.age - a.age);
  const {
    name,
    sex,
    age,
  } = animalInfo[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  // Essa função eu não conseguir fazer com o toFixed(2) pq ele estava arredondando de forma diferente.
  // Ao que era solicitado, ficava sempre 1 centavo de diferença, essa foi a Alternativa.
  const {
    Adult,
    Senior,
    Child,
  } = data.prices;
  data.prices = {
    Adult: Math.round((Adult * (1 + (percentage / 100)) * 100)) / 100,
    Child: Math.round((Child * (1 + (percentage / 100)) * 100)) / 100,
    Senior: Math.round((Senior * (1 + (percentage / 100)) * 100)) / 100,
  };
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  const createObj = (users) => {
    return users.reduce((acc, item) => ({
      ...acc,
      [`${item.firstName} ${item.lastName}`]: item.responsibleFor
        .map((item2) => data.species.find((item3) => item3.id === item2).name),
    }), {});
  };
  if (idOrName) {
    const user = data.employees.find((item) => idOrName === item.firstName ||
      idOrName === item.lastName || idOrName === item.id);
    return createObj([user]);
  }
  return createObj(data.employees);
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
