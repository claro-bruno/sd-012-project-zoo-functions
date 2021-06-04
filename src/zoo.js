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
  const newArray = [];
  ids.forEach((id) => {
    const isEqual = data.species.find((species) => id === species.id);
    if (isEqual !== undefined) {
      newArray.push(isEqual);
    }
  });
  return newArray;
}

function getAnimalsOlderThan(animal, age) {
  const species = data.species.find((specie) => specie.name === animal);
  return species.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === null || employeeName === undefined) {
    return {};
  }
  const rightEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return rightEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const manager = data.employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (species === undefined || species === null) {
    const newObject = {};
    data.species.forEach((creature) => {
      newObject[creature.name] = creature.residents.length;
    });
    return newObject;
  }
  const animal = data.species.find((specie) => specie.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === null || entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entries = Object.entries(entrants);
  const sum = entries.reduce((acc, currentValue) => {
    const sumAcc = acc + currentValue[1] * data.prices[currentValue[0]];
    return sumAcc;
  }, 0);
  return sum;
}

const locations = data.species.map((specie) => specie.location);

const positionAndAnimals = () => {
  const newObject = {};
  locations.forEach((location) => {
    const animalsLoc = data.species.filter((specie) => specie.location === location);
    const animalsFound = animalsLoc.map((name) => name.name);
    newObject[location] = animalsFound;
  });
  return newObject;
};

const positionAndNames = (sorted) => {
  const newObject = {};
  locations.forEach((location) => {
    const animalsLoc = data.species.filter((specie) => specie.location === location);
    const animalsFound = animalsLoc.map((name) => {
      const object = {};
      const names = name.residents.map((resident) => resident.name);
      if (sorted === true) {
        object[name.name] = names.sort();
      } else {
        object[name.name] = names;
      }
      return object;
    });
    newObject[location] = animalsFound;
  });
  return newObject;
};

const animalsAndGender = (sex, sorted) => {
  const newObject = {};
  locations.forEach((location) => {
    const animalsLoc = data.species.filter((specie) => specie.location === location);
    const animalsFound = animalsLoc.map((name) => {
      const object = {};
      const names = name.residents.filter((resident) => resident.sex === sex);
      const namesAndSex = names.map((maleOrFemale) => maleOrFemale.name);
      if (sorted === true) {
        object[name.name] = namesAndSex.sort();
      } else {
        object[name.name] = namesAndSex;
      }
      return object;
    });
    newObject[location] = animalsFound;
  });
  return newObject;
};

function getAnimalMap(options) {
  // Utilizei como referência o repositório do colega Luciano Almeida https://github.com/tryber/sd-012-project-zoo-functions/pull/83/commits/9ec7f1bf03cacc5c56f789a283be81d8a4ac8d6e

  if (options === undefined || options.includeNames === undefined) {
    return positionAndAnimals();
  }
  if (options.sex !== undefined) {
    return animalsAndGender(options.sex, options.sorted);
  }
  if (options.includeNames === true) {
    return positionAndNames(options.sorted);
  }
}

function getSchedule(dayName) {
  const dayEntries = Object.entries(data.hours);
  const object = {};
  dayEntries.forEach((day) => {
    if (day[1].open === 0) {
      object[day[0]] = 'CLOSED';
    } else {
      object[day[0]] = `Open from ${day[1].open}am until ${day[1].close % 12}pm`;
    }
    // Para resolver o problema da transformação da hora para am/pm utilizei a seguinte referência: https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
  });
  const newObject = {};
  newObject[dayName] = object[dayName];
  return (dayName === undefined || dayName === null) ? object : newObject;
}

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id);
  const animalId = person.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === animalId);
  const { residents } = animal;
  const ages = residents.map((resident) => resident.age).sort((a, b) => b - a);
  const oldestAnimal = residents.find((resident) => resident.age === ages[0]);
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  data.prices.Adult += (data.prices.Adult * (percentage / 100));
  data.prices.Adult = parseFloat((Math.round(data.prices.Adult * 100) / 100).toFixed(2));
  data.prices.Senior += (data.prices.Senior * (percentage / 100));
  data.prices.Senior = parseFloat((Math.round(data.prices.Senior * 100) / 100).toFixed(2));
  data.prices.Child += (data.prices.Child * (percentage / 100));
  data.prices.Child = parseFloat((Math.round(data.prices.Child * 100) / 100).toFixed(2));
}
// Para o arrendodamento usando (Math.round(data.prices.Child * 100) / 100) utilizei a fonte: https://stackoverflow.com/questions/10015027/javascript-tofixed-not-rounding

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined || idOrName === null) {
    const object = {};
    data.employees.forEach((employee) => {
      const { firstName, lastName, responsibleFor } = employee;
      const names = responsibleFor.map((name) => data.species
        .find((specie) => specie.id === name).name);
      object[`${firstName} ${lastName}`] = names;
    });
    return object;
  }
  const newObject = {};
  const people = data.employees.find((person) => person
    .id === idOrName || person.firstName === idOrName || person.lastName === idOrName);
  const { firstName, lastName, responsibleFor } = people;
  const names = responsibleFor.map((name) => data.species
    .find((specie) => specie.id === name).name);
  newObject[`${firstName} ${lastName}`] = names;
  return newObject;
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
