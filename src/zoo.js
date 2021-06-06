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

const {
  species,
  employees,
  prices,
  hours,
} = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((specie) => specie.name === animal)
    .residents.every((specie) => specie.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({
    managers,
  }) => managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  // seu código aqui
  const countingSpecies = species.reduce((count, specie) => {
    const counter = count;
    counter[specie.name] = specie.residents.length;
    return counter;
  }, {});
  if (animal !== undefined) {
    return countingSpecies[animal];
  }
  return countingSpecies;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants !== 'object' || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce(
    (acc, key) => acc + entrants[key] * prices[key], 0,
  );
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {};

  Object.keys(hours).forEach((day) => {
    if (day !== 'Monday') {
      schedule[day] = `Open from ${hours[day].open}am until ${
        hours[day].close - 12
      }pm`;
    } else schedule[day] = 'CLOSED';
  });
  if (dayName) {
    return {
      [dayName]: schedule[dayName],
    };
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const worker = data.employees.filter((person) => id.includes(person.id));
  const firstAnimal = worker[0].responsibleFor[0];
  const specieId = data.species.filter((animal) => firstAnimal.includes(animal.id));
  const returnAnimal = specieId[0].residents;
  const animalOrder = returnAnimal.sort((a, b) => {
    if (a.age < b.age) {
      return 1;
    }
    if (a.age > b.age) {
      return -1;
    }
    return 0;
  });
  return [animalOrder[0].name, animalOrder[0].sex, animalOrder[0].age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices).forEach((index) => {
    prices[index] = (Math.round(prices[index] * (1 + (percentage / 100)) * 100) / 100);
  });
}

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
