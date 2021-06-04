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
function getSpeciesByIds(...ids) {
  const emptyArray = [];
  if(ids.length === 0){
    return emptyArray;
  }
  const outputArray = data.species.forEach((especie) => especie.id === ids);
  return outputArray;
}

function getAnimalsOlderThan(animal, age) {
  const verifyAnimal = data.species.find((animalSpecie) => animalSpecie.name === animal);
  const verifyOlderThan = verifyAnimal.residents.every((resident) => resident.age > age);
  console.log(verifyOlderThan);
  return verifyOlderThan;
}
// testar Default Parameters para saber a opção de não ter parametro Bloco 8.5
function getEmployeeByName(employeeName) {
  const nameArray = [];
  const verifyNames = employees.find(
    (name) => name.firstName === employeeName || name.lastName === employeeName,
  );
  nameArray.push(verifyNames);
  return nameArray;
}

function createEmployee(personalInfo, associatedWith) {
  console.log(personalInfo);
  const EmployeeCreated = personalInfo.map((newEmployee) => {
    const EmployeeCreated = associatedWith.map((associatedWithInfo) => {
      // return { `id: ${personalInfo.id} firstName: ${personalInfo.firstName} lastName: ${personalInfo.lastName} managers: ${...associatedWith.managers} responsibleFor: ${...associatedWith.responsibleFor}`};
    });
  });  
}

function isManager(id) {
  const verifyManager = data.employees.some((manager) => id === manager.managers);
}
// testar shorthand Bloco 8.5
function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  return data.employees.push(`{id: ${id}, firstName: ${firstName}, lastName: ${lastName}, managers: ${[...managers]}, responsibleFor: ${[...responsibleFor]},`);
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
