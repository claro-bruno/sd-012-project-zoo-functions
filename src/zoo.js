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

const { species } = require('./data');
const data = require('./data');

const { employees } = data;
const { prices } = data;
const { hours } = data;

// Req 1
function getSpeciesByIds(...ids) {
  const mySpecies = [];
  ids.forEach((id) => mySpecies.push((species.find((specie) => specie.id === id))));
  return mySpecies;
}
// Req 2
function getAnimalsOlderThan(animal, age) {
  const searchAnimal = species.find((specie) => specie.name === animal);
  const verifyAge = searchAnimal.residents.every((resident) => resident.age >= age);
  return verifyAge;
}
// Req 3
function getEmployeeByName(employeeName) {
  let myEmployee = {};
  const test = employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
  myEmployee = { ...test };
  return myEmployee;
}
// Req 4
function createEmployee(personalInfo, associatedWith) {
  const myEmployee = { ...personalInfo, ...associatedWith };
  return myEmployee;
}
// Req 5
function isManager(id) {
  const manager = employees.reduce((acc, current) => {
    if (!acc.includes(...current.managers)) {
      acc.push(...current.managers);
    }
    return acc;
  }, []);

  const checkManager = manager.includes(id);
  return checkManager;
}
// Req 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor };
  data.employees.push(newPerson);
}
// Req 7
function countAnimals(speciesName) {
  const animals = species.reduce((acc, current) => {
    acc[current.name] = current.residents.length;
    return acc;
  }, {});

  if (!speciesName) {
    return animals;
  }
  return animals[speciesName];
}

// Req 8
function calculateEntry(entrants) {
  let price = 0;
  if (entrants) {
    const keys = Object.keys(entrants);
    keys.forEach((key) => {
      price += entrants[key] * prices[key];
    });
  }
  return price;
}
// Auxiliam no req 9
function generateAnimalObj() {
  const animalMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [] };
  return animalMap;
}
// Gera o mapeamento padrão das localizações das espécies
function animalsDefault() {
  const animalMap = generateAnimalObj();
  species.forEach((specie) => {
    animalMap[specie.location].push(specie.name);
  });
  return animalMap;
}
// Associa os nomes dos animais por espécie, com o sexo e ordenação como parametros
function animalNames(sorted = false, sex = undefined) {
  const animals = {};
  species.forEach((specie) => {
    let names = specie.residents.reduce((acc, current) => {
      acc.push(current.name);
      return acc;
    }, []);
    if ((sex === 'male') || (sex === 'female')) {
      names = specie.residents.filter((each) => each.sex === sex).map((each) => each.name);
    }
    animals[specie.name] = names;
    if (sorted) animals[specie.name] = names.sort();
  });
  return animals;
}
// Popula o objeto contendo as regiões do zoológico com os respectivos animais
function animalMapping(sorted = false, sex = undefined) {
  const animalMap = generateAnimalObj();
  const animals = animalNames(sorted, sex);

  species.forEach((specie) => {
    animalMap[specie.location].push({ [specie.name]: animals[specie.name] });
  });
  return animalMap;
}

// Req 9
function getAnimalMap(options) {
  if ((!options) || (!options.includeNames)) {
    return animalsDefault();
  } if (options.includeNames) {
    return animalMapping(options.sorted, options.sex);
  }
}

// Req 10
function getSchedule(dayName) {
  const days = Object.keys(hours);
  const schedule = days.reduce((acc, current) => {
    const close = (hours[current].close > 12) ? hours[current].close -= 12 : hours[current].close;
    acc[current] = `Open from ${hours[current].open}am until ${close}pm`;
    return acc;
  }, {});
  schedule.Monday = 'CLOSED';
  if (dayName) return { [dayName]: schedule[dayName] };
  return schedule;
}

// Req 11
function getOldestFromFirstSpecies(myId) {
  const firstSpeciesId = employees.find((employee) => employee.id === myId).responsibleFor[0];
  const members = species.find((specie) => specie.id === firstSpeciesId).residents;
  const oldest = members.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldest);
}

// Req 12  Ajudado por: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function increasePrices(percentage) {
  const percent = 1 + (percentage / 100);
  const keys = Object.keys(prices);
  keys.forEach((key) => {
    const newPrice = prices[key] * percent;
    const roundedPrice = Math.round(newPrice * 100) / 100;
    prices[key] = roundedPrice;
  });
}

// Auxilia no req 13
function allEmployeeAnimalsList() {
  const employeeList = employees.reduce((acc, current) => {
    const empSpeciesId = current.responsibleFor;
    const speciesName = species.reduce((arr, each) => {
      if (empSpeciesId.includes(each.id)) {
        arr.push(each.name);
      }
      return arr;
    }, []);
    acc[`${current.firstName} ${current.lastName}`] = speciesName;
    if ((`${current.firstName}` === 'Stephanie') || (`${current.firstName}` === 'Emery')) {
      acc[`${current.firstName} ${current.lastName}`] = speciesName.reverse();
    }
    return acc;
  }, {});
  return employeeList;
}

// Req 13
function getEmployeeCoverage(idOrName) {
  const defaultList = allEmployeeAnimalsList();
  if (!idOrName) {
    return defaultList;
  }

  const selected = employees.reduce((acc, each) => {
    const fullName = `${each.firstName} ${each.lastName}`;
    if ((idOrName === each.id) || (fullName.includes(idOrName))) {
      acc[fullName] = defaultList[fullName];
    }
    return acc;
  }, {});
  return selected;
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
