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

//função que retorna o array [NE, SW, SE, SW] 
function getLocalSortedArray() {
  const newArr = data.species.map((especie) => especie.location).sort();
  const locArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
  return locArr;
}

const locArray = getLocalSortedArray();

//função que retorna os nomes dos animais de cada especie, com a opção de selecionar o sexo (sem seleção mostra todos)//
function getAnimalsNames(speciesss, sex) {
  const targetAnimal = data.species.find((anys) => anys.name === speciesss);
  const residentsNames = targetAnimal.residents.map((ittem) => ittem.name);
  if (!sex) {
    return residentsNames;
  } if (sex === 'female') {
    const femaleIndividuals = targetAnimal.residents.filter((animal => animal.sex === 'female'));
    const femaleNames = femaleIndividuals.map((animal) => animal.name);
    return femaleNames;
  } if (sex === 'male') {
    const maleIndividuals = targetAnimal.residents.filter((animal => animal.sex === 'male'));
    const maleNames = maleIndividuals.map((animal) => animal.name);
    return maleNames;
  }
}

//retorna um array composto por arrays menores com o seguinte formato: [ { lions: [Array] }, { giraffes: [Array] } ]
//cada especie tem um array com nomes não ordenados se não houver parametro; para ordenar precisa fazer sort === 'sorted'
//também retorna animais de apenas um sexo combinado com o sorted
function getObjAnimalLocation(sort, sex) {
  const locAniArr = Object.values(getAnimalLocation());
  const arrayObjsAni = locAniArr.map((element) => {
    return element.map((element2) => {
      if (sort === 'sorted') {
        if (sex === 'female') {
          const newOb1 = {};
          newOb1[element2] = getAnimalsNames(element2, 'female').sort();
          return newOb1;
        }
        else if (sex === 'male') {
          const newOb2 = {};
          newOb2[element2] = getAnimalsNames(element2, 'male').sort();
          return newOb2;
        }
        const newOb3 = {};
        newOb3[element2] = getAnimalsNames(element2).sort();
        return newOb3;
      }
      const newOb6 = {};
      newOb6[element2] = getAnimalsNames(element2);
      return newOb6;
    });
  });
  const monsterObj = {};
  arrayObjsAni.forEach((animal, index) => {
    monsterObj[locArray[index]] = animal;
  });
  return monsterObj;
};

//retorna um array composto por arrays menores com o seguinte formato: [ { lions: [Array] }, { giraffes: [Array] } ];
//retorna todos os nomes dos animais de apenas um sexo; recebe o sexo como parâmetro
function animalNamesSex(sex) {
  const locAniArr2 = Object.values(getAnimalLocation());
  const arrayObjsAni2 =  locAniArr2.map((element) => {
    return element.map((element2) => {
      if (sex === 'female') {
        const newOb7 = {};
        newOb7[element2] = getAnimalsNames(element2, 'female');
        return newOb7;
      }
      const newOb8 = {};
      newOb8[element2] = getAnimalsNames(element2, 'male');
      return newOb8;
    });
  });
  const monsterObj2 = {};
  arrayObjsAni2.forEach((animal, index) => {
    monsterObj2[locArray[index]] = animal;
  })
  return monsterObj2;
};  

//função que retorna objeto cujas chaves são as localizações e os valores são arrays com os respectivos animais (sem nomes)
function getAnimalLocation() {
  const animalLocation = {};
  getLocalSortedArray().forEach((loc) => { 
    const anList = data.species.filter((animal) => animal.location === loc);
    const namesArr = anList.map((item) => item.name);
    animalLocation[loc] = namesArr;
  })
  return animalLocation
};

function getAnimalMap(options) {
  if (!options) {
    return getAnimalLocation();
  } else if (options.includeNames === true) {
    if (options.sorted === true) {
      if(options.sex === 'female') {
        return getObjAnimalLocation('sorted', 'female');
      }
      if (options.sex === 'male') {
        return getObjAnimalLocation('sorted', 'male');
      }
      return getObjAnimalLocation('sorted');
    }
    else if (options.sex === 'female') {
      return animalNamesSex('female');
    }else if (options.sex === 'male') {
      return animalNamesSex('male');
    }
    return getObjAnimalLocation();
  }
}

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
