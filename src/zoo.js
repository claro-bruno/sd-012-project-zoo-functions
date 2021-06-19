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

// lógica da função getSpeciesByIds desenvolvida com a ajuda do Luiz Henrrique (https://github.com/lzzhenrique) e Bruno Yamamoto (https://github.com/BSY-Development) através de call.

function getSpeciesByIds(...ids) {
  return ids.map((item) => species.find((specie) => specie.id === item));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  //  verifica a idade mínima de todos os animais de uma determinada espécie, devo retornar um bool1eano uso o .every?
  // quais propriedades usar? R. 'species.name' e 'species.residents.age'
  const animalByName = species.filter((name) => name.name === animal);

  console.log(animalByName.residents);
  console.log(animalByName);

  const verifyMinimalAge = animalByName[0].residents.every((indexAnimal) => indexAnimal.age > age);

  return verifyMinimalAge;
}

console.log(getAnimalsOlderThan('lions', 2));

// function getEmployeeByName(employeeName) {
//   // seu código aqui
// }

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(species) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
//   // seu código aqui
// }

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
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  // getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  // getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
