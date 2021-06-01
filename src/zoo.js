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
  if (ids.length === 0) return [];
  const findSpecie = (id) => data.species.find((specie) => id === specie.id);
  const speciesSelected = ids.map(findSpecie);
  return speciesSelected;
}

function getAnimalsOlderThan(animal, age) {
  const findSpecie = data.species.find((specie) => animal === specie.name);
  const checkEachResident = (resident) => resident.age > age;
  const checkIfOlderThan = findSpecie.residents.every(checkEachResident);
  return checkIfOlderThan;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName;
  const getEmployee = data.employees.find(findEmployee);
  return getEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const verifyById = (employeeId) => employeeId === id;
  const checkManagers = ({ managers }) => managers.some(verifyById);
  const resultOfCheck = data.employees.some(checkManagers);
  return resultOfCheck;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  if (!specie) {
    const reduceSpecie = (acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    };
    const speciesObj = data.species.reduce(reduceSpecie, {});
    return speciesObj;
  }
  const findSpecie = data.species.filter(({ name }) => name === specie);
  const reduceToSpecieCount = (acc, { residents }) => acc + residents.length;
  const specieCount = findSpecie.reduce(reduceToSpecieCount, 0);
  return specieCount;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: numberOfAdults = 0, Child: numberOfChildren = 0,
    Senior: numberOfSeniors = 0 } = entrants;
  const totalAdults = data.prices.Adult * numberOfAdults;
  const totalChildren = data.prices.Child * numberOfChildren;
  const totalSeniors = data.prices.Senior * numberOfSeniors;
  const totalPrice = totalAdults + totalChildren + totalSeniors;
  return totalPrice;
}

const locations = ['NE', 'NW', 'SE', 'SW'];
const getNamesByLocation = (namesOrNot, sortOrNot, sexOfAnimal) => {
  const reduceAnimal = (animal) => {
    let getResidents = data.species.find((specie) => specie.name === animal).residents;
    if (sexOfAnimal) getResidents = getResidents.filter((resident) => resident.sex === sexOfAnimal);
    const animalsAndResidents = getResidents.reduce((acc, resident) => {
      acc.push(resident.name);
      return acc;
    }, []);
    if (sortOrNot === true) animalsAndResidents.sort();
    return { [animal]: animalsAndResidents };
  };
  const reduceToNamesByLocation = (accumulator, location) => {
    const animalsByLocation = data.species.filter((specie) => specie.location === location);
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
    const scheduleArr = Object.entries(data.hours);
    const reduceEntries = (acc, entrie) => {
      const { open, close } = entrie[1];
      acc[entrie[0]] = `Open from ${open}am until ${close - 12}pm`;
      if (entrie[0] === 'Monday') acc[entrie[0]] = 'CLOSED';
      return acc;
    };
    const finalSchedule = scheduleArr.reduce(reduceEntries, {});
    return finalSchedule;
  }
  const { open, close } = data.hours[dayName];
  const daySchedule = { [dayName]: `Open from ${open}am until ${close - 12}pm` };
  if (dayName === 'Monday') daySchedule[dayName] = 'CLOSED';
  return daySchedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
