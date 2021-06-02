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
  const speciesList = [];
  ids.forEach((id) => {
    const animal = data.species.find((specie) => specie.id === id);
    speciesList.push(animal);
  });
  return speciesList;
}

function getAnimalsOlderThan(animal, age) {
  const selectedAnimal = data.species.find((specie) => specie.name === animal);
  return selectedAnimal.residents.every((specificAnimal) => specificAnimal.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find((selectedEmployee) => {
      const first = selectedEmployee.firstName === employeeName;
      const second = selectedEmployee.lastName === employeeName;
      return first || second;
    });
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  let status = false;
  data.employees.forEach((employee) => {
    if (employee.managers.includes(id)) status = true;
  });
  return status;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (species) {
    return data.species.find((specie) => specie.name === species).residents.length;
  }
  const animalsList = {};
  data.species.forEach((specie) => {
    animalsList[specie.name] = specie.residents.length;
  });
  return animalsList;
}

function calculateEntry(entrants = {}) {
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  let total = 0;
  if (entrants.Adult) total += entrants.Adult * data.prices.Adult;
  if (entrants.Senior) total += entrants.Senior * data.prices.Senior;
  if (entrants.Child) total += entrants.Child * data.prices.Child;
  return total;
}

function generateNamesList(thisCorner, options, map, corner) {
  thisCorner.forEach((animal) => {
    let namesList = [];
    const allAnimals = animal.residents;
    allAnimals.forEach((resident) => namesList.push(resident.name));
    if (options.sex === 'male') {
      namesList = [];
      const maleAnimals = allAnimals.filter((thisAnimal) => thisAnimal.sex === 'male');
      maleAnimals.forEach((resident) => namesList.push(resident.name));
    }
    if (options.sex === 'female') {
      namesList = [];
      const femaleAnimals = allAnimals.filter((thisAnimal) => thisAnimal.sex === 'female');
      femaleAnimals.forEach((resident) => namesList.push(resident.name));
    }
    if (options.sorted === true) namesList.sort();
    map[corner].push({ [animal.name]: namesList });
  });
  return map;
}

function getAnimalMap(options) {
  const map = {};
  const corners = ['NE', 'NW', 'SE', 'SW'];
  corners.forEach((corner) => {
    const thisCorner = data.species.filter((specie) => specie.location === corner);
    map[corner] = [];
    if (options && options.includeNames === true) {
      return generateNamesList(thisCorner, options, map, corner);
    }
    thisCorner.forEach((animal) => map[corner].push(animal.name));
  });
  return map;
}

function getSchedule(dayName) {
  const schedule = data.hours;
  const outputSchedule = {};
  Object.keys(schedule).forEach((key) => {
    if (schedule[key].close === 0) {
      outputSchedule[key] = 'CLOSED';
    } else {
      outputSchedule[key] = `Open from ${schedule[key].open}am until ${schedule[key].close - 12}pm`;
    }
  });
  if (dayName) return { [dayName]: outputSchedule[dayName] };
  return outputSchedule;
}

function getOldestFromFirstSpecies(id) {
  const selectedEmployee = data.employees.find((employee) => employee.id === id);
  const animalId = selectedEmployee.responsibleFor[0];
  const selectedResidents = data.species.find((specie) => animalId === specie.id).residents;
  let selectedResident = selectedResidents[0];
  selectedResidents.forEach((resident) => {
    if (resident.age > selectedResident.age) selectedResident = resident;
  });
  return [selectedResident.name, selectedResident.sex, selectedResident.age];
}

function increasePrices(percentage) {
  const unitPercentage = 1 + percentage / 100;
  data.prices.Adult = Math.round(data.prices.Adult * unitPercentage * 100) / 100;
  data.prices.Child = Math.round(data.prices.Child * unitPercentage * 100) / 100;
  data.prices.Senior = Math.round(data.prices.Senior * unitPercentage * 100) / 100;
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
  //   getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
