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

const getSpeciesByIds = (...ids) => data.species.filter((specie, i) => specie.id === ids[i]);
// seu código aqui
// console.log(getSpeciesByIds());

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => specie.name === animal).residents
  .every((resident) => resident.age >= age);

// console.log(getAnimalsOlderThan('lions', 20));

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find((employee) => employee.firstName === employeeName
   || employee.lastName === employeeName);
};

// console.log(getEmployeeByName('Nigel'));

// const obj = {
//   id: 'xablau',
//   firstNome: 'Gabriel',
//   lastNome: 'Viana',
// }
// const obj2 = {
//   menagers: ['tunico', 'tinoco'],
//   animals: ['macaco', 'leão', 'rinoceronte'],
// }

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });
// console.log(createEmployee(obj, obj2));

const isManager = (id) => data.employees
  .some((employee) => employee.managers
    .some((employeeId) => employeeId === id));

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
};

const countAnimals = (species) => {
  if (!species) {
    return data.species.reduce((acumulador, item) => ({
      ...acumulador, [item.name]: item.residents.length,
    }), {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
};
// console.log(countAnimals())

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * data.prices.Adult + Senior * data.prices.Senior + Child * data.prices.Child;
};
// console.log(calculateEntry({ 'Child': 1, 'Senior': 1 }));
function getAnimalMap() {
  // seu código aqui options
}

function getSchedule() {
  // seu código aqui dayName
}

function getOldestFromFirstSpecies() {
  // seu código aqui id
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
