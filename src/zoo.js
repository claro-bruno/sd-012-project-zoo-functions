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

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const findSpecie = (id) => species.find((specie) => id === specie.id);
  const speciesSelected = ids.map(findSpecie);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = species.find((specie) => animal === specie.name);
  const checkEachResident = (resident) => resident.age > age;
  const checkIfOlderThan = findSpecie.residents.every(checkEachResident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const getEmployee = employees.find(findEmployee);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const verifyById = (employeeId) => employeeId === id;
  const checkManagers = ({ managers }) => managers.some(verifyById);
  const resultOfCheck = employees.some(checkManagers);
  return resultOfCheck;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const reduceSpecie = (acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    };
    const speciesObj = species.reduce(reduceSpecie, {});
    return speciesObj;
  }
  const findSpecie = species.filter(({ name }) => name === specie);
  const reduceToSpecieCount = (acc, { residents }) => acc + residents.length;
  const specieCount = findSpecie.reduce(reduceToSpecieCount, 0);
  return specieCount;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: numberOfAdults = 0, Child: numberOfChildren = 0,
    Senior: numberOfSeniors = 0 } = entrants;
  const totalAdults = prices.Adult * numberOfAdults;
  const totalChildren = prices.Child * numberOfChildren;
  const totalSeniors = prices.Senior * numberOfSeniors;
  const totalPrice = totalAdults + totalChildren + totalSeniors;
  return totalPrice;
}

const locations = ['NE', 'NW', 'SE', 'SW'];
const getNamesByLocation = (namesOrNot, sortOrNot, sexOfAnimal) => {
  const reduceAnimal = (animal) => {
    let getResidents = species.find((specie) => specie.name === animal).residents;
    if (sexOfAnimal) getResidents = getResidents.filter((resident) => resident.sex === sexOfAnimal);
    const animalsAndResidents = getResidents.reduce((acc, resident) => {
      acc.push(resident.name);
      return acc;
    }, []);
    if (sortOrNot === true) animalsAndResidents.sort();
    return { [animal]: animalsAndResidents };
  };
  const reduceToNamesByLocation = (accumulator, location) => {
    const animalsByLocation = species.filter((specie) => specie.location === location);
    const animalsNames = animalsByLocation.map((animal) => animal.name);
    accumulator[location] = animalsNames;
    if (namesOrNot === true) accumulator[location] = animalsNames.map(reduceAnimal);
    return accumulator;
  };
  return locations.reduce(reduceToNamesByLocation, {});
};

function getAnimalMap(options) {
  let { includeNames, sorted, sex } = {};
  if (options) ({ includeNames, sorted, sex } = options);
  if (includeNames === true) return getNamesByLocation(includeNames, sorted, sex);
  return getNamesByLocation();
}

function getSchedule(dayName) {
  if (!dayName) {
    const scheduleArr = Object.entries(hours);
    const reduceEntries = (acc, entrie) => {
      const { open, close } = entrie[1];
      acc[entrie[0]] = `Open from ${open}am until ${close - 12}pm`;
      if (entrie[0] === 'Monday') acc[entrie[0]] = 'CLOSED';
      return acc;
    };
    const finalSchedule = scheduleArr.reduce(reduceEntries, {});
    return finalSchedule;
  }
  const { open, close } = hours[dayName];
  const daySchedule = { [dayName]: `Open from ${open}am until ${close - 12}pm` };
  if (dayName === 'Monday') daySchedule[dayName] = 'CLOSED';
  return daySchedule;
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id);
  const firstAnimalId = findEmployee.responsibleFor[0];
  const findAnimal = species.find((specie) => specie.id === firstAnimalId);
  const oldestAnimal = findAnimal.residents
    .sort((animal1, animal2) => animal2.age - animal1.age)[0];
  const { name, sex, age } = oldestAnimal;
  const oldestAnimalArr = [name, sex, age];
  return oldestAnimalArr;
}

function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;
  /** Consultei o Stack Overflow para resolver essa parte do arredondamento de um determinado número de casas decimais.
  https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary */
  const adultPrice = Math.round((Adult * (1 + (percentage / 100)) * 100)) / 100;
  const childPrice = Math.round((Child * (1 + (percentage / 100)) * 100)) / 100;
  const seniorPrice = Math.round((Senior * (1 + (percentage / 100)) * 100)) / 100;
  data.prices = {
    Adult: adultPrice,
    Child: childPrice,
    Senior: seniorPrice,
  };
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  const reduceEmployees = (acc, { firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    const findAnimalsByIdAndReduce = (accumulator, id) => {
      const findSpecie = species.find((specie) => specie.id === id);
      accumulator.push(findSpecie.name);
      return accumulator;
    };
    const animalsResponsibleFor = responsibleFor.reduce(findAnimalsByIdAndReduce, []);
    acc[fullName] = animalsResponsibleFor;
    return acc;
  };
  if (!idOrName) {
    const employeesListAndAnimals = employees.reduce(reduceEmployees, {});
    return employeesListAndAnimals;
  }
  const getEmployee = employees.filter(({ firstName, lastName, id }) =>
    firstName === idOrName || lastName === idOrName || id === idOrName);
  return getEmployee.reduce(reduceEmployees, {});
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
