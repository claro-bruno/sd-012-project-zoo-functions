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

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

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

const getSchedule = () => {
  // dayName
  // if(!dayName) {
  //   return data.hours.map((hour) => Object.keys())
  // }
};

const getOldestFromFirstSpecies = (id) => {
  // Procurar id em employees (find)
  const getEmployee = data.employees.find((employee) => employee.id === id);
  // Procurar animal responsabilidade do getEmployee
  const getSpecie = data.species.find((specie) => specie.id === getEmployee.responsibleFor[0]);
  // Comparar as idades dos animais e trazer o mais velho
  const getOlder = getSpecie.residents.reduce((acumulador, item) => {
    if (item.age > acumulador.age) {
      return item;
    }
    return acumulador;
  });
  return Object.values(getOlder);
};

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

const increasePrices = (percentage) => {
  const { Adult, Senior, Child } = data.prices;
  const percent = percentage / 100 + 1;
  data.prices = {
    Adult: Math.round((Adult * percent) * 100) / 100,
    Child: Math.round((Child * percent) * 100) / 100,
    Senior: Math.round((Senior * percent) * 100) / 100,
  };
  return data.prices;
};
// console.log(increasePrices(50));
// console.log(increasePrices(30));

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
