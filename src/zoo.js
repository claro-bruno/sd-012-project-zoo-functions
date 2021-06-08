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
  return ids.map((actualId) => data.species.find((actualAnimal) => actualAnimal.id === actualId));
}

function getAnimalsOlderThan(animalName, age) {
  const allAnimals = data.species.find((actualAnimal) => actualAnimal.name === animalName);
  return allAnimals.residents.every((currentAnimal) => currentAnimal.age > age);
}

function getEmployeeByName(employee) {
  if (typeof employee === 'undefined') {
    return {};
  }
  const elements = data.employees;
  return elements.find((actual) => actual.firstName === employee || actual.lastName === employee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.find((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof species === 'undefined') {
    return data.species.reduce((accumulator, animalSpecie) => {
      accumulator[animalSpecie.name] = animalSpecie.residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants = {}) {
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;

  return (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
}

function getAnimalMap() {
  const animals = data.species;

  const locations = animals.reduce((acc, current) => {
    acc[current.location] = [];
    return acc;
  }, {});

  Object.keys(locations).forEach((key) => {
    const arrayAnimals = data.species.filter((currentAnimal) => currentAnimal.location === key);
    const nameAnimals = arrayAnimals.map((animal) => animal.name);
    locations[key] = nameAnimals;
  });
  return locations;
}

const msgReturn = (acc, day) => {
  const { open, close } = data.hours[day];
  const msg = `Open from ${open}am until ${close - 12}pm`;
  acc[day] = (open > 0 && close > 0) ? msg : 'CLOSED';
  return acc;
};

function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  if (typeof dayName === 'undefined') {
    return days.reduce((accumulator, day) => msgReturn(accumulator, day), {});
  }

  const obj = {};
  return msgReturn(obj, dayName);
}

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((people) => people.id === id).responsibleFor[0];
  const individuals = data.species.find((current) => current.id === animal).residents;
  let oldest = individuals[0].age;
  individuals.map((currentAnimal) => {
    if (currentAnimal.age > oldest) {
      oldest = currentAnimal;
    }
    return oldest;
  });
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const arrayKeys = Object.keys(data.prices);

  return arrayKeys.forEach((element) => {
    const base100 = data.prices[element] * 100;
    const newValue = Math.round(base100 + (base100 * (percentage / 100))) / 100;
    data.prices[element] = parseFloat(newValue.toFixed(2));
  });
}

const getResponsibleFor = (employeesObj) => {
  const { employees: allEmployees, species } = data;

  const employeesNames = Object.keys(employeesObj);
  employeesNames.forEach((currentName) => {
    const firstName = currentName.split(' ')[0];
    const employee = allEmployees.filter((people) => people.firstName === firstName);
    const animalsId = employee[0].responsibleFor;

    animalsId.forEach((currentId) => {
      const animal = species.filter((currentAnimal) => currentAnimal.id === currentId)[0].name;
      employeesObj[currentName].push(animal);
    });
  });
};

const createObjSinglePeople = (filter) => {
  const [people] = filter;
  const obj = {};
  obj[`${people.firstName} ${people.lastName}`] = [];
  getResponsibleFor(obj);
  return obj;
};

const getSinglePeople = (idOrName) => {
  let people = data.employees.filter((currentPeople) => currentPeople.id === idOrName);
  if (people.length > 0) {
    return createObjSinglePeople(people);
  }

  people = data.employees.filter((currentPeople) => currentPeople.firstName === idOrName);
  if (people.length > 0) {
    return createObjSinglePeople(people);
  }

  people = data.employees.filter((currentPeople) => currentPeople.lastName === idOrName);
  if (people.length > 0) {
    return createObjSinglePeople(people);
  }
};

function getEmployeeCoverage(idOrName) {
  const { employees: allEmployees } = data;

  if (typeof idOrName === 'undefined') {
    const employeesObj = allEmployees.reduce((accumulator, current) => {
      const name = `${current.firstName} ${current.lastName}`;
      accumulator[name] = [];
      return accumulator;
    }, {});
    getResponsibleFor(employeesObj);
    return employeesObj;
  }
  return getSinglePeople(idOrName);
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
