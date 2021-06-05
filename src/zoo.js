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

function getSpeciesByIds(...ids) {
  const filterSpecies = species.filter((specie) => ids.some((id) => specie.id === id));
  return filterSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const minAge = findAnimal.residents.every((animals) => animals.age >= age);
  return minAge;
}

function getEmployeeByName(employeeName = {}) {
  const findFirstName = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return findFirstName || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  const CreateNewEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return CreateNewEmployee;
}

function isManager(id) {
  const findIdManager = employees.find((employee) => employee.id === id);
  const collaborator = employees.filter((employee) => employee.managers.includes(findIdManager.id));
  if (collaborator.length > 1) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animals) {
  if (!animals) {
    const newObject = {};
    species.forEach(({ name, residents }) => { newObject[name] = residents.length; });
    return newObject;
  }
  const animal = species.find((specie) => specie.name === animals).residents.length;
  return animal;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const { Adult = 0,
    Child = 0,
    Senior = 0,
  } = entrants;

  const {
    Adult: adultPrice,
    Child: chilPrice,
    Senior: seniorPrice,
  } = prices;

  const someAllEntry = (Adult * adultPrice + Child * chilPrice + Senior * seniorPrice);
  return someAllEntry;
}

// function getAnimalMap(options) {
//   const { location } = species;
//   const regioes = ['NE', 'NW', 'SE', 'SW'];
// }

function getSchedule(dayName) {
  const daysWeek = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  if (typeof dayName === 'string') {
    return { [dayName]: daysWeek[dayName] };
  }

  return daysWeek;
}

function getOldestFromFirstSpecies(id) {
  const func = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === func)
    .residents.reduce((acc, crr) => {
      if (acc.age > crr.age) {
        return acc;
      }
      return crr;
    });
  return [animal.name, animal.sex, animal.age];
}

function increasePrices(percentage) {
  const porcent = percentage / 100;
  Object.keys(prices).map((price) => {
    prices[price] = Math.round(prices[price] * (porcent + 1) * 100) / 100;
    return prices[price];
  });
}
// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
