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

function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined) {
    const directons = ['NE', 'NW', 'SE', 'SW'];
    const animalsLocals = {};
    directons.forEach((direction) => {
      const animals = data.species.filter((specie) => specie.location === direction);
      const names = [];
      animals.forEach((animal) => {
        names.push(animal.name);
        animalsLocals[direction] = names;
      });
    });
    return animalsLocals;
  }
  if (options.includeNames === true) {
    const directons = ['NE', 'NW', 'SE', 'SW'];
    const animalsLocals = {};
    directons.forEach((direction) => {
      const animals = data.species.filter((specie) => specie.location === direction);
      const directionArray = [];
      animals.forEach((animal) => {
        const animalObject = {};
        const animalResidents = animal.residents;
        const animalResidentsNames = animalResidents.map((resident) => resident.name);
        animalObject[animal.name] = animalResidentsNames;
        directionArray.push(animalObject);
      });
      animalsLocals[direction] = directionArray;
    });
    console.log(animalsLocals);
    return animalsLocals;
  }
}
getAnimalMap({ includeNames: true });
function getSchedule(/* dayName */) {
  // seu código aqui
}

function getOldestFromFirstSpecies(/* id */) {
  // seu código aqui
}

function increasePrices(/* percentage */) {
  // seu código aqui
}

function getEmployeeCoverage(/* idOrName */) {
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
