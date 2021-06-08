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
const { employees } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  const selectedSpicie = [];
  ids.forEach((id) => selectedSpicie.push(data.species.find((spicie) => spicie.id === id)));
  return selectedSpicie;
}

function getAnimalsOlderThan(animal, age) {
  const selecteSpicie = data.species.find((specie) => specie.name === animal);
  return selecteSpicie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return employees.find((empl) => {
      const findEmpregado = empl.firstName === employeeName || empl.lastName === employeeName;
      return findEmpregado;
    });
  } return {};
}

function createEmployee(personalInfo, associatedWith) {
  const novoEmpregado = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return novoEmpregado;
}

function isManager(id) {
  let verificaManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) {
      verificaManager = true;
    }
  });
  return verificaManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  const { species } = data;
  if (!specie) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const countAnimal = species.find((animal) => animal.name === specie).residents.length;
  return countAnimal;
}
function calculateEntry(entrants = 0) {
  if (!entrants) return entrants;
  let total = 0;
  const enterKeys = Object.keys(entrants);
  enterKeys.forEach((key) => {
    if (key === 'Adult') {
      total += (entrants[key] * data.prices.Adult);
    } else if (key === 'Child') {
      total += (entrants[key] * data.prices.Child);
    } else {
      total += (entrants[key] * data.prices.Senior);
    }
  });
  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  if (!dayName) {
    const schedule = {};
    Object.keys(data.hours).forEach((day) => {
      const { open, close } = data.hours[day];
      schedule[day] = day !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    });
    return schedule;
  }
  const { open, close } = data.hours[dayName];
  const daySchedule = { [dayName]: `Open from ${open}am until ${close - 12}pm` };
  if (dayName === 'Monday') daySchedule[dayName] = 'CLOSED';
  return daySchedule;
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const firstAnimalId = findEmployee.responsibleFor[0];
  const findAnimal = data.species.find((specie) => specie.id === firstAnimalId);
  const oldestAnimal = findAnimal.residents
    .sort((animal1, animal2) => animal2.age - animal1.age)[0];
  const { name, sex, age } = oldestAnimal;
  const oldestAnimalArr = [name, sex, age];
  return oldestAnimalArr;
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((key) => {
    const newPrice = Math.round((data.prices[key] * (1 + (percentage / 100)) * 100)) / 100;
    data.prices[key] = parseFloat(newPrice.toFixed(2));
  });
}

function getEmployeeCoverage(idOrName) {
  const reduceEmployees = (acc, { firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    const findAnimalsByIdAndReduce = (accumulator, id) => {
      const findSpecie = data.species.find((specie) => specie.id === id);
      accumulator.push(findSpecie.name);
      return accumulator;
    };
    const animalsResponsibleFor = responsibleFor.reduce(findAnimalsByIdAndReduce, []);
    acc[fullName] = animalsResponsibleFor;
    return acc;
  };
  if (!idOrName) {
    const employeesListAndAnimals = data.employees.reduce(reduceEmployees, {});
    return employeesListAndAnimals;
  }
  const getEmployee = data.employees.filter(({ firstName, lastName, id }) =>
    firstName === idOrName || lastName === idOrName || id === idOrName);
  return getEmployee.reduce(reduceEmployees, {});
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
