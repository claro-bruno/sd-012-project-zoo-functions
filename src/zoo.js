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

const { species, employees } = require('./data');
const data = require('./data');

const arrayVazio = [];
const objetoVazio = {};

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return arrayVazio;
  }
  const [firstSpecie, secondSpecie] = ids;
  const specie1 = species.filter((specie) => specie.id === firstSpecie);
  const specie2 = species.filter((specie) => specie.id === secondSpecie);
  const allSpecies = [...specie1, ...specie2];
  return allSpecies;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getSpecie = species.filter((specie) => specie.name === animal);
  const getResidents = getSpecie.map((resident) => resident.residents);
  // testar REDUCE posteriormente
  // console.log(getResidents);
  return getResidents.every((specie) => age < specie[0].age);
}

// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return objetoVazio;
  }

  const n = employeeName;

  const getEmp = employees.find((employee) => employee.firstName === n || employee.lastName === n);
  return getEmp;
}

// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

// console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  const getManager = employees.some((employee) => employee.managers.some((item) => item === id));
  return getManager;
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = () => ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  data.employees.push(newEmployee());
  return employees;
}

function countAnimals(getSpecies) {
  if (getSpecies === undefined) {
    const result = {};
    const eachSpecie = species.map((specie) => {
      const nome = specie.name;
      const quantidade = specie.residents.length;
      result[`${nome}`] = quantidade;
      // console.log(result);
      return result;
    });
    return eachSpecie[0];
  }
  const specie = (nome) => species.find((thisSpecie) => thisSpecie.name === nome).residents.length;
  return specie(getSpecies);
}

// console.log(countAnimals('lions'));

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
