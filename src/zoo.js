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

const data = require("./data");

function getSpeciesByIds(...ids) {
  const { species } = data;
  const selectedSpecies = [];
  const findId = (id) => species.find((specie) => specie.id === id);
  ids.forEach((id) => selectedSpecies.push(findId(id)));
  return selectedSpecies;
}

function getAnimalsOlderThan(animal, age) {
  const animalData = data.species.find((elem) => elem.name === animal);
  return animalData.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const gotEmployee = employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );
  if (gotEmployee) return gotEmployee;
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const { employees } = data;
  return employees.some((employee) =>
    employee.managers.some((elem) => elem === id)
  );
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = { id, firstName, lastName };
  const associatedWith = {
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  data.employees.push(createEmployee(personalInfo, associatedWith));
}

function countAnimals(species) {
  const { species: specieData } = data;
  if (species) {
    return specieData.find((elem) => elem.name === species).residents.length;
  }
  return specieData.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const { prices } = data;
  return Object.entries(entrants).reduce(
    (acc, curr) => prices[curr[0]] * curr[1] + acc,
    0
  );
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

const { hours } = data;

function dayInfo(day) {
  if (hours[day].open === 0 && hours[day].close === 0)
    return { [day]: "CLOSED" };
  return {
    [day]: `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`,
  };
}
console.log(dayInfo('Friday'))

function getSchedule(dayName) {
  if (dayName) return hours;

  return Object.entries(hours).reduce((acc, curr) => {
    if (curr[0] !== "Monday") {
      acc[curr[0]] = `Open from ${hours[curr[0]].open}am until ${
        hours[curr[0]].close
      }pm`;
      return acc;
    }
    acc[curr[0]] = "CLOSED";
    return acc;
  }, {});
}
// console.log(getSchedule());

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
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
