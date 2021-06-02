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
  const filteredByID = ids.map((id) => data.species.find((specie) => specie.id === id));
  return filteredByID;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) { return {}; }
  return data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
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
  if (species === undefined) {
    return data.species.reduce((accumulator, { name, residents }) => {
      accumulator[name] = residents.length;
      return accumulator;
    }, {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entries) {
  // seu código aqui
  if (entries !== undefined) {
    const { Adult = 0, Child = 0, Senior = 0 } = entries;
    const { prices } = data;
    return (Adult * prices.Adult) + (Child * prices.Child) + (Senior * prices.Senior);
  }
  return 0;
}

// Requisito 9 - Não consegui fazer ainda
const animalsMap = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const defaultMap = () => {
  const defaultMapResult = animalsMap;
  data.species.map((specie) => {
    defaultMapResult[specie.location].push(specie.name);
    return defaultMapResult;
  });
  return defaultMapResult;
};

const filterAnimalsSex = (residents, sex) => {
  if (sex === 'male') {
    return residents.filter((resident) => resident.sex === 'male');
  }
  if (sex === 'female') {
    return residents.filter((resident) => resident.sex === 'female');
  }
  if (sex !== 'male' && sex !== 'female') { return residents; }
};

const sortArray = (array, sort) => {
  if (sort === true) {
    return array.sort();
  }
  if (sort !== true) { return array; }
};

// Essa parte foi em partes baseada no código do colega Eric
function getAnimalMap(options) {
  if (!options) { return defaultMap(); }
  const { includeNames = false, sorted = false, sex } = options;
  if (includeNames) {
    const customMap = animalsMap;
    data.species.map(({ name, location, residents }) => {
      const arrayResidents = filterAnimalsSex(residents, sex);
      const arrayOfNames = arrayResidents.map((resident) => resident.name);
      const obj = {};
      obj[name] = sortArray(arrayOfNames, sorted);
      return customMap[location].push(obj);
    });
    console.log(customMap);
    return customMap;
  }
  if (!includeNames) { return defaultMap(); }
}

function getSchedule(dayName) {
  // seu código aqui
  const daysOfWeek = Object.keys(data.hours);
  const objHours = daysOfWeek.reduce((acc, curr) => {
    const objHrs = data.hours;
    // eslint-disable-next-line no-return-assign
    acc[curr] = `Open from ${objHrs[curr].open}am until ${objHrs[curr].close - 12}pm`;
    if (curr === 'Monday') { acc[curr] = 'CLOSED'; }
    return acc;
  }, {});
  return dayName === undefined ? objHours : { [dayName]: objHours[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const specieObj = data.species.find((specie) => specie.id === specieId);
  const oldestResident = specieObj.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestResident;
  return [name, sex, age];
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
