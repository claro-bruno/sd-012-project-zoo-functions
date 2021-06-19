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

// const { species } = require('./data');
// const { hours } = require('./data');
const { prices } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length > 0) {
    const especie = data.species.filter(
      (animal) => ids.find(
        (idInput) => idInput === animal.id,
      ) === animal.id,
    );
    return especie;
  }
}

function getAnimalsOlderThan(animal, age) {
  const verifyAnimal = data.species.find((animalSpecie) => animalSpecie.name === animal);
  const verifyOlderThan = verifyAnimal.residents.every((resident) => resident.age > age);
  console.log(verifyOlderThan);
  return verifyOlderThan;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const nameArray = {};
    return nameArray;
  }
  const verifyNames = data.employees.find(
    (name) => name.firstName === employeeName || name.lastName === employeeName,
  );
  return verifyNames;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const someManager = data.employees.some(
    (employee) => employee.managers.find(
      (manager) => manager === id,
    ) === id,
  );
  return someManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const inputArray = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (managers === undefined || responsibleFor.length === undefined) {
    inputArray.managers = [];
    inputArray.responsibleFor = [];
    return data.employees.push(inputArray);
  }
  return data.employees.push(inputArray);
}

function countAnimals(especie) {
  const animalsObj = {};
  if (especie === undefined) {
    data.species.forEach(
      (animal) => {
        animalsObj[`${animal.name}`] = animal.residents.length;
      },
    );
    return animalsObj;
  }
  const findAnimals = data.species.find((animal) => animal.name === especie);
  const findresidents = findAnimals.residents.length;
  return findresidents;
}

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  let senior = entrants.Senior;
  let child = entrants.Child;
  let adult = entrants.Adult;
  if (child === undefined) child = 0;
  if (senior === undefined) senior = 0;
  if (adult === undefined) adult = 0;
  const price = prices.Adult * adult + prices.Child * child + prices.Senior * senior;
  return price;
}

function local(objj, filterAllLocations, options) {
  const obj = objj;
  filterAllLocations.forEach((location) => {
    obj[location] = obj[location].map((especieName) => {
      const objAnimals = {};
      let findAnimals = data.species.find((objeto) => objeto.name === especieName).residents;
      if (options.sex) findAnimals = findAnimals.filter((animal) => animal.sex === options.sex);
      const mapNames = findAnimals.map((objeto) => objeto.name);
      if (options.sorted === true) mapNames.sort();
      objAnimals[especieName] = mapNames;
      return objAnimals;
    });
  });
}

function Locations(objj, filterAllLocations) {
  const obj = objj;
  filterAllLocations.forEach((location) => {
    const filterLocation = data.species.filter((especie) => especie.location === location);
    const mapName = filterLocation.map((animal) => `${animal.name}`);
    obj[location] = mapName;
  });
}

function getAnimalMap(options) {
  const obj = {};
  const mapAllLocations = data.species.map((especie) => especie.location);
  const filterAllLocations = mapAllLocations
    .filter((elemento, index) => mapAllLocations.indexOf(elemento) === index);
  Locations(obj, filterAllLocations);
  if (!options || !options.includeNames) return obj;
  local(obj, filterAllLocations, options);
  if (options.includeNames === true) return obj;
}

function getSchedule(dayName) {
  const objSchedule = {};
  const objDay = {};
  Object.entries(data.hours).forEach(
    (schedule) => {
      objSchedule[
        schedule[0]] = `Open from ${
        Object.values(schedule[1])[0]}am until ${Object.values(schedule[1])[1] - 12}pm`;
    },
  );
  objSchedule.Monday = 'CLOSED';
  if (dayName === undefined) {
    return objSchedule;
  }
  const scheduleToArray = Object.entries(objSchedule);
  const findDayName = scheduleToArray.find((name) => dayName === name[0]);
  const [firstDayName, secondDayName] = findDayName;
  objDay[firstDayName] = secondDayName;
  return objDay;
}

function getOldestFromFirstSpecies(id) {
  const findId = data.employees.find((employee) => id === employee.id);
  const findIdAnimals = data.species.find((species) => findId.responsibleFor[0] === species.id);
  const sortOldest = findIdAnimals.residents.sort((animalA, animalB) => animalB.age - animalA.age);
  const oldest = Object.values(sortOldest[0]);
  return oldest;
}

// Utilizar um ForEach
function increasePrices(percentage) {
  data.prices.Adult = Math.round(
    (data.prices.Adult + data.prices.Adult * percentage * 0.01
    ) * 100,
  ) / 100;
  data.prices.Senior = Math.round(
    (data.prices.Senior + data.prices.Senior * percentage * 0.01
    ) * 100,
  ) / 100;
  data.prices.Child = Math.round(
    (data.prices.Child + data.prices.Child * percentage * 0.01
    ) * 100,
  ) / 100;
}

// function getEmployeeCoverage(idOrName) {
// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
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
