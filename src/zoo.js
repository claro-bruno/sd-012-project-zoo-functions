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

function getSpeciesByIds(...ids) {
  // lógica da função getSpeciesByIds desenvolvida com a ajuda do Luiz Henrrique (https://github.com/lzzhenrique) e Bruno Yamamoto (https://github.com/BSY-Development) através de call.
  return ids.map((item) => species.find((specie) => specie.id === item));
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((name) => name.name === animal);
  return residents.every((indexAnimal) => indexAnimal.age > age);
}

function getEmployeeByName(employeeName) {
  // ideia do operador ternário para a função getEmployeeByName desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) através de call.
  const findEmployeeByName = employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);

  return !employeeName ? {} : findEmployeeByName;
}

function createEmployee(personalInfo, associatedWith) {
  const mergeParams = { ...personalInfo, ...associatedWith };
  return mergeParams;
}

const isManager = (id) => employees.some((index) => index.managers.includes(id));
// função isManager desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) e Caroline Banichio (https://github.com/carolbenichio) através de call.

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // ideia do default parameter para a função addEmployee desenvolvida com a ajuda do Eric kreis https://github.com/eric-kreis através de call.
  const params = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(params);
  return employees;
}

function countAnimals(specie) {
  // ideia do foreach para a função countAnimals desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) através de call.
  if (!specie) {
    const objSpecies = {};
    species.forEach((name) => {
      objSpecies[name.name] = name.residents.length;
    });
    return objSpecies;
  }
  const foundSpecies = species.find((animal) => animal.name === specie);
  const qtdSpecies = foundSpecies.residents.length;
  return qtdSpecies;
}

function calculateEntry(entrants) {
  // lógica da função calculateEntry desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) e Thalles Carneiro (https://github.com/thalles-carneiro)  através de call.
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: priceAdult, Child: priceChild, Senior: priceSenior } = prices;
  const totalPrice = (Adult * priceAdult) + (Child * priceChild) + (Senior * priceSenior);
  return totalPrice;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  // lógica dos horarios disponíveis da função getSchedule desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) e ideia do bracket notation desenvolvida com a ajuda do David Gonzaga (https://github.com/Gonzagadavid) através de call.
  const tableHours = {};
  const daysWeek = Object.keys(hours);
  daysWeek.forEach((day) => {
    const { open, close } = hours[day];
    tableHours[day] = day === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  });
  if (!dayName) {
    return tableHours;
  }
  const hourByDay = {
    [dayName]: tableHours[dayName],
  };
  return hourByDay;
}

function getOldestFromFirstSpecies(id) {
  const firtSpecieByEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const allResidentsBySpecies = species
    .find((specie) => specie.id === firtSpecieByEmployee).residents;
  const oldestAnimal = allResidentsBySpecies
    .sort((a, b) => a.age - b.age)[allResidentsBySpecies.length - 1];
  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  const obj = {};
  const convertToPercent = percentage / 100;
  const keysPrice = Object.keys(prices);
  keysPrice.forEach((key) => {
    const percent = Math.round((prices[key] + (prices[key] * convertToPercent)) * 100) / 100;
    obj[key] = percent;
  });
  console.log(obj);
  Object.assign(prices, obj);
  return prices;
}

const nweFunc = () => {
  const employeeList = {};
  const dataEmployees = Object.values(employees);
  dataEmployees.map((indexValue) => {
    const fullNameEmployee = `${indexValue.firstName} ${indexValue.lastName}`;
    const arrAnimal = indexValue.responsibleFor;
    const nameAnimal = arrAnimal.map((e) => {
      const animal = species.find((index) => index.id === e);
      return animal.name;
    });
    employeeList[fullNameEmployee] = nameAnimal;
    return employeeList;
  });
  return employeeList;
};

function getEmployeeCoverage(idOrName) {
  // lógica da função getEmployeeCoverage desenvolvida com a ajuda do Bruno Augusto (https://github.com/claro-bruno) Diogo Sant'Anna (https://github.com/) através de call.
  if (!idOrName) {
    return nweFunc();
  }
  const findById = employees
    .find((e) => (e.id === idOrName)
      || (e.firstName === idOrName)
      || (e.lastName === idOrName));

  const fullName = `${findById.firstName} ${findById.lastName}`;

  const newObj = { [fullName]: nweFunc()[fullName] };

  return newObj;
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
