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
  if (ids.length === 0) { return []; }
  if (ids.length === 1) {
    const result = [];
    result.push(data.species.find((specie) => specie.id === ids[0]));
    return result;
  }

  const result = [];

  data.species.forEach((element) => {
    ids.forEach((id) => {
      if (id === element.id) {
        result.push(element);
      }
    });
  });

  return result;
}

function getAnimalsOlderThan(animal, age) {
  const animalGroup = data.species.find((specie) => specie.name === animal);
  return animalGroup.residents.every((element) => element.age > age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const findPersonByName = (ppl) => ppl.firstName === employeeName || ppl.lastName === employeeName;
  return data.employees.find(findPersonByName);
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
  const res = data.employees.find((employe) => employe.managers.find((manager) => manager === id));
  if (!res) {
    return false;
  }
  return true;
}
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  if (!managers) { newEmployee.managers = []; }
  if (!responsibleFor) { newEmployee.responsibleFor = []; }

  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    const result = {};
    data.species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function sumEntry(entrants) {
  let sum = 0;

  if (entrants.Adult) {
    sum += entrants.Adult * data.prices.Adult;
  }
  if (entrants.Senior) {
    sum += entrants.Senior * data.prices.Senior;
  }
  if (entrants.Child) {
    sum += entrants.Child * data.prices.Child;
  }
  return sum;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) { return 0; }
  return sumEntry(entrants);
}

/*
function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}
*/

function increasePrices(percentage) {
  data.prices.Adult += data.prices.Adult * (percentage / 100);
  data.prices.Adult = Math.round(data.prices.Adult * 100) / 100;
  data.prices.Child += data.prices.Child * (percentage / 100);
  data.prices.Child = Math.round(data.prices.Child * 100) / 100;
  data.prices.Senior += data.prices.Senior * (percentage / 100);
  data.prices.Senior = Math.round(data.prices.Senior * 100) / 100;
}
/*
function getEmployeeCoverage(idOrName) {
  // seu código aqui
}
*/
module.exports = {
  calculateEntry,
  //  getSchedule,
  countAnimals,
  //  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  //  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  //  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
