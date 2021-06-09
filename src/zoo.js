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
  if (ids.length === 0) {
    return [];
  }
  if (ids.length >= 1) {
    return data.species.filter((element, index) => element.id === ids[index]);
  }
}

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((species) => species.name === animal);
  return specie.residents.every((specimen) => specimen.age >= age);
}

function getEmployeeByName(...employeeName) {
  if (employeeName.length === 0) {
    return {};
  }
  const employee = data.employees.find((person) =>
    person.firstName === employeeName[0] || person.lastName === employeeName[0]);
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const person = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(person);
}

function countAnimals(species) {
  if (!species) {
    const animalHeadCount = {};
    data.species.forEach(({ name, residents }) => {
      animalHeadCount[name] = residents.length;
    });
    return animalHeadCount;
  }
  return data.species.find((element) => element.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  const { Child: childNumber = 0, Adult: adultNumber = 0, Senior: seniorNumber = 0 } = entrants;
  const { Child: childPrice, Adult: adultPrice, Senior: seniorPrice } = data.prices;
  return childNumber * childPrice + adultNumber * adultPrice + seniorNumber * seniorPrice;
}

const categoryMap = (regions) => {
  const animalMap = {};
  regions.forEach((region) => {
    const addAnimal = data.species.filter(({ location }) => location === region);
    animalMap[region] = addAnimal.map(({ name }) => name);
  });
  // console.log(animalMap);
  return animalMap;
};
const regions = ['NE', 'NW', 'SE', 'SW'];
const defaultMap = categoryMap(regions);

const sortNames = (obj) => {
  regions.forEach((region) => {
    obj[region].forEach((element) =>
      Object.values(element)[0].sort());
  });
  return obj;
};

const exclusiveBySex = (gender, sorted = false) => {
  const species = data.species.map(({ residents }) =>
    residents.filter(({ sex }) =>
      sex === gender).map(({ name }) => name));
  const namesBysex = {};
  data.species.forEach(({ name }, index) => {
    namesBysex[name] = species[index];
  });
  const newObj = {};
  regions.forEach((region) => {
    const localNames = data.species.filter(({ location }) =>
      location === region).map(({ name }) => name);
    newObj[region] = localNames.map((localName) =>
      ({ [localName]: namesBysex[localName] }));
  });
  if (sorted) { sortNames(newObj); }
  return newObj;
};

const nameMap = (sorted = false, sex) => {
  const namesMap = {};
  regions.forEach((region) => {
    const speciesNames = data.species.filter(({ location }) =>
      location === region).map(({ name }) => name);
    const residents = data.species.filter(({ location }) => location === region);
    namesMap[region] = speciesNames.map((speciesName) =>
      ({ [speciesName]: residents.find(({ name }) =>
        name === speciesName).residents.map(({ name }) => name) }));
  });
  if (sex === 'male') { return exclusiveBySex('male', sorted); }
  if (sex === 'female') { return exclusiveBySex('female', sorted); }
  if (sorted) { return sortNames(namesMap); }
  return namesMap;
};

function getAnimalMap({ includeNames, sorted, sex } = defaultMap) {
  if (!includeNames) {
    return defaultMap;
  }
  return nameMap(sorted, sex);
}

const days = Object.keys(data.hours);
const time = Object.values(data.hours);
function getSchedule(dayName) {
  const schedule = {};
  days.forEach((day, index) => {
    if (day !== 'Monday') {
      schedule[day] = `Open from ${time[index].open}am until ${time[index].close - 12}pm`;
    } else {
      schedule[day] = 'CLOSED';
    }
  });
  if (!dayName) {
    return schedule;
  }
  if (dayName !== 'Monday') {
    const daySchedule = data.hours[dayName];
    return {
      [dayName]: `Open from ${daySchedule.open}am until ${daySchedule.close - 12}pm`,
    };
  }
  return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(id) {
  const { employees, species } = data;
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((element) => element.id === animalId);
  const oldestSpecimen = animal.residents.reduce((accumulator, currentValue) =>
    (accumulator.age > currentValue.age ? accumulator : currentValue));
  return [oldestSpecimen.name, oldestSpecimen.sex, oldestSpecimen.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  const entrants = Object.keys(data.prices);
  entrants.forEach((ageGroup) => {
    prices[ageGroup] *= (1 + percentage / 100) + 0.0001;
    prices[ageGroup] = Number(prices[ageGroup].toFixed(2));
  });
}

function getEmployeeCoverage(idOrName) {
  const { employees, species } = data;
  const employeeList = {};
  if (!idOrName) {
    employees.forEach((employee) => {
      const speciesArray = employee.responsibleFor.map((speciesId) =>
        (species.find(({ id }) => id === speciesId)).name);
      employeeList[`${employee.firstName} ${employee.lastName}`] = speciesArray;
    });
    return employeeList;
  }
  const employee = employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  const speciesArray = employee.responsibleFor.map((speciesId) =>
    (species.find(({ id }) => id === speciesId)).name);
  employeeList[`${employee.firstName} ${employee.lastName}`] = speciesArray;
  return employeeList;
}
/* Credito em grande parte a [Eric Kreis] */

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
