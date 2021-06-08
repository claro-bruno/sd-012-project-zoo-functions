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
      (animal) => animalsObj[`${animal.name}`] = animal.residents.length,
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



function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const objToArray = Object.entries(data.hours);
  const objSchedule = {};
  const objDay = {};
  objToArray.forEach(
    (
      schedule,
    ) => objSchedule[schedule[0]] = `Open from ${Object.values(schedule[1])[0]}am until ${Object.values(schedule[1])[1] - 12}pm`,
  );
  objSchedule.Monday = 'CLOSED';
  if (dayName === undefined) {
    return objSchedule;
  }
  const scheduleToArray = Object.entries(objSchedule);
  const findDayName = scheduleToArray.find((name) => dayName === name[0]);
  objDay[findDayName[0]] = findDayName[1];
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

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    const objCovarage = {};
    // const objName = {};
    data.employees.forEach((covarage) => objCovarage[`${covarage.firstName} ${covarage.lastName}`] = covarage.responsibleFor);
    console.log(objCovarage);
    console.log(objCovarage['Nigel Nelson'][0]); // 0938aa23-f153-4937-9f88-4858b24d6bce
    console.log(objCovarage['Nigel Nelson']); // [ '0938aa23-f153-4937-9f88-4858b24d6bce','e8481c1d-42ea-4610-8e11-1752cfc05a46' ]
    console.log(Object.entries(objCovarage));
    // const arrayName = objCovarage.map((id) => data.species.find((idAnimal) => id === idAnimal) console.log(`${idAnimal.name}`));
    // console.log('arrayName:', arrayName);
  }
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
