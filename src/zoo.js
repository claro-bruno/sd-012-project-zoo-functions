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
  // seu código aqui
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal).residents.every((res) => res.age >= age);
}

function getEmployeeByName(empName) {
  // seu código aqui
  // if (!employeeName) return {};
  // melhoria na função de Lucas Chamas Nahas :)

  return employees.find((emp) => emp.firstName === empName || emp.lastName === empName) || {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // const { id, firstName, lastName } = personalInfo;
  // const { managers, responsibleFor } = associatedWith;
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(speciesName) {
  // seu código aqui
  if (!speciesName) {
    const obj = {};
    species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  }
  return species.find((specie) => specie.name === speciesName).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce(((sum, price) => sum + prices[price] * entrants[price]), 0);
}

const locationsArr = ['NE', 'NW', 'SE', 'SW'];

const mapping = (location) => species.filter((spec) => spec.location === location)
  .map((animal) => animal.name);

const entireMap = () => ({
  NE: mapping('NE'),
  NW: mapping('NW'),
  SE: mapping('SE'),
  SW: mapping('SW'),
});

const mapper = (locations, sex) => {
  const returnObj = {};
  locations.forEach((loc) => {
    const arr = [];
    mapping(loc).forEach((nome) => {
      const name = nome;
      const animals = species.find((spec) => spec.name === nome);
      if (sex) {
        const filteredBySex = animals.residents.filter((res) => res.sex === sex)
          .map((each) => each.name);
        arr.push({ [name]: filteredBySex });
      } else {
        const animalNames = animals.residents.map((each) => each.name);
        arr.push({ [name]: animalNames });
      }
    });
    Object.assign(returnObj, { [loc]: arr });
  });
  return returnObj;
};

const orderNames = (map) => {
  Object.values(map).forEach((value) => {
    value.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        obj[key].sort();
      });
    });
  });
  return map;
};

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return entireMap();
  if (options.includeNames) {
    if (options.sex && options.sorted) return orderNames(mapper(locationsArr, options.sex));
    if (options.sex) return mapper(locationsArr, options.sex);
    if (options.sorted) return orderNames(mapper(locationsArr));
    return mapper(locationsArr);
  }
}

// TENTAR REFAZER ESTE DE UM JEITO MELHOR
const returnString = (day) => `Open from ${hours[day].open}am until ${hours[day].close % 12}pm`;

function getSchedule(dayName) {
  // seu código aqui
  const schedule = {
    Monday: 'CLOSED',
    Tuesday: returnString('Tuesday'),
    Wednesday: returnString('Wednesday'),
    Thursday: returnString('Thursday'),
    Friday: returnString('Friday'),
    Saturday: returnString('Saturday'),
    Sunday: returnString('Sunday'),
  };
  if (!dayName) {
    return schedule;
  }
  return { [dayName]: schedule[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = employees.find((emp) => id.includes(emp.id));
  const firstRespId = employee.responsibleFor[0];
  const oldest = species
    .find((spec) => spec.id === firstRespId).residents
    .sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const priceKeys = Object.keys(prices);
  priceKeys.forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
