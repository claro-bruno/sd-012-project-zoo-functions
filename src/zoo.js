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
  const callBack = (code) => {
    for (let index = 0; index < data.species.length; index += 1) {
      if (code === data.species[index].id) {
        return data.species[index];
      }
    }
  };
  return ids.map(callBack);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .find(({ name }) => name === animal)
    .residents.every((individuo) => individuo.age >= age);
  // every retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return ({});
  }
  return data.employees
    .find((func) => func.firstName === employeeName || func.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  data.employees.push({
    ...personalInfo,
    ...associatedWith,
  });
  return data.employees[data.employees.length - 1];
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((func) => func.managers
    .includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  // seu código aqui
  if (!species) {
    const retorna = {};
    data.species.forEach((num) => {
      retorna[num.name] = num.residents.length;
    });
    return retorna;
  }
  const logo = data.species.find((num) => num.name === species);
  return logo.residents.length;
}

function calculateEntry(...entrants) {
  // seu código aqui
  if (!entrants.length || Object.keys(entrants).length > 1) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants[0];
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}
// ======

const testSexTrue = (test, objectLocal, species) => {
  species.forEach((aux) => {
    const nome = aux.name;
    const obj = {};
    obj[nome] = [];
    const arrayObjRes = [];
    arrayObjRes.push(aux.residents.filter((aux2) => test === aux2.sex));
    arrayObjRes.forEach((aux2) => aux2.forEach((aux3) => obj[nome].push(aux3.name)));
    objectLocal[aux.location].push(obj);
    return objectLocal;
  });
};

const testSex = (test, objectLocal) => {
  const { species } = data;
  if (!test) {
    species.forEach((aux) => {
      const nome = aux.name;
      const obj = {};
      obj[nome] = aux.residents.map((aux2) => aux2.name);
      objectLocal[aux.location].push(obj);
    });
  } else {
    testSexTrue(test, objectLocal, species);
  }
  return objectLocal;
};

const testSort = (objectTest, objectName) => {
  const loc = Object.keys(objectName);
  if (objectTest.sorted) {
    for (let index = 0; index < loc.length; index += 1) {
      objectName[loc[index]].forEach((aux) => {
        const key = Object.keys(aux);
        aux[key].sort();
      });
    }
  }
  return objectName;
};

function getAnimalMap(options = {}) {
  const objectEmpth = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  if (options.includeNames) {
    let objectReturn1 = testSex(options.sex, objectEmpth);
    objectReturn1 = testSort(options, objectReturn1);
    return objectReturn1;
  }
  data.species.forEach((ar) => objectEmpth[ar.location].push(ar.name));
  return objectEmpth;
}

function getSchedule(dayName) {
  const { hours } = data;
  const days = Object.keys(hours);
  const obj2return = {};
  if (!dayName) {
    days.forEach((aux) => {
      obj2return[aux] = `Open from ${hours[aux].open}am until ${hours[aux].close - 12}pm`;
    });
    obj2return.Monday = 'CLOSED';
    return obj2return;
  }
  const day = days.findIndex((aux) => dayName === aux);
  if (dayName !== 'Monday') {
    obj2return[days[day]] = `Open from ${hours[days[day]].open}am until ${hours[days[day]]
      .close - 12}pm`;
  } else {
    obj2return.Monday = 'CLOSED';
  }
  return obj2return;
}

function getOldestFromFirstSpecies(id) {
  const specId = data.employees.find((aux) => aux.id === id).responsibleFor[0];
  const animal = data.species.find((aux) => aux.id === specId);
  const arrayAnimal = animal.residents;
  const localiza = arrayAnimal.reduce((acc, value) => (acc.age >= value.age ? acc : value));
  return [localiza.name, localiza.sex, localiza.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  const arrayPrices = Object.keys(prices);
  arrayPrices.forEach((aux) => {
    prices[aux] = Math.round((prices[aux] * (1 + (percentage / 100))) * 100) / 100;
  });
  return prices;
}

function getEmployeeCoverage(idOrName) {
  const obj2return = {};
  const { employees: func, species } = data;
  if (!idOrName) {
    func.forEach((aux) => {
      const arrayAnimal = [];
      aux.responsibleFor.forEach((animal) => {
        const found = species.find((specId) => animal === specId.id);
        arrayAnimal.push(found.name);
      });
      obj2return[`${aux.firstName} ${aux.lastName}`] = arrayAnimal;
    });
  } // else {

  // }
  return obj2return;
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
