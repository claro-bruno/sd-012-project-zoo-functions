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
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  if (ids.length >= 1) {
    return data.species.filter((element, index) => element.id === ids[index]);
  }
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = data.species.find((species) => species.name === animal);
  return specie.residents.every((specimen) => specimen.age >= age);
}

function getEmployeeByName(...employeeName) {
  // seu código aqui
  if (employeeName.length === 0) {
    return {};
  }
  const employee = data.employees.find((person) =>
    person.firstName === employeeName[0] || person.lastName === employeeName[0]);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((element) => element.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const person = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(person);
  // return person;
}

function countAnimals(species) {
  // seu código aqui
  if (!species) {
    const animalHeadCount = {};
    data.species.forEach(({ name, residents }) => {
      animalHeadCount[name] = residents.length;
    });
    return animalHeadCount;
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  const { Child: childNumber = 0, Adult: adultNumber = 0, Senior: seniorNumber = 0 } = entrants;
  const { Child: childPrice, Adult: adultPrice, Senior: seniorPrice } = data.prices;
  return childNumber * childPrice + adultNumber * adultPrice + seniorNumber * seniorPrice;
}

function getAnimalMap(directions) {
  // seu código aqui
  // if (!options) {
  directions.forEach((place) => {
    const locality = data.species.filter(({ location }) => location === place);
  });
}
const directions = ['NE', 'NW', 'SE', 'SW'];

// if (element.location === 'NE') {
//   animalsByLocation.NE.push(element.name);
// }
// if (element.location === 'NW') {
//   animalsByLocation.NW.push(element.name);
// }
// if (element.location === 'SE') {
//   animalsByLocation.SE.push(element.name);
// }
// if (element.location === 'SW') {
//   animalsByLocation.SW.push(element.name);
// }
// });
// return animalsByLocation;
// }
// }
// }
const days = Object.keys(data.hours);
const time = Object.values(data.hours);
function getSchedule(dayName) {
  const schedule = {};
  days.forEach((day, index) => {
    if (day !== 'Monday') {
      schedule[day] = `Open from ${time[index].open}am until ${time[index].close - 12}pm`;
    } else {
      schedule[day] = 'CLOSED';
    }
  });
  if (!dayName) {
    return schedule;
  }
  if (dayName !== 'Monday') {
    const daySchedule = data.hours[dayName];
    return {
      [dayName]: `Open from ${daySchedule.open}am until ${daySchedule.close - 12}pm`,
    };
  }
  return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
