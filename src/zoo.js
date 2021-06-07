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
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  const arraySpecie = ids.map((idi) =>
    species
      .find(({ id }) => id === idi));
  return arraySpecie;
}

function getAnimalsOlderThan(animal, agee) {
  // seu código aqui
  const minimumAge = species.find(({ name }) => name === animal)
    .residents.every(({ age }) => age >= agee);
  return minimumAge;
}

function getEmployeeByName(e) {
  // seu código aqui
  if (!e) return {};

  const emplObject = employees.find(({ firstName, lastName }) => firstName === e || lastName === e);
  return emplObject;
}

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {
  // seu código aqui
  const manager = employees.some(({ managers }) =>
    managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objeto = { id, firstName, lastName, managers, responsibleFor };
  employees.push(objeto);
}

function countAnimals(specieS) {
  // seu código aqui
  const obj = {};
  if (!specieS) {
    species
      .forEach(({ name, residents }) => {
        obj[name] = residents.length;
      });
    return obj;
  }
  const okArguments = species
    .find(({ name }) => name === specieS)
    .residents.length;
  return okArguments;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrices, Senior: seniorPrices, Child: childPrices } = prices;

  const total = (Adult * adultPrices) + (Senior * seniorPrices) + (Child * childPrices);

  return total;
}

function generateAnimalsLocation(arrayCoord) {
  return arrayCoord.reduce((object, coord) => {
    const objectCoord = object;
    const arraySpecies = species
      .filter(({ location }) => location === coord)
      .map(({ name }) => name);
    objectCoord[coord] = arraySpecies;
    return objectCoord;
  }, {});
}

function generateSpeciesName(arrayAnimal, options) {
  return arrayAnimal.reduce((array, specieName) => {
    const object = {};
    let arrayNames = species.find(({ name }) => name === specieName)
      .residents;
    if (options.sex) arrayNames = arrayNames.filter(({ sex }) => sex === options.sex);
    arrayNames = arrayNames.map(({ name }) => name);
    if (options.sorted) arrayNames.sort();
    object[specieName] = arrayNames;
    array.push(object);
    return array;
  }, []);
}
// resolução do colega de Trybe David Gonzaga https://github.com/tryber/sd-012-project-zoo-functions/blob/9aeb2d40fe827dfdf5a009b871a8dba52bd9c89e/src/zoo.js

function getAnimalMap(options) {
  // seu código aqui
  const coords = ['NE', 'NW', 'SE', 'SW'];
  const animalsLocation = generateAnimalsLocation(coords);
  const namesLocation = {};
  if (!options || !options.includeNames) return animalsLocation;
  coords.forEach((key) => {
    namesLocation[key] = generateSpeciesName(animalsLocation[key], options);
  });
  return namesLocation;
}

function getSchedule(dayName) {
  // seu código aqui
  const obj = {};
  const keys = Object.keys(hours);
  keys.forEach((key) => {
    const { open, close } = hours[key];
    if (key === 'Monday') {
      obj[key] = 'CLOSED';
    } else {
      obj[key] = `Open from ${open}am until ${close - 12}pm`;
    }
  });

  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employedPerson = employees.find((employee) => employee.id === id);
  const firstResponsableFor = employedPerson.responsibleFor[0];
  const kindOfAnimal = species.find((specie) => specie.id === firstResponsableFor);
  const oldestAnimal = kindOfAnimal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices)
    .forEach((key) => {
      const base100 = prices[key] * 100;
      const newValue = Math.round(base100 * ((percentage / 100) + 1)) / 100;
      prices[key] = Number(newValue.toFixed(2));
    });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const obj = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    obj[`${firstName} ${lastName}`] = responsibleFor
      .map((aidi) => species.find(({ id }) => id === aidi).name);
  });
  if (!idOrName) {
    return obj;
  }
  const employee = employees.find(({ id, firstName, lastName }) =>
    idOrName === id || idOrName === firstName || idOrName === lastName);
  const animal = employee.responsibleFor
    .map((aidi) => species.find(({ id }) => id === aidi).name);
  return { [`${employee.firstName} ${employee.lastName}`]: animal };
}
console.log(getEmployeeCoverage('Azevado'));

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
