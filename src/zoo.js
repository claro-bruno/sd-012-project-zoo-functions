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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((elem) => ids.includes(elem.id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elem) => elem.name === animal)
    .residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((elem) =>
    elem.firstName === employeeName || elem.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((elem) => elem.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addEmp);
}

function countAnimals(specie) {
  const array = {};
  species.forEach(({ name, residents }) => { array[name] = residents.length; });
  return specie === undefined
    ? array
    : species.find((elem2) => elem2.name === specie).residents.length;
}

function calculateEntry(entrants = 0) {
  let soma = 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  soma += prices.Adult * Adult;
  soma += prices.Child * Child;
  soma += prices.Senior * Senior;
  return soma;
}

function getLocation(regioes) {
  return regioes.reduce((obj, regiao) => {
    const objLocation = obj;
    const arraySpecies = species.filter(({ location }) => location === regiao)
      .map((specie) => specie.name);
    objLocation[regiao] = arraySpecies;
    return objLocation;
  }, {});
}

function getName(key, options) {
  return key.reduce((array, sName) => {
    const obj = {};
    let arrayNames = species.find((elem) => elem.name === sName).residents;
    // console.log(arrayNames)
    if (options.sex) arrayNames = arrayNames.filter((animal) => animal.sex === options.sex);
    arrayNames = arrayNames.map((animal) => animal.name);
    if (options.sorted) arrayNames.sort();
    obj[sName] = arrayNames;
    array.push(obj);
    return array;
  }, []);
}

function getAnimalMap(options) {
  const regioes = ['NE', 'NW', 'SE', 'SW'];
  const animalLocation = getLocation(regioes);
  const nameLocation = {};
  if (!options || !options.includeNames) return animalLocation;
  regioes.forEach((key) => {
    nameLocation[key] = getName(animalLocation[key], options);
  });
  return nameLocation;
}
// console.log(getAnimalMap({ includeNames: true }));

function getSchedule(dayName) {
  const open = hours;
  const result = {};
  Object.keys(open).forEach((key) => {
    if (open[key].close === 0) {
      result[key] = 'CLOSED';
    } else {
      result[key] = `Open from ${open[key].open}am until ${open[key].close - 12}pm`;
    }
  });
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

function getOldestFromFirstSpecies(id) {
  const firstAnimalID = employees.find((anim) => anim.id === id).responsibleFor[0];
  const animalArray = species.find((old) => old.id === firstAnimalID).residents;
  const animalAge = animalArray.reduce((age, curr) => {
    let value = age;
    if (curr.age > value) {
      value = curr.age;
    } else {
      return value;
    }
    return value;
  }, 0);
  const result = Object.values(animalArray.find((elem) => elem.age === animalAge));
  return result;
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((elem) => {
    prices[elem] *= ((percentage + 100) / 100);
    prices[elem] = Math.round(prices[elem] * 100) / 100;
  });
  return prices;
}

function getEmployeeCoverage(idOrName, list = {}) {
  const employeeName = employees.map((employee) => employee.firstName);
  if (!idOrName) {
    return employeeName.reduce((empList, name) => getEmployeeCoverage(name, empList), {});
  }
  const { firstName, lastName, responsibleFor } = employees.find((employee) => {
    const { firstName: name, lastName: lname, id } = employee;
    return (name === idOrName || lname === idOrName || id === idOrName);
  });
  const copy = list;
  const fullName = `${firstName} ${lastName}`;
  copy[fullName] = responsibleFor.map((animalId) => species.find(({ id }) => id === animalId).name);
  return list;
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
