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

const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...args) {
  return species.filter((animal) => args.includes(animal.id));
}

function getAnimalsOlderThan(animal, age) {
  const chosenAnimal = species.find((anim) => anim.name === animal);
  return chosenAnimal.residents.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  const checkFirstName = employees.find((person) => person.firstName === employeeName);
  const checkLastName = employees.find((person) => person.lastName === employeeName);
  if (checkFirstName !== undefined) {
    return checkFirstName;
  }
  if (checkLastName !== undefined) {
    return checkLastName;
  }
  return ({});
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person) => person.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(especime) {
  //  feito com a dica do Gabriel Bueno usando como base o código na seguinte fonte:
  //  https://vmarchesin.medium.com/using-array-prototype-reduce-in-objects-using-javascript-dfcdae538fc8
  if (!especime) {
    const anim = species.reduce((acumulador, animal) => ({
      ...acumulador, [animal.name]: animal.residents.length,
    }), {});
    return anim;
  }
  const anim = species.find((animal) => animal.name === especime);
  return anim.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const values = [];
  Object.keys(entrants).forEach((key) => {
    values.push(entrants[key] * prices[key]);
  });
  return values.reduce((accum, entry) => accum + entry);
}

// function getAnimalMap() {
// }

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    Object.keys(hours).forEach((key) => {
      schedule[key] = `Open from ${hours[key].open}am until ${hours[key].close - 12}pm`;
    });
    schedule.Monday = 'CLOSED';
    return schedule;
  }

  if (dayName === 'Monday') { schedule[dayName] = 'CLOSED'; return schedule; }

  const dia = hours[dayName];
  schedule[dayName] = `Open from ${dia.open}am until ${dia.close - 12}pm`;
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((person) => person.id === id);
  const firstAnimal = funcionario.responsibleFor.find((animal) => animal[0]);
  const bixo = species.find((animal) => animal.id === firstAnimal);
  return Object.values(bixo.residents.reduce((previous, current) => ((previous.age > current.age)
    ? previous : current)));
}
// a função abaixo foi feita com base na resposta do seguinte post no stack Overflow:
// https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

function increasePrices(percentage) {
  const operator = (1 + (percentage / 100));

  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round((prices[key] * operator) * 100) / 100;
  });
}

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
  increasePrices,
  createEmployee,
};
