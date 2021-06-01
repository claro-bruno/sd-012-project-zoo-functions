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
  // seu código aqui
  const filteredByID = ids.map((id) => data.species.find((specie) => specie.id === id));
  return filteredByID;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) { return {}; }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    return data.species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entries) {
  // seu código aqui
  if (entries !== undefined) {
    const { Adult = 0, Child = 0, Senior = 0 } = entries;
    const { prices } = data;
    return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  }
  return 0;
}

// Requisito 9 - Não consegui fazer ainda

const animalLocation = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function getAnimalMap({ includeNames = false, sorted = false, sex }) {
  if (includeNames === false) {
    data.species.map(({ name, location }) => animalLocation[location].push(name));
  } else {
    data.species.map(({ name, location, residents }) => {
      const animalsName = residents.map((resident) => resident.name);
      // eslint-disable-next-line no-unused-expressions
      sorted === true ? animalsName.sort() : animalsName;
      console.log(animalsName);
      const obj = { [name]: animalsName };
      return animalLocation[location].push(obj);
    });
  }
  return animalLocation;
}

// console.log(getAnimalMap({ includeNames: true, sorted: true }));

function getSchedule(dayName) {
  // seu código aqui
  const daysOfWeek = Object.keys(data.hours);
  const objHours = daysOfWeek.reduce((acc, curr) => {
    const objHrs = data.hours;
    // eslint-disable-next-line no-return-assign
    acc[curr] = `Open from ${objHrs[curr].open}am until ${objHrs[curr].close - 12}pm`;
    if (curr === 'Monday') { acc[curr] = 'CLOSED'; }
    return acc;
  }, {});
  return dayName === undefined ? objHours : { [dayName]: objHours[dayName] };
}

console.log(getSchedule('Monday'));

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
