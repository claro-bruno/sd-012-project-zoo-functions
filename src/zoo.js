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

const data = require('./data');

// requisito 1
function getSpeciesByIds(...ids) {
  // const speciesByIds = data.species.find((specie) => specie.id === ids);
  const speciesByIds = data.species.filter((specie) => ids.find((id) => specie.id === id));
  return speciesByIds;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))

// requisito 2
function getAnimalsOlderThan(animal, age) {
  const findSpecies = data.species.find((specie) => specie.name === animal);
  const ageResidents = findSpecies.residents.every((resident) => resident.age > age);

  return ageResidents;
}

// requisito 3
function getEmployeeByName(employeeName) {
  if (!employeeName) { return {}; }

  const findEmployee = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return findEmployee;
}
// console.log(getEmployeeByName('Emery'));

// requisito 4
function createEmployee(personalInfo, associatedWith) {
  const employee = Object.assign(personalInfo, associatedWith);
  return employee;
}

// requisito 5
function isManager(id) {
  const managerId = data.employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
  return managerId;
  /* acessar o data para acessar lista de employees, identificar se algum dos employees é manager.
  retornar se o employee ocupa cargo de gerente em relação ao id, entao testar o id para verificar true ou false. */
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

// requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // managers e responsibleFor sao arrays, adicionar ao data.employees...
  // ...usando push a partir dos dados preenchidos nos parametros assim adicionando ao fim da lista
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  const addNewEmployee = data.employees.push(newEmployee);
  return addNewEmployee;
}
// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe', managers = [], responsibleFor = []));

// REQUISITO 7
// Consultei o respositório de Vitor Hugo Braz leite para fazer essa parte.
// Link: https://github.com/tryber/sd-011-project-zoo-functions/pull/162

// Explicação:
// Para cada especie, acessa o nome do animal e retorna a quantidade em um objeto.
// Sem parametros retorna animais e suas quantidades "empurrando" para dentro do objeto com auxilio de object destructuring.
// Com o nome de uma espécie de animal, retorna somente a quantidade na linha 82.
function countAnimals(species) {
  let obj = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      obj[`${specie.name}`] = specie.residents.length;
    });
  } else {
    obj = data.species.find((specie) => specie.name === species).residents.length;
  }
  return obj;
}

// console.log(countAnimals());

// requisito 8
function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  const total = (Adult * data.prices.Adult)
  + (Senior * data.prices.Senior) + (Child * data.prices.Child);

  return total;
}

// requisito 9
function getAnimalMap() {
  // seu código aqui options
}

// requisiito 10
function getSchedule() {
//   let hour = data.hours
//   let schedule = {
//       Tuesday = 'Open from 8am until 6pm',
//       Wednesday = 'Open from 8am until 6pm',
//       Thursday = 'Open from 10am until 8pm',
//       Friday = 'Open from 10am until 8pm',
//       Saturday = 'Open from 8am until 10pm',
//       Sunday = 'Open from 8am until 8pm',
//       Monday = 'CLOSED'
}

// seu código aqui dayName

// console.log(getSchedule(Tuesday));

// requisito 11
function getOldestFromFirstSpecies() {
  // - Passado o id de um funcionário, encontra a primeira espécie de animal
  // const employeesID = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  // const animals = data.species.find((specie) => specie.id === employeesID).residents;
  // const getOldest = animals.reduce;

  // const result = arr.reduce( ( sum, { x } ) => sum + x , 0)

}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// requisito 12
function increasePrices() {

}
// console.log(increasePrices(20));

// requisito 13
function getEmployeeCoverage() {
  // seu código aqui idOrName
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
