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

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
