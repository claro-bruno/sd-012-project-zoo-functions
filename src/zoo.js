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

const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const findId = species.filter((specie) => ids.find((id) => id === specie.id)); // O filter já retorna um array vazio se nçao recebe nenhum parâmetro.
  return findId;
};

console.log(getSpeciesByIds('tigersId'));

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const verifySpecie = species.find((specie) => specie.name === animal);
  return verifySpecie.residents.every((ageId) => ageId.age >= age);
};

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const employee = employees.find((name) => 
  name.firstName === employeeName || name.lastName === employeeName);
  return employee;
};
// console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...associatedWith, ...personalInfo };
};

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => 
  employee.managers.find((idManager) => idManager === id));
};

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
};

// function countAnimals(animal) {
//   // seu código aqui
//   if (!species) return {};
// const animals = species.forEach((animal) => {
//   species.find((name) => name === animal.name)
// })
// return animals;
// }

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  // const precos = Object.values(prices);
  // const visits = Object.values(entrants);
  // console.log(precos);
  // console.log(visits);
  // return (precos[0] * visits[0]) + (precos[1] * visits[1]) + (precos[2] * visits[2]);
 const { Adult = 0, Senior = 0, Child = 0 } = entrants;
 const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
 return (Adult * adultPrice) + (Senior * seniorPrice) + (Child * childPrice);
}

// console.log(calculateEntry({ 'Adult': 2, 'Senior': 3, 'Child': 1 }));

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

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
