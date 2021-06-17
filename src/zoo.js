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

const { species, employees, prices, hours } = require('./data');
// dica colega Caio para colocar as arrays de objetos aqui p chamar com mais facilidades nas funções.
const data = require('./data');

// dica de usar o index dentro do filter na monitoria.
function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids.length) return [];
  return data.species.filter((specie, index) => specie.id === ids[index]);
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const findindSpecie = species.find((specie) => specie.name === animal);
  return findindSpecie.residents.every((resident) => age < resident.age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.lastName === employeeName || employee.firstName === employeeName;
  return employees.find(findEmployee);
}
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

// ajuda do colega Luis Fernando
function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) =>
    employee.managers.some((value) => value === id));
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// ajuda colega Caio
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(species2) {
  // seu código aqui
  if (!species2) {
    return species.reduce((acc, curr) => {
      const animalName = curr.name;
      acc[animalName] = curr.residents.length;
      return acc;
    }, {});
  }
  const findSpecie = species.find((specie) => specie.name === species2);
  return findSpecie.residents.length;
}
// console.log(countAnimals('lions'));

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: numberOfAdults = 0, Child: numberOfChildren = 0,
    Senior: numberOfSeniors = 0 } = entrants; // dica de threads do slack.
  const adults = numberOfAdults * prices.Adult;
  const childs = numberOfChildren * prices.Child;
  const seniors = numberOfSeniors * prices.Senior;
  return adults + childs + seniors;
}
// calculateEntry({ 'Adult': 2, 'Child': 3, 'Senior': 1 });

// function getAnimalMap() {
//   // seu código aqui options
// }

// MEGA ajuda do Thalles
function getSchedule(dayName) {
  // seu código aqui
  const arraySchedule = Object.entries(hours);
  const objSchedule = arraySchedule.reduce((acc, curr) => {
    const { open, close } = curr[1];
    acc[curr[0]] = `Open from ${open}am until ${close - 12}pm`;
    if (curr[0] === 'Monday') {
      acc[curr[0]] = 'CLOSED';
    }
    return acc;
  }, {});
  if (!dayName) return objSchedule;
  const objDayName = { [dayName]: objSchedule[dayName] };
  return objDayName;
}
// console.log(getSchedule('Tuesday'));

function getOldestFromFirstSpecies(id2) {
  // seu código aqui
  const getEmployee = employees.find((employee) => employee.id === id2);
  const idSpecie = getEmployee.responsibleFor[0];
  const objSpecie = species.find((specie) => specie.id === idSpecie);
  const residentsInOrder = objSpecie.residents.sort((a, b) => b.age - a.age);
  const oldestResident = residentsInOrder[0];
  return Object.values(oldestResident);
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) {
  Object.keys(prices).forEach((element) => {
    prices[element] *= (1 + percentage / 100);
    prices[element] = Math.round(prices[element] * 100) / 100;
  });
  return prices;
}
// console.log(increasePrices(30));

// 13
function getEmployeeByNameOrId(data2) {
  // seu código aqui
  if (!data2) return {};
  const findEmployee = (employee) =>
    employee.lastName === data2 || employee.firstName === data2 || employee.id === data2;
  return employees.find(findEmployee);
}
// console.log(getEmployeeByNameOrId('Emery'));

function getEmployeeCoverage(idOrName) {
  const getSpeciesById = (id) => species.find((specie) => specie.id === id);
  if (!idOrName) {
    const employeesMap = employees.reduce((obj, employee) => {
      const obj2 = obj;
      obj2[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
        .map((id) => getSpeciesById(id).name);
      return obj2;
    }, {});
    return employeesMap;
  }
  const objEmployee = getEmployeeByNameOrId(idOrName);
  const responsible = objEmployee.responsibleFor;
  const responsibleMap = responsible.map((element) => getSpeciesById(element).name);
  const objFinal = {
    [`${objEmployee.firstName} ${objEmployee.lastName}`]: responsibleMap,
  };

  return objFinal;
}
console.log(getEmployeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
