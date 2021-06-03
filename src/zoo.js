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
  if (ids.length === 0) {
    return ids;
  }
  const species = [];
  ids.forEach((idFor) => {
    const array = data.species.filter(({ id }) => idFor === id);
    species.push(array[0]);
  });
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimal = data.species.find((specie) => specie.name === animal);
  const minimalAge = getAnimal.residents.every((resident) => resident.age >= age);
  return minimalAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employee = data.employees.find((employeeFind) => employeeFind.firstName === employeeName
  || employeeFind.lastName === employeeName);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmplyee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmplyee;
}

function isManager(id) {
  // seu código aqui
  const bool = data.employees.some((employee) => employee.managers.some((manID) => manID === id));
  return bool;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    const animals = {};
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }
  const animal = data.species.find((specie) => specie.name === species);
  return animal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.entries(entrants).length === 0) {
    return 0;
  }
  const age = Object.keys(entrants);
  const people = Object.values(entrants);
  let result = 0;
  age.forEach((key, index) => {
    result += data.prices[key] * people[index];
  });
  return result;
}

function getAnimalMap(/* options */) {
  // seu código aqui
}

const getScheduleAux = (days, values, dayName) => {
  const obj = {};
  let dayIndex = 0;
  const dayGeted = days.find((day, index) => {
    if (day === dayName) {
      dayIndex = index;
      return day;
    }
    return null;
  });
  if (values[dayIndex].open === 0) {
    obj[dayGeted] = 'CLOSED';
  } else {
    obj[dayGeted] = `Open from ${values[dayIndex].open}am until ${values[dayIndex].close - 12}pm`;
  }
  return obj;
};

function getSchedule(dayName) {
  // seu código aqui
  const days = Object.keys(data.hours);
  const values = Object.values(data.hours);
  if (dayName === undefined) {
    const week = {};
    days.forEach((day, index) => {
      if (values[index].open === 0) {
        week[day] = 'CLOSED';
      } else {
        week[day] = `Open from ${values[index].open}am until ${values[index].close - 12}pm`;
      }
    });
    return week;
  }
  return getScheduleAux(days, values, dayName);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((employeeFind) => employeeFind.id === id);
  const animal = data.species.find((specie) => specie.id === employee.responsibleFor[0]);
  const olderAnimal = animal.residents.reduce((acc, curr) => {
    if (curr.age > acc.age) {
      return curr;
    }
    return acc;
  });
  return Object.values(olderAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  /* Consultei o stack overflow para conseguir sanar o problema do arredondamento da casa decimal.
  https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary */
  const { Adult, Senior, Child } = data.prices;
  const newAdultPrice = Math.round((Adult + ((Adult * percentage) / 100)) * 100) / 100;
  const newSeniorPrice = Math.round((Senior + ((Senior * percentage) / 100)) * 100) / 100;
  const newChildPrice = Math.round((Child + ((Child * percentage) / 100)) * 100) / 100;
  data.prices = {
    Adult: newAdultPrice,
    Senior: newSeniorPrice,
    Child: newChildPrice,
  };
}

const getEmployeeCoverageAux = (idOrName) => {
  const employeeInfo = {};
  let employee = {};
  data.employees.forEach(({ id, firstName, lastName }, index) => {
    if (id === idOrName || firstName === idOrName || lastName === idOrName) {
      employee = data.employees[index];
    }
  });
  const animalsID = employee.responsibleFor;
  const animalsNames = [];
  animalsID.forEach((id) => {
    const animal = data.species.find((specie) => specie.id === id);
    animalsNames.push(animal.name);
  });
  employeeInfo[`${employee.firstName} ${employee.lastName}`] = animalsNames;
  return employeeInfo;
};

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const employeeInfo = {};
  if (idOrName === undefined) {
    data.employees.forEach((employee) => {
      const animalsID = employee.responsibleFor;
      const animalsNames = [];
      animalsID.forEach((id) => {
        const animal = data.species.find((specie) => specie.id === id);
        animalsNames.push(animal.name);
      });
      employeeInfo[`${employee.firstName} ${employee.lastName}`] = animalsNames;
    });
    return employeeInfo;
  }
  return getEmployeeCoverageAux(idOrName);
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
