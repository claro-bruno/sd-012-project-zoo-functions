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

// Testar o spread operator 8.5 para substituir o push
// Precisa iterar tanto o ids quanto o data.species.filter
// HOF não trabalha com objeto
function getSpeciesByIds(...ids) {
  //  if(ids.length === 0){
  //    return [];
  //  }
  //  const outputArray = data.species.find((animal) => ids.some((idss) => animal.id === idss) === ids);
  //  return outputArray;
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
// Testar object Destructuring para extrair valores das chaves bloco 8.5
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
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
    // const allAnimals = data.species.map((animal) => `${animal.name}:${animal.residents.length}`)
    // id do funcionário você encontra o mesmo com find em employees, 
    // você usa o find para encontrar o primeiro id no responsibleFor em employees
    // O id (primeiro resposibleFor) encontrado será comparado com o id em species
    // usando forEach defina uma idade igual a 1 para ser a idade do mais velho, 
    // ao ser comparado reatribua o valor do comparador igual ao animal, caso o animal seja o mais velho na comparação
    // Ao reatribuir a idade do comparador, também reatribua o nome e sexo do mesmo
    //retornar o valor     
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

