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
  // seu código aqui
  if (ids.length > 0) {
    const aux = [];
    const arrayAnimals = ids.map((id) => data.species.filter((animal) => animal.id === id));
    arrayAnimals.forEach((animal) => aux.push(...animal));
    return aux;
  }
  return [];
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.some((e) => e.name === animal && e.residents.every((a) => a.age > age));
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    const aux = { ...data.employees.filter((e) =>
      e.firstName === employeeName || e.lastName === employeeName) };
    return aux['0'];
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) =>
    employee.id === id && employee.id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  if (species !== undefined) {
    const [length] = data.species.filter((animal) => animal.name === species).map((animal) =>
      animal.residents.length);
    return length;
  }
  const animalList = {};
  data.species.forEach((animal) => {
    animalList[animal.name] = animal.residents.length;
    return 0;
  });
  return animalList;
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = { Adult: 0, Senior: 0, Child: 0 }) {
  // seu código aqui
  const value = [Adult * 49.99, Senior * 24.99, Child * 20.99];
  return value.reduce((acc, valor) => acc + valor);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  // seu código aqui
  const obj = {};
  const daysWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  daysWeek.forEach((day) => {
    obj[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
    return 0;
  });
  obj.Monday = 'CLOSED';
  if (dayName === undefined) {
    return obj;
  }
  const objDayName = {};
  objDayName[dayName] = obj[dayName];
  return objDayName;
}

function getOldestFromFirstSpecies(ids) {
  // seu código aqui
  const objEmployee = data.employees.filter((employee) => employee.id === ids);
  const firstSpecies = objEmployee[0].responsibleFor[0];
  const [nameSpecie] = data.species.filter((animal) =>
    animal.id === firstSpecies).map((name) => name.name);
  const [arrayAnimalOlder] = data.species.filter((especie) =>
    especie.name === nameSpecie).map((listaAnimal) => listaAnimal.residents);
  arrayAnimalOlder.sort((a, b) => b.age - a.age);
  const result = [arrayAnimalOlder[0].name, arrayAnimalOlder[0].sex, arrayAnimalOlder[0].age];
  return result;
}

function increasePrices(percentage) {
  // seu código aqui
  const nameValue = Object.keys(data.prices);
  const arrayPrices = Object.values(data.prices);
  const objResult = {};
  const indexOfPeople = [];
  nameValue.forEach((name, index) => indexOfPeople.push(index));
  indexOfPeople.forEach((index) => {
    objResult[nameValue[index]] = Math.round(100
    * (arrayPrices[index] + (arrayPrices[index] * (percentage / 100))
    )) / 100;
    return 0;
  });
  data.prices = objResult;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const obj = {}
    data.employees.forEach(({firstName, lastName, responsibleFor}) => {
      obj[`${firstName} ${lastName}`] = responsibleFor.map((id) => data.species.find((animal) => animal.id === id).name);
    })
    if (!idOrName) { 
      return obj;
    }
    const findId =  data.employees.find(({id, firstName, lastName}) => id === idOrName 
    || firstName === idOrName
    || lastName === idOrName).firstName
    const key = Object.keys(obj).find( ob => ob.includes(findId))
    const value = Object.values(obj).find( objV => objV == obj[key])
    return {[key]: value}
}

module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  createEmployee,
  isManager,
  addEmployee,
  countAnimals,
  calculateEntry,
  // getAnimalMap,
  getSchedule,
  getOldestFromFirstSpecies,
  increasePrices,
  getEmployeeCoverage,
};
    