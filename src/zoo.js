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
  const search = ids.map((element) => (data.species.find((key) => key.id === element)));
  return search;
}
// Consegui retornar mais de uma chave com a ajuda do colega Rodrigo Facury que sugeriu o uso do map.

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.find((name) => name.name === animal);
  const every = getAnimal.residents.every((key) => key.age > age);
  return every;
}
// Fiz o encadeamento do every com o find baseada no código do colega Rodrigo Facury;

// console.log(getAnimalsOlderThan('lions', 20));

function getEmployeeByName(employeeName) {
  const getEmployee = data.employees.find((key) => key.firstName === employeeName || key.lastName
  === employeeName);
  if (getEmployee === undefined) {
    return {};
  }
  return getEmployee;
}

// console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// console.log(createEmployee({id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', firstName: 'Nigel', lastName: 'Nelson',}, {managers: ['burlId', 'olaId'],
//   responsibleFor: ['lionId', 'tigersId']}));

function isManager(id) {
  const manager = data.employees.map((key) => key.managers.some((value) => value === id));
  const ismanager = manager.some((verify) => verify === true);
  return ismanager;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db834'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const create = data.employees.push(createEmployee({ id, firstName, lastName }, { managers,
    responsibleFor }));
  return create;
}

// console.log(addEmployee('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1', 'Nigel', 'Nelson', ['burlId', 'olaId'], ['lionId', 'tigersId']));
// console.log(data.employees);

function countAnimals(species) {
  const object = {}; // Criei a variável objeto com a dica do Rodrigo Facury para que a função retornasse um objeto.
  data.species.map((element) => {
    object[element.name] = element.residents.length;
    const acc = object;
    return acc;
  });
  if (species === undefined) {
    return object;
  }
  const getAnimal = data.species.find((name) => name.name === species);
  const count = getAnimal.residents;
  return count.length;
}

// console.log(countAnimals());

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === null) {
    return 0;
  }
  const entradas = Object.entries(entrants);
  const total = entradas.reduce((acc, current) => {
    const count = acc + current[1] * data.prices[current[0]];
    return count;
  }, 0);
  return total;
}
// Resolvido com o auxílio do Rodrigo Facury;
// console.log(calculateEntry({ Child: 2, Senior: 1 }));

function getAnimalMap(options) {
  const object = { NE: [], NW: [], SE: [], SW: [] };
  if (options === undefined) {
    data.species.map((element) => {
      const insert = object[element.location].push(element.name);
      return insert;
    });
    return object;
  }
}

// console.log(getAnimalMap());

function getSchedule(dayName) {
  const prog = {};
  const dayprog = {};
  Object.entries(data.hours).forEach((day) => {
    if (day[1].open === 0) {
      prog[day[0]] = 'CLOSED';
    } else {
      prog[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    }
  });
  dayprog[dayName] = prog[dayName];
  return (dayName === undefined) ? prog : dayprog;
}

// console.log(getSchedule());

function getOldestFromFirstSpecies(id) {
  return id;
}

function increasePrices(percentage) {
  if (percentage === undefined || percentage === null) {
    return 0;
  }
  Object.entries(data.prices).forEach((element) => {
    const count = element[1] * (percentage / 100) + element[1];
    const float = parseFloat((Math.round(count * 100) / 100).toFixed(2));
    data.prices[element[0]] = float;
  });
  return data.prices;
}
// Inseri o Math.round para que o valor fique apenas com duas casas depois da vírgula. Contei com a ajuda do colega Rodrigo Facury;
// console.log(increasePrices(200));
const listId = {};

function getEmployeeList() {
  data.employees.map((element) => {
    const name = `${element.firstName} ${element.lastName}`;
    listId[name] = [];
    element.responsibleFor.forEach((id) => {
      data.species.forEach((key) => {
        if (id === key.id) {
          listId[name].push(key.name);
        }
      });
    });
    return listId;
  });
  return listId;
}

function getEmployeeCoverage(idOrName) {
  getEmployeeList();
  const callManager = {};
  if (idOrName !== undefined) {
    const search = data.employees.find((element) =>
      (idOrName === element.id || idOrName === element.firstName || idOrName === element.lastName));
    const found = Object.keys(listId).find((employee) => employee.includes(search.firstName));
    callManager[found] = listId[found];
    return callManager;
  }
  return getEmployeeList();
}

console.log(getEmployeeCoverage('Azevado'));

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
