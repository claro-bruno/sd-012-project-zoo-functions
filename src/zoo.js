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

const locations = ['NE', 'NW', 'SE', 'SW'];
const animalMap = {};

const sortAnimals = (sorted, animalsArray) => {
  if (sorted) {
    return animalsArray.sort();
  }
  return animalsArray;
};

const sexFilter = (sex, animal) => {
  let animalResidentsMap;
  if (sex !== '') {
    animalResidentsMap = animal.residents
      .filter((resident) => resident.sex === sex)
      .map((resident) => resident.name);
  } else {
    animalResidentsMap = animal.residents.map((resident) => resident.name);
  }
  return animalResidentsMap;
};

const getEmployee = (idOrName) => {
  const employeeCoverage = {};
  const employeeFound = data.employees.find(
    (employe) =>
      employe.id === idOrName
      || employe.firstName === idOrName
      || employe.lastName === idOrName,
  );
  const animalName = employeeFound.responsibleFor.map((resposible) => {
    const animalId = data.species.find((animal) => animal.id === resposible);
    return animalId.name;
  });
  employeeCoverage[`${employeeFound.firstName} ${employeeFound.lastName}`] = animalName;
  return employeeCoverage;
};

function getSpeciesByIds(...ids) {
  // seu código aqui
  let speciesFiltred = [];
  ids.forEach((id) => {
    const specieFiltred = data.species.filter((specie) => specie.id === id);
    speciesFiltred = [...speciesFiltred, ...specieFiltred];
  });
  return speciesFiltred;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = data.species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName = '') {
  // seu código aqui
  const employeFound = data.employees.find(
    (employe) =>
      employe.firstName === employeeName || employe.lastName === employeeName,
  );
  if (employeFound === undefined) {
    return {};
  }
  return employeFound;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmploye = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmploye;
}

function isManager(id) {
  // seu código aqui
  let managerList = [];
  data.employees.forEach((employe) => {
    managerList = [...managerList, ...employe.managers];
  });
  return managerList.some((manager) => manager === id);
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  const newEmploye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmploye);
}

function countAnimals(species = '') {
  // seu código aqui
  const animals = {};
  data.species.forEach((animal) => {
    animals[animal.name] = animal.residents.length;
  });
  if (species === '') {
    return animals;
  }
  return animals[species];
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // seu código aqui
  const totalPrice = Adult * data.prices.Adult
    + Child * data.prices.Child
    + Senior * data.prices.Senior;
  return totalPrice;
}

function getAnimalMap({ includeNames = false, sex = '', sorted = false } = '') {
  // seu código aqui
  locations.forEach((location) => {
    const animalsByLocation = data.species.filter(
      (animal) => animal.location === location,
    );
    if (includeNames) {
      animalMap[location] = animalsByLocation.map((animal) => {
        const animalResidents = {};
        const animalResidentsMap = sexFilter(sex, animal);
        animalResidents[animal.name] = sortAnimals(sorted, animalResidentsMap);
        return animalResidents;
      });
    } else {
      animalMap[location] = animalsByLocation.map((animal) => animal.name);
    }
  });
  return animalMap;
}

function getSchedule(dayName = '') {
  // seu código aqui
  const { hours } = data;
  const schedule = Object.fromEntries(
    Object.entries(hours).map(([key, val]) => [
      key,
      `Open from ${val.open}am until ${val.close - 12}pm`,
    ]),
  );
  schedule.Monday = 'CLOSED';
  if (dayName === '') {
    return schedule;
  }
  const daySchedule = {};
  daySchedule[dayName] = schedule[dayName];
  return daySchedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmploye = data.employees.find((employe) => employe.id === id);
  const [fisrtSpeciesId] = getEmploye.responsibleFor;
  const fisrtSpecies = data.species.find(
    (specie) => specie.id === fisrtSpeciesId,
  );
  const oldest = fisrtSpecies.residents.sort((a, b) => b.age - a.age).shift();
  return Object.values(oldest);
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;
  data.prices.Adult = Math.round(Adult * (1 + percentage / 100) * 100) / 100;
  data.prices.Senior = Math.round(Senior * (1 + percentage / 100) * 100) / 100;
  data.prices.Child = Math.round(Child * (1 + percentage / 100) * 100) / 100;
}

function getEmployeeCoverage(idOrName = '') {
  // seu código aqui
  const employeeCoverage = {};
  if (idOrName !== '') {
    return getEmployee(idOrName);
  }
  data.employees.forEach((employee) => {
    const animalName = employee.responsibleFor.map((resposible) => {
      const animalId = data.species.find((animal) => animal.id === resposible);
      return animalId.name;
    });
    employeeCoverage[`${employee.firstName} ${employee.lastName}`] = animalName;
  });
  return employeeCoverage;
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
