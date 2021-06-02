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
const { species, employees, prices } = require('./data');

// function getSpeciesByIds(...ids) {
//   // seu código aqui
//   if (arguments.length === 0) {
//     return [];
//   }
//   const arraySpecie = ids.map((idi) => species.find((specie) => specie.id === idi));
//   return arraySpecie;
// }

// function getAnimalsOlderThan(animal, age) {
//   // seu código aqui
//   const minimumAge = species.find((specie) => specie.name === animal)
//     .residents.every((resident) => resident.age >= age);
//   return minimumAge;
// }

// function getEmployeeByName(employeeName) {
//   // seu código aqui
//   if (arguments.length === 0) {
//     return {};
//   }

//   const name = employeeName;

//   const employeeObject = employees.find((e) => e.firstName === name || e.lastName === name);
//   return employeeObject;
// }

// const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });
// seu código aqui

// function isManager(id) {
//   // seu código aqui
//   const manager = employees.some((employee) => employee.managers.includes(id));
//   return manager;
// }

// function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
//   const objeto = { id, firstName, lastName, managers, responsibleFor };
//   employees.push(objeto);
// }
// seu código aqui

// function countAnimals(species) {
//   // seu código aqui
//   const obj = {};
//   if (arguments.length === 0) {
//     data.species.forEach((specie) => {
//       obj[specie.name] = specie.residents.length;
//     });
//     return obj;
//   }
//   const okArguments = data.species.find((specie) => specie.name === species).residents.length;
//   return okArguments;
// }

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrices, Senior: seniorPrices, Child: childPrices} = prices;

  let total = (Adult * adultPrices) + (Senior * seniorPrices) + (Child * childPrices);

  return total;
}

console.log(calculateEntry({ 'Adult': 1 }));

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  // getSpeciesByIds,
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  // getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
