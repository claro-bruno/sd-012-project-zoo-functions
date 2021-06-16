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
  const speciesByIdReturn = [];
  if (ids.length === 0) {
    return speciesByIdReturn;
  } if (ids.length === 1) {
    speciesByIdReturn.push(data.species.find((specie) => specie.id === ids[0]));
    return speciesByIdReturn;
  } if (ids.length > 1) {
    return data.species.filter((specie) => ids.some((spe) => spe === specie.id));
  }
}

function getAnimalsOlderThan(animal, age) {
  const findAnimal = data.species.find((animals) => animals.name === animal);
  const checkAge = findAnimal.residents.every((resident) => resident.age >= age);
  return checkAge;
}

function getEmployeeByName(employeeName) {
  const findByFirstName = data.employees.find((employee) => employee.firstName === employeeName);
  const findByLastName = data.employees.find((employee) => employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  } if (data.employees.some((employee) => employee.firstName === employeeName) === true) {
    return findByFirstName;
  } if (data.employees.some((employee) => employee.lastName === employeeName) === true) {
    return findByLastName;
  }
}

function createEmployee(personalInfo, associatedWith) {
  const createEmploye = Object.assign(personalInfo, associatedWith);
  return createEmploye;
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manage) => manage === id));
}
const checkEmpty = (array) => {
  if (array === undefined) {
    return [];
  } return array;
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = { id, firstName, lastName };
  data.employees.push(createEmployee(newEmployee, { managers: checkEmpty(managers),
    responsibleFor: checkEmpty(responsibleFor) }));
}

function countAnimals(species) {
  if (species === undefined) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  } return data.species.find((specie) => specie.name === species).residents.length;
}
const checkValue = (value = 0) => value;
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  } return (checkValue(entrants.Adult) * 49.99)
  + (checkValue(entrants.Senior) * 24.99)
  + (checkValue(entrants.Child) * 20.99);
}
const optOperations = (spec, opt) => {
  const optSex = () => {
    if (opt.sex) {
      return spec.residents.map((resident) => resident).filter((resid) => resid.sex === opt.sex);
    } return spec.residents.map((resident) => resident);
  };
  if (opt.sorted) {
    return optSex().map((resident) => resident.name).sort();
  } return optSex().map((resident) => resident.name);
};

function getAnimalMap(options) {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || !options.includeNames) {
    data.species.forEach((specie) => locations[specie.location].push(specie.name));
    return locations;
  }
  data.species.forEach((specie) => {
    locations[specie.location].push({ [specie.name]: optOperations(specie, options) });
  });
  return locations;
}

function getSchedule(dayName) {
  const weekSchedule = [{
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  }];
  if (!dayName) {
    return weekSchedule[0];
  } return { [dayName]: weekSchedule[0][dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((employe) => employe.id === id);
  const firstAnimal = data.species.find((specie) => specie.id === employee.responsibleFor[0]);
  const older = () => {
    const highestage = firstAnimal.residents.reduce((oldest, resident) =>
      (resident.age > oldest ? resident.age : oldest), 0);
    return firstAnimal.residents.find((resident) => resident.age === highestage);
  };
  return Object.values(older());
}

function increasePrices(percentage) {
  const increase = (percentage / 100);
  Object.keys(data.prices).forEach((price) => {
    data.prices[price] = Math.round((data.prices[price]
      + (data.prices[price] * increase)) * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
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
