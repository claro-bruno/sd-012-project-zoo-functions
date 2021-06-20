// eslint no-unused-vars: [
//   "error",
//   {
//     "args": "none",
//     "vars": "local",
//     "varsIgnorePattern": "data"
//   }
// ]

const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) { return []; }
  const species = data.species
    .filter((specie) => ids.includes(specie.id));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  const findNameAnimal = data.species.find((element) => element.name === animal);
  const findAgeAnimal = findNameAnimal.residents.every((element2) => element2.age > age);
  return findAgeAnimal;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const getEmployee = data.employees
    .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  Object.assign(personalInfo, associatedWith);
  return personalInfo;
}

function isManager(id) {
  const getManagerData = data.employees;
  const findManager = getManagerData
    .some((element) => element.managers.some((element2) => element2 === id));
  return findManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmployeeInfo = createEmployee({ id, firstName, lastName },
    { managers, responsibleFor });
  data.employees.push(addEmployeeInfo);
}

function countAnimals(species) {
  const getAnimalCount = data.species;
  const newObjectAnimals = {};

  if (species) {
    const findAnimalCount = getAnimalCount
      .find((element) => element.name === species).residents.length;
    return findAnimalCount;
  }

  getAnimalCount.forEach((element) => {
    newObjectAnimals[element.name] = element.residents.length;
  });
  return newObjectAnimals;
}

function calculateEntry(entrants) {
  const getPrices = data.prices;

  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const totalAdults = Adult * getPrices.Adult;
  const totalSenior = Senior * getPrices.Senior;
  const totalChild = Child * getPrices.Child;
  const totalResult = totalAdults + totalSenior + totalChild;

  return totalResult;
}

function getAnimalMap(options = {}) {
  const newObject = { NE: [], NW: [], SE: [], SW: [] };
  if (!options.includeNames) {
    data.species.forEach((element) => newObject[element.location].push(element.name));
    return newObject;
  }
  data.species.forEach((element2) => {
    let { residents } = element2;
    if (options.sex) {
      residents = residents.filter((element4) => element4.sex === options.sex);
    }
    const mapName = residents.map((element3) => element3.name);
    if (options.sorted) {
      mapName.sort();
    }
    newObject[element2.location].push({ [element2.name]: mapName });
  });
  return newObject;
}

const convertHours = (hours) => {
  let getHours = 0;
  if (hours > 12) {
    getHours = hours - 12;
  }
  return getHours;
};

const getWeekObject = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function getSchedule(dayName) {
  let weekObject = {};
  const getHours = data.hours;

  if (dayName) {
    if (getHours[dayName].close === getHours[dayName].open) {
      weekObject[dayName] = 'CLOSED';
    } else {
      const openZoo = getHours[dayName].open;
      const closeZoo = getHours[dayName].close;
      weekObject[dayName] = `Open from ${openZoo}am until ${convertHours(closeZoo)}pm`;
    }
  } else {
    weekObject = getWeekObject;
  }
  return weekObject;
}

function getOldestFromFirstSpecies(id) {
  const getEmployessId = data.employees;
  const getDataSpecies = data.species;
  const resultFind = getEmployessId.find((element) => element.id === id);
  const positionID = resultFind.responsibleFor[0];
  const getIdAnimal = getDataSpecies.find((element2) => element2.id === positionID).residents;

  const resultReduce = getIdAnimal.reduce((aculador, atual) => {
    let getAculador = aculador;
    if (atual.age > aculador) {
      getAculador = atual.age;
    }
    return getAculador;
  }, 0);

  const findOldsetAnimal = Object.values(getIdAnimal
    .find((element3) => element3.age === resultReduce));

  return findOldsetAnimal;
}

function increasePrices(percentage) {
  const getPrices = Object.keys(data.prices);

  getPrices.forEach((element) => {
    data.prices[element] = Math.round((data.prices[element]
      + ((data.prices[element] * percentage) / 100)) * 100) / 100;
  });
}

function getEmployeeCoverage(/* idOrName */) {

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
