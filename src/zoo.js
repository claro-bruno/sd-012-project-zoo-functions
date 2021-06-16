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

const { species } = require('./data');

const { employees } = data;

const { prices } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const speciesIds = species.filter((specie) => ids.includes(specie.id));
  return speciesIds;
}

function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((specie) => specie.name === animal);
  const checkAge = getAnimal.residents.every((resident) => resident.age >= age);
  return checkAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const eN = employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
  return eN;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const eManager = data.employees.find((employee) => employee.managers.includes(id));
  if (eManager) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmp = data.employees.push({ id, firstName, lastName, managers, responsibleFor });
  return newEmp;
}

function countAnimals(speciesName) {
  const allAnimals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});

  if (!speciesName) {
    return allAnimals;
  }
  return allAnimals[speciesName];
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
}

// Consultei o git do colega: https://github.com/tryber/sd-012-project-zoo-functions/pull/33
const option = () => {
  const animalsFind = (localization) => species.filter((specie) =>
    specie.location === localization).map((specie2) => specie2.name);
  const place = ['NE', 'NW', 'SE', 'SW'];
  const result = {};
  const animalType = place.map((localization) => animalsFind(localization));
  place.forEach((key, index) => {
    result[key] = animalType[index];
  });
  return result;
};

const animalSex = (localization, index, sex = undefined, sorted = undefined) => {
  let findAnimalSex;
  if (sex === undefined) {
    findAnimalSex = species.filter((specie) => specie.location === localization)
      .map((specie2) => specie2.residents.map((name) => name.name))[index];
  } else {
    findAnimalSex = species.filter((specie) => specie.location === localization)
      .map((specie2) => (specie2.residents.filter((specie) => specie.sex === sex)
        .map((name) => name.name)))[index];
  }
  let ordemTrueFalse;
  if (sorted === true) {
    ordemTrueFalse = findAnimalSex.sort();
  } else {
    ordemTrueFalse = findAnimalSex;
  }
  return ordemTrueFalse;
};

const iLocation = (localizations) => species.map((localization) => localization.location)
  .filter((loc) => loc === localizations);

const animalLocation = (localization, index) => species.filter((specie) =>
  specie.location === localization).map((specie2) => specie2.name)[index];

const ObjectTypeNames = (localization, index, sex, sorted) => {
  const object = {
    [animalLocation(localization, index)]:
      animalSex(localization, index, sex, sorted),
  };
  return object;
};

const arrayNames = (localization, sex, sorted) => {
  const array = [];
  const local = iLocation(localization);
  for (let i = 0; i < local.length; i += 1) {
    array.push(ObjectTypeNames(localization, i, sex, sorted));
  }
  return array;
};

const getAnimalMap = (options = undefined) => {
  if (options === undefined || options.includeNames === undefined) {
    return option();
  }
  const { sex = undefined, sorted = undefined } = options;
  const cardinal = ['NE', 'NW', 'SE', 'SW'];
  const object = {};
  cardinal.forEach((key) => {
    object[key] = arrayNames(key, sex, sorted);
  });
  return object;
};
// Fim Requisito 9

function getSchedule(dayName) {
  const time = Object.keys(data.hours);
  const agenda = time.reduce((acc, curr) => {
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    return acc;
  }, {});
  agenda.Monday = 'CLOSED';
  if (time.includes(dayName) === true) {
    return { [dayName]: agenda[dayName] };
  }
  return agenda;
}

function getOldestFromFirstSpecies(id) {
  const empId = data.employees.find((employee) => employee.id === id);
  const empLeader = empId.responsibleFor;
  const speciesOfId = (...responsibleFor) => data.species
    .filter((specie) => responsibleFor.includes(specie.id));
  const specieId = speciesOfId(...empLeader).reduce((acc, curr) => {
    const { residents } = curr;
    acc.push(...residents);
    return acc;
  }, []);
  specieId.sort((a, b) => b.age - a.age);
  return Object.values(specieId[0]);
}

// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function increasePrices(percentage) {
  const number = 1 + (percentage / 100);
  const value = Object.keys(prices);
  value.forEach((key) => {
    const priceIncreased = prices[key] * number;
    const priceRounded = Math.round(priceIncreased * 100) / 100;
    prices[key] = priceRounded;
  });
}
// Consultei o Projeto https://github.com/tryber/sd-012-project-zoo-functions/blob/caroline-benichio-zoo-functions-project/src/zoo.js
function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    const duty = data.employees.reduce((acc, curr) => {
      const animalId = (id) => data.species.find((specie) => specie.id === id).name;
      const animals = curr.responsibleFor.map(animalId);
      acc[`${curr.firstName} ${curr.lastName}`] = animals;
      return acc;
    }, {});
    return duty;
  }
  const request = data.employees.filter(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  const result = request.reduce((acc, curr) => {
    const animalId2 = (id) => data.species.find((specie) => specie.id === id).name;
    const animals2 = curr.responsibleFor.map(animalId2);
    acc[`${curr.firstName} ${curr.lastName}`] = animals2;
    return acc;
  }, {});
  return result;
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
