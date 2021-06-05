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

// const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((itemId) => data.species.find((animal) => animal.id === itemId));
}

function getAnimalsOlderThan(animal, age) {
  const animalSel = data.species.find((item) => item.name === animal);
  return animalSel.residents.every((individuo) => individuo.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((em) => em.lastName === employeeName || em.firstName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const personal = {
    id: `${personalInfo.id}`,
    firstName: `${personalInfo.firstName}`,
    lastName: `${personalInfo.lastName}`,
  };
  const associated = {
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return { ...personal, ...associated };
}

function isManager(id) {
  const managerList = data.employees.map((empl) => empl.managers).flat();
  return managerList.some((item) => item === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(specie) {
  const animalObj = {};
  if (!specie) {
    data.species.forEach((animal) => {
      animalObj[animal.name] = animal.residents.length;
    });
    return animalObj;
  }
  const findName = data.species.find((animal) => animal.name === specie);
  return findName.residents.length;
}

const calculaValor = (Adult = 0, Senior = 0, Child = 0) =>
  Adult * 49.99 + Senior * 24.99 + Child * 20.99;

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  return calculaValor(entrants.Adult, entrants.Senior, entrants.Child);
}
//----------------------------separando--------------------------------------//
 //link utilizado neste requisito: https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c

function getLocalSortedArray() {
  const newArr = data.species.map((especie) => especie.location).sort();
  const locArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
  return locArr
};

function getAnimalsNames(speciesss) {
  const targetAnimal = data.species.find((anys) => anys.name === speciesss);
  const residentsNames = targetAnimal.residents.map((ittem) => ittem.name);
  return residentsNames;
}

function getSpeciesEachLocation(sorted = false) {
  const locAniArr = Object.values(getAnimalLocation());
  const arrayObjsAni =  locAniArr.map((element) => {
    return element.map((element2) => {
      let newOb = {};
      if (sorted === true) {
        newOb[element2] = getAnimalsNames(element2).sort();
        return newOb;
      }
      newOb[element2] = getAnimalsNames(element2);
      return newOb;
    })
  })
  return arrayObjsAni
};

function getAnimalLocation() {
  const animalLocation = {};
  getLocalSortedArray().forEach((loc) => { 
    const anList = data.species.filter((animal) => animal.location === loc);
    const namesArr = anList.map((item) => item.name);
    animalLocation[loc] = namesArr;
  })
  return animalLocation
};

const locArr = getLocalSortedArray();

function getAnimalMap(options) {
  if (!options) {
    return getAnimalLocation();
  }
  if (options.includeNames === true) {
    const monsterObj = {};
    if (options.sorted === true) {
      getSpeciesEachLocation(true).forEach((ani, index) => {
      monsterObj[locArr[index]] = ani;
      });
      return monsterObj;
    }
    getSpeciesEachLocation().forEach((ani, index) => {
      monsterObj[locArr[index]] = ani;
      });
    return monsterObj;
  }
};

const cronograma = data.hours;
const cronoEntries = Object.entries(cronograma);

function getSchedule(dayName) {
  const dayCronoObj = {};
  if (!dayName) {
    const cronoObj = {};
    cronoEntries.forEach((dia) => {
      cronoObj[`${dia[0]}`] = `Open from ${dia[1].open}am until ${(dia[1].close) % 12}pm`;
    });
    cronoObj.Monday = 'CLOSED';
    return cronoObj;
  } if (dayName !== 'Monday') {
    const selDay = cronoEntries.find((day) => day[0] === dayName);
    dayCronoObj[`${dayName}`] = `Open from ${selDay[1].open}am until ${(selDay[1].close) % 12}pm`;
    return dayCronoObj;
  }
  dayCronoObj[`${dayName}`] = 'CLOSED';
  return dayCronoObj;
}

const employeeList = data.employees;

function getOldestFromFirstSpecies(id) {
  const getEmployee = employeeList.find((employee) => employee.id === id);
  const getAnimalId = getEmployee.responsibleFor[0];
  const selectedAnimal = data.species.find((animal) => animal.id === getAnimalId);
  const maiorIdade = selectedAnimal.residents.map((anim) => anim.age)
    .sort((a, b) => (b - a))[0];
  const oldestFromFirst = selectedAnimal.residents
    .find((individuo) => individuo.age === maiorIdade);
  return Object.values(oldestFromFirst);
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

function getEmployeeCoverage(idOrName) {
  const emplCoverageObj = {};
  const emplCovObj = {};
  if (typeof idOrName !== 'string') {
    employeeList.forEach((empl) => {
      const animalList = empl.responsibleFor.map((element) =>
        data.species.find((ani) => ani.id === element).name);
      emplCoverageObj[`${empl.firstName} ${empl.lastName}`] = animalList;
    });
    return emplCoverageObj;
  }
  const targetEmp = data.employees.find((eemp) =>
    eemp.lastName === idOrName || eemp.firstName === idOrName || eemp.id === idOrName);
  const nameList = targetEmp.responsibleFor.map((animaal) =>
    data.species.find((sp) => sp.id === animaal).name);
  emplCovObj[`${targetEmp.firstName} ${targetEmp.lastName}`] = nameList;
  return emplCovObj;
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
  // increasePrices,
  createEmployee,
};
