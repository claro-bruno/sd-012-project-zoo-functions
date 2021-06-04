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
// 0938aa23-f153-4937-9f88-4858b24d6bce id de teste
const data = require('./data');
const arraysOfData = data.species; // especies
const arraysOfemployee = data.employees; // empregados
function getSpeciesByIds(...ids) { 
  let idGathered = arraysOfData.filter( element => ids.find( verId  => verId === element.id));// Compara o parametro com a data e retorna seu resultado
  //console.log(idGathered)
  return idGathered;
};
//getSpeciesByIds('fdb2543b-5662-46a7-badc-93d960fdc0a8', '0e7b460e-acf4-4e17-bcb3-ee472265db83'); testes diretos
function getAnimalsOlderThan(animal, age) {
  const animalName = arraysOfData.find( item => item.name === animal);
  const animalAgeVerify = animalName.residents.every(item => item.age >= age);
  console.log(`Verifica o retorno da comparação do animal com seu respectiva idade: (${animalAgeVerify})`);
  return animalAgeVerify;
}
//getAnimalsOlderThan('lions', 5) teste
function getEmployeeByName(employeeName) {
  if(employeeName === undefined){
    const objVazio = {};
    console.log(`Nenhum paramentro encontrado!${objVazio}`);
    return objVazio;
  }else{
    const name = arraysOfemployee.find( item => item.firstName === employeeName || item.lastName === employeeName);
    console.log(name);
    return name;
  };
};
//getEmployeeByName('Nelson'); 
function createEmployee(personalInfo, associatedWith) {
  const employeeCreated = {...personalInfo, ...associatedWith};
  return employeeCreated; 
}
//createEmployee({nome: 'teste'},{sobre: 'teste2'})

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
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
