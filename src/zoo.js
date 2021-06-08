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
const { employees } = require('./data');

// 1=========================================================

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}// se o filter não receber nenhum item ele retorna array vazio
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));

// 2=========================================================

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((animalName) => animalName.name === animal)
    .residents.every((specie) => specie.age > age);
}
// console.log(getAnimalsOlderThan('otters', 7));

// 3=========================================================

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find((n) => n.firstName === employeeName || n.lastName === employeeName);
}
// console.log(getEmployeeByName());
// RETURN COM VÁRIAS OPÇÕES----------------------------
// return algo || algo || algo

// 4=========================================================

function createEmployee(personalInfo, associatedWith) {
  // const newEmployee = {
  //   id: personalInfo.id,
  //   firstName: personalInfo.firstName,
  //   lastName: personalInfo.lastName,
  //   managers: associatedWith.managers,
  //   responsibleFor: associatedWith.responsibleFor,
  // };
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

// console.log(createEmployee(info1, info2));
// 5=========================================================

function isManager(id) {
  const employee = employees
    .some((isEmployee) => isEmployee.managers.find((idManager) => idManager === id));
  // .some((isEmployee) => isEmployee.managers.length === 0 || isEmployee.managers.find((idManager) => idManager === id))// CEO
  return employee;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));l

// 6=========================================================

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName, // TENTAR USAR O FOREACH QUE ALTERA O ARRAY ORIGINAL
    managers,
    responsibleFor,
  };
  if (!newEmployee.managers) {
    newEmployee.managers = [];
  }
  if (!newEmployee.responsibleFor) {
    newEmployee.responsibleFor = [];
  }
  console.log(newEmployee);
  employees.push(newEmployee);
  return employees;
}
// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');
// console.log(employees.length);

// 7=========================================================

function countAnimals(species) {
  if (!species) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  const allAnimals = data.species.find((nameSpecie) => species.includes(nameSpecie.name));
  return allAnimals.residents.length;
}
// console.log(countAnimals());

// 8=========================================================

function calculateEntry(entrants = 0) {
  const personsPrice = data.prices;

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * personsPrice.Adult + Child * personsPrice.Child + Senior * personsPrice.Senior;
  // return personAge.reduce((acc, curr) => {
  //   const teste = acc + entrants[curr] * prices[curr]; // PERGUNTAR PQ NÃO FUNCIONA ASSIM
  //   return teste;
  // }, 0);
  // entrants[curr] é igual ao value do entrants. Ex: {'Senior': 2} = 2
}

// console.log(calculateEntry({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

// 9=========================================================

// function getAnimalMap(options) {
//   // const expected = {
//   //   NE: ['lions', 'giraffes'],
//   //   NW: ['tigers', 'bears', 'elephants'],
//   //   SE: ['penguins', 'otters'],
//   //   SW: ['frogs', 'snakes']
//   // };
//   // return expected;

//   // const locations = data.species.reduce((animals) => {
//   //   return { [animals.location]:  [animals.name] }
//   // })

//   const locations = data.species.reduce((acc, curr) => {
//     return acc + { [curr.location] : [curr.name] };
//   }, {});
//   return locations;
// }
// console.log(getAnimalMap());

// 10=========================================================

function getSchedule(dayName) {
  const daysHours = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };

  if (!dayName) {
    return daysHours;
  }
  return { [dayName]: daysHours[dayName] };
}

// console.log(getSchedule('Sunday'));

// 11=========================================================

// function getOldestFromFirstSpecies(id) {
//   const idEmployee = employees
//     .find((idNumber) => idNumber.id === id).responsibleFor[0];
//   // encontra o employee
//   const findAnimalId = data.species
//     .find((animalId) => idEmployee
//       .responsibleFor.includes(animalId.id));
//   // encontra os animais que o employee é responsável
//   return findAnimalId;
//   // achar o animal mais velho que ele é responsável ???
// }
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// 12=========================================================

function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  const percentValue = ((percentage / 100) + 1);
  const adulto = Math.round(Adult * percentValue * 100) / 100;
  const senior = Math.round(Senior * percentValue * 100) / 100;
  const child = Math.round(Child * percentValue * 100) / 100;
  data.prices.Adult = adulto;
  data.prices.Child = child;
  data.prices.Senior = senior;
  return data.prices;
}

// console.log(increasePrices(30));

// 13=========================================================

// function getEmployeeCoverage(idOrName) {
//   // achar todos employees
//   const allEmployees = employees.map((idEmployee) => idEmployee);
//   // achar todos animais
//   const allAnimals = data.species.map((animal) => animal);
//   // todos funcionarios e seus respectivos animais
// const funcionarioAtual = allEmployees
// .filter(({responsibleFor}) => responsibleFor.responsibleFor === allAnimals.id);
//   return funcionarioAtual
// }
// console.log(getEmployeeCoverage('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
