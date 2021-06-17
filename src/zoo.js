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
  const speciesById = [];
  ids.forEach((id) => {
    const species = data.species.find((specie) => specie.id === id);
    speciesById.push(species);
  });
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((specie) => specie.name === animal);
  const olderThan = findAnimal.residents.every((resident) => resident.age >= age);
  return olderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = data.employees
    .find((employee) => employee.firstName === employeeName || employeeName === employee.lastName);
  return findEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  let checkManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manage) => manage === id)) {
      checkManager = true;
      return checkManager;
    }
  });
  return checkManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const allSpecies = {};
    data.species.forEach((specie) => {
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  const countSpecie = data.species.find((specie) => specie.name === species)
    .residents.length;
  return countSpecie;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length < 1) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const totalPrice = (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
  return totalPrice;
}

const getNames = ({ sex = false, sorted = false }, specie) => {
  let arrayName = [];
  if (sex) {
    arrayName = specie.residents.filter((resident) => resident.sex === sex)
      .map((resident) => resident.name);
  } else {
    arrayName = specie.residents.map((resident) => resident.name);
  }
  if (sorted) {
    return arrayName.sort();
  }
  return arrayName;
};

function getAnimalMap(options) {
  const animalsMap = {};
  const neAnimalsLocale = data.species.filter((specie) => specie.location === 'NE');
  const nwAnimalsLocale = data.species.filter((specie) => specie.location === 'NW');
  const seAnimalsLocale = data.species.filter((specie) => specie.location === 'SE');
  const swAnimalsLocale = data.species.filter((specie) => specie.location === 'SW');
  if (!options || !options.includeNames) {
    return {
      NE: neAnimalsLocale.map((specie) => specie.name),
      NW: nwAnimalsLocale.map((specie) => specie.name),
      SE: seAnimalsLocale.map((specie) => specie.name),
      SW: swAnimalsLocale.map((specie) => specie.name),
    };
  }
  animalsMap.NE = neAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  animalsMap.NW = nwAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  animalsMap.SE = seAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  animalsMap.SW = swAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  return animalsMap;
}

function getSchedule(dayName) {
  if (!dayName) {
    const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;
    return {
      Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
      Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
      Thursday: `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
      Friday: `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
      Saturday: `Open from ${Saturday.open}am until ${Saturday.close - 12}pm`,
      Sunday: `Open from ${Sunday.open}am until ${Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
  }
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  const dayReturn = Object.entries(data.hours).find((day) => day[0] === dayName);
  return {
    [dayReturn[0]]: `Open from ${dayReturn[1].open}am until ${dayReturn[1].close - 12}pm`,
  };
}

function getOldestFromFirstSpecies(id) {
  const getFirstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const olderAnimal = data.species.find((specie) => specie.id === getFirstSpecie)
    .residents.reduce((acc, age) => {
      if (acc.age > age.age) return acc;
      return age;
    });
  const arrayAnimal = Object.values(olderAnimal);
  return arrayAnimal;
}

function increasePrices(percentage) {
  const { Adult: adult, Child: child, Senior: senior } = data.prices;
  data.prices.Adult = Math.round((adult + adult * (percentage / 100)) * 100) / 100;
  data.prices.Child = Math.round((child + child * (percentage / 100)) * 100) / 100;
  data.prices.Senior = Math.round((senior + senior * (percentage / 100)) * 100) / 100;
}

function findResposibles(employee) {
  const responsible = employee.responsibleFor.map((respon) => {
    const animals = data.species.find((specie) => specie.id === respon);
    return animals.name;
  });
  return responsible;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    const employeeAnimals = data.employees.reduce((acc, employee) => {
      const name = `${employee.firstName} ${employee.lastName}`;
      const responsible = findResposibles(employee);
      acc[name] = responsible;
      return acc;
    }, {});
    return employeeAnimals;
  }
  const findEmployee = data.employees
    .find((employ) =>
      employ.firstName === idOrName || employ.lastName === idOrName || employ.id === idOrName);
  const employeeName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  const responsible = findResposibles(findEmployee);
  return { [employeeName]: responsible };
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
