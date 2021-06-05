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

// testar shorthand Bloco 8.5
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // return data.employees.push(`{id: ${id}, firstName: ${firstName}, lastName: ${lastName}, managers: ${[...managers]}, responsibleFor: ${[...responsibleFor]},`);
  return data.employees.push(...id);
}
// Testar object Destructuring para extrair valores das chaves bloco 8.5
function countAnimals(species) {
  const {...name} = data.species;
  const animalCounter = data.species.find((especie) => {
    data.species.name === species
    return Object.keys(data.species.residents).length;
  });
  const noParameter = data.species.map(() => {
  // '{name: Object.keys(data.species.residents).length}: 
  });
  // const 
  // return {};
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
  // seu código aqui
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

const greeting = (user = 'usuário') => {
  return `Welcome ${user}!`;
} 



greeting(); 
