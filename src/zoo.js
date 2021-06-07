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
  const objToArray = Object.entries(data.hours);
  const objSchedule = {};
  const objDay = {};
  objToArray.forEach((schedule) => objSchedule.[schedule[0]] = `Open from ${Object.values(schedule[1])[0]}am until ${Object.values(schedule[1])[1] - 12}pm`);
  objSchedule.Monday = 'CLOSED';
  if (dayName === undefined) {
    return objSchedule;    
  }
  const scheduleToArray = Object.entries(objSchedule);
  const findDayName = scheduleToArray.find((name) => dayName === name[0]);
  objDay.[findDayName[0]] = findDayName[1];
  return objDay;  
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
