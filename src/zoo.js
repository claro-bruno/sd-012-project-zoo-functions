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

function getSpeciesByIds(...ids) {
  const speciesArray = ids.map((id) => species.find((specie) => specie.id === id));
  return speciesArray;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const minAge = findAnimal.residents.every((resident) => resident.age >= age);
  return minAge;
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};
  const employerName = employees.find((employer) => {
    const findName = employer.firstName === employeeName || employer.lastName === employeeName;
    return findName;
  });
  return employerName;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployer = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployer;
}

function isManager(id) {
  const manager = employees.some((employer) => employer.managers.find((any) => any === id));

  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employer = { id, firstName, lastName, managers, responsibleFor };
  employees.push(employer);
}

function countAnimals(specieAnimal) {
  if (typeof specieAnimal === 'undefined') {
    const animals = {};
    species.forEach((specie) => { animals[specie.name] = specie.residents.length; });
    return animals;
  }
  const animalsFind = species.find((specie) => specie.name === specieAnimal).residents.length;
  return animalsFind;
}
function calculateEntry(entrants) {
  if (typeof entrants === 'undefined') return 0;
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const priceAdult = Adult * prices.Adult;
  const priceSenior = Senior * prices.Senior;
  const priceChild = Child * prices.Child;
  const total = priceAdult + priceSenior + priceChild;

  return total;
}

/* function getAnimalMap(options) {
  // seu código aqui
} */

function getSchedule(dayName) {
  const schedule = {
    Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
    Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
    Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
    Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
    Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
    Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
    Monday: 'CLOSED',
  };
  if (typeof dayName === 'undefined') return schedule;

  const specificdayObj = {};
  const scheduleArray = Object.entries(schedule);
  const specificDay = scheduleArray.find((string) => string[0] === dayName);
  const [index0, index1] = specificDay;
  specificdayObj[index0] = index1;
  console.log(specificdayObj);
  return specificdayObj;
}

function getOldestFromFirstSpecies(id) {
  const findEmployer = employees.find((employer) => {
    const findId = employer.id === id;
    return findId;
  });
  const findAnimal = species.find((specie) => specie.id === findEmployer.responsibleFor[0]);
  const findResidents = findAnimal.residents.filter((animal) => animal.age);
  const findOlder = findResidents.reduce((acc, curr) => {
    if (acc.age > curr.age) return acc;
    return curr;
  });
  const olderArray = [findOlder.name, findOlder.sex, findOlder.age];
  return olderArray;
}

function increasePrices(percentage) {
  let { Adult, Senior, Child } = prices;
  Adult += (Adult * (percentage / 100));
  Senior += (Senior * (percentage / 100));
  Child += (Child * (percentage / 100));
  prices.Adult = Math.round((Adult + Number.EPSILON) * 100) / 100;
  prices.Senior = Math.round((Senior + Number.EPSILON) * 100) / 100;
  prices.Child = Math.round((Child + Number.EPSILON) * 100) / 100;
}

/* function getEmployeeCoverage(idOrName) {
  // seu código aqui
} */

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,

  /*   getAnimalMap, */
  getSpeciesByIds,
  getEmployeeByName,
  /*   getEmployeeCoverage, */
  addEmployee,
  isManager,
  getAnimalsOlderThan,

  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
