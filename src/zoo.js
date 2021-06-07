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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const zooData = data.species.filter((especie) => ids.find((animalId) => especie.id === animalId));

  return zooData;
}

// console.log(getSpeciesByIds(''));

// vamos começar!

// 1-Encontrando nome:
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const accessSpecie = data.species.find((specie) => specie.name === animal);
  // 2 - Encontrando true ou false relacionado com a idade:
  return accessSpecie.residents.every((resident) => resident.age >= age);
}
// console.log(getAnimalsOlderThan('lions'));

function getEmployeeByName(employeeName = {}) {
  return (
    data.employees.find(
      (employee) => employee.firstName === employeeName
        || employee.lastName === employeeName,
    ) || employeeName
  );
}

function createEmployee(
  { id, firstName, lastName },
  { managers, responsibleFor },
) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // eslint-disable-next-line max-len
  const d = data.employees.some((employee) => employee.managers.some((manage) => manage === id));
  return d;
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  if (species === undefined) {
    const animalsQtd = data.species.reduce((acc, currentValue) => {
      acc[currentValue.name] = currentValue.residents.length;
      return acc;
    }, {});
    return animalsQtd;
  }
  const contagem = data.species.find((specie) => specie.name === species);
  return contagem.residents.length;
}
// console.log(countAnimals());

function calculateEntry(entrants) {
  if (entrants !== undefined) {
    const { Adult = 0, Child = 0, Senior = 0 } = entrants;
    return (
      data.prices.Adult * Adult
      + data.prices.Child * Child
      + data.prices.Senior * Senior
    );
  }

  return 0;
}

// console.log(calculateEntry({ Adult: 2, Child: 3, Senior: 1 }));

// function getAnimalMap(options) {
//   // seu código aqui
// }

// eslint-disable-next-line consistent-return
function getSchedule(...dayName) {
//   // seu código aqui
  const expected = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    // const days = Object.keys(schedule);
    return expected;
  }
  // const weekDays { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Monday } = expected;
  const abc = Object.keys(expected);
  return abc.find((hour) => hour[dayName] === dayName);
  // return days.open.map((openItem) => (`${}`))
}

// console.log(getSchedule('Monday'));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const workerId = data.employees.find((employee) => employee.id === id);
  const animalId = workerId.responsibleFor[0];
  const animalIdConverter = data.species.find((specie) => specie.id === animalId);
  const animalAge = animalIdConverter.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(animalAge);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
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
  getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
