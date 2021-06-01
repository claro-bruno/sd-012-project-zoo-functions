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

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) { return [] }

  if (ids.length === 1) {
    let result = [];
    result.push(species.find((specie) => specie.id === ids[0]));
    return result;
  }

  let result = [];

  species.forEach(element => {
    ids.forEach(id => {
      if (id === element.id) {
        result.push(element);
      }
    });
  });

  return result;
}

function getAnimalsOlderThan(animal, age) {
  let animalGroup = species.find((specie) => specie.name === animal);
  return animalGroup.residents.every((animal) => animal.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return data.employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
}

function isManager(id) {
 let result = data.employees.find((employee) => employee.managers.find((manager) => manager === id));
 if (!result) {
   return false
 }
 return true;
}
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (!managers) { managers = []; }
  if (!responsibleFor) { responsibleFor = []; }

  let newEmployee = {
    'id': id,
    'firstName': firstName,
    'lastName': lastName,
    'managers': managers,
    'responsibleFor': responsibleFor,
  };

  data.employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

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
