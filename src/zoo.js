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
const {
  species,
  employees,
  hours,
  prices,
} = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalData = species.find((specie) => specie.name === animal);
  const animalOlderThan = animalData.residents.every((resident) => resident.age >= age);
  return animalOlderThan; 
}

function getEmployeeByName(employeeName) {
  if(!employeeName) {
    const emptyObject = {};
    return emptyObject;
  }

  const employeeFinder = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return employeeFinder;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  const managerScan = employees.reduce(((result, employee) => [...result, ...employee.managers]), []);
  const managerFind = managerScan.some((managerId) => managerId === id);

  return managerFind;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

function countAnimals(animalName) { 
  if (!animalName) {
    const animalSpecieCounter = species.reduce((result, specie) => {
      const {
        name,
        residents,
      } = specie;

      const animalObject = {
        ...result,
        [name]: residents.length,
      };
      return animalObject;
    }, {});
    return animalSpecieCounter;
  }

  const residentsCounter = species.find((specie) => specie.name === animalName).residents.length;

  return residentsCounter;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }

  const {
    Adult = 0,
    Senior = 0,
    Child = 0,
  } = entrants;

  const {
    Adult: adultPrice,
    Senior: seniorPrice,
    Child: childPrice,
  } = prices;

  return (Child * childPrice + Senior * seniorPrice + Adult * adultPrice);
}

function getAnimalMap(options) {
  
}

function getSchedule(dayName) {
  
}

function getOldestFromFirstSpecies(id) {
  
}

function increasePrices(percentage) {
  
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
