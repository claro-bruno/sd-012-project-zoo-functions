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
const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  if (ids.length > 0) {
    const especie = data.species.filter(
      (animal) => ids.find(
        (idInput) => idInput === animal.id,
      ) === animal.id,
    );
    return especie;
  }
}

function getAnimalsOlderThan(animal, age) {
  const verifyAnimal = data.species.find((animalSpecie) => animalSpecie.name === animal);
  const verifyOlderThan = verifyAnimal.residents.every((resident) => resident.age > age);
  console.log(verifyOlderThan);
  return verifyOlderThan;
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    const nameArray = {};
    return nameArray;
  }
  const verifyNames = data.employees.find(
    (name) => name.firstName === employeeName || name.lastName === employeeName,
  );
  return verifyNames;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const someManager = data.employees.some(
    (employee) => employee.managers.find(
      (manager) => manager === id,
    ) === id,
  );
  return someManager;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const inputArray = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  if (managers === undefined || responsibleFor.length === undefined) {
    inputArray.managers = [];
    inputArray.responsibleFor = [];
    return data.employees.push(inputArray);
  }
  return data.employees.push(inputArray);
}

function countAnimals(especie) {
  const animalsObj = {};
  if (especie === undefined) {
    data.species.forEach(
      (animal) => animalsObj[`${animal.name}`] = animal.residents.length,
    );
    return animalsObj;
  }
  const findAnimals = data.species.find((animal) => animal.name === especie);
  const findresidents = findAnimals.residents.length;
  return findresidents;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  if (entrants.Child === undefined) {
    entrants.Child = 0;
  }
  if (entrants.Senior === undefined) {
    entrants.Senior = 0;
  }
  if (entrants.Adult === undefined) {
    entrants.Adult = 0;
  }
 const price = data.prices.Adult * entrants.Adult + data.prices.Child * entrants.Child + data.prices.Senior * entrants.Senior;
 return price;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  
  if (dayName === undefined) {
 
    const objToArray = Object.entries(data.hours);
    console.log('esseo é o valor do objToArray', objToArray);
    const daysArray = [];
    const forEachschendule = objToArray.forEach((schedule) =>  console.log(`${schedule[0]}:`)); 
    console.log(forEachschendule);
    for(let index = 0; index <= objToArray.length; index += 1) {
      let objToArray2 = Object.entries(objToArray[index][1]);
      let objToArray20 = objToArray2[0][1];
      daysArray.push(objToArray20);
      let objToArray21 = objToArray2[1][1];
      daysArray.push(objToArray21);
      console.log(objToArray2[0][1]); // 8
      console.log(objToArray2[1][1]); // 18 
      console.log(daysArray);
    }
    // const forEachschendule = objToArray.forEach((schedule) => daysArray.forEach((hours) => console.log(`${schedule[0]}:`)));    
  }
}

function getOldestFromFirstSpecies(id) {
    // const allAnimals = data.species.map((animal) => `${animal.name}:${animal.residents.length}`)
    // id do funcionário você encontra o mesmo com find em employees, 
    // você usa o find para encontrar o primeiro id no responsibleFor em employees
    // O id (primeiro resposibleFor) encontrado será comparado com o id em species
    // usando forEach defina uma idade igual a 1 para ser a idade do mais velho, 
    // ao ser comparado reatribua o valor do comparador igual ao animal, caso o animal seja o mais velho na comparação
    // Ao reatribuir a idade do comparador, também reatribua o nome e sexo do mesmo
    // retornar o valor   
    // No lugar do comparador pode utilizar o reduce 
}

// Utilizar um ForEach
function increasePrices(percentage) {
  data.prices.Adult = Math.round(
    (data.prices.Adult + data.prices.Adult * percentage * 0.01
    ) * 100,
  ) / 100;
  data.prices.Senior = Math.round(
    (data.prices.Senior + data.prices.Senior * percentage * 0.01
    ) * 100,
  ) / 100;
  data.prices.Child = Math.round(
    (data.prices.Child + data.prices.Child * percentage * 0.01
    ) * 100,
  ) / 100;
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
