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
const { species } = data;

function getSpeciesByIds(...codigo) {
  const especie = species.filter((itemArray, index) => itemArray.id === codigo[index]);
  return especie;
}

function getAnimalsOlderThan(animal, age) {
  const encontrarAnimal = species.find((itemArray) => itemArray.name === animal);
  const animalVelho = encontrarAnimal.residents.every((itemArray) => itemArray.age > age);
  return animalVelho;
  // console.log(animalVelho); //funciona no console.log mas não no return;
}
// getAnimalsOlderThan('penguins', 10);

// function getEmployeeByName(employeeName) {
//   const funcionario = employees.filter((itemArray) => itemArray.firstName === employeeName || itemArray.lastName === employeeName);
//   // console.log(funcionario);
//   return funcionario;
// }
// getEmployeeByName('Nigel');

// function createEmployee(personalInfo, associatedWith) {
//   // const novato = Object.assign({}, personalInfo, associatedWith);
//   // const novato = data.employees.map(() => {...personalInfo, ...associatedWith});
//   const novato = () => data.employeess.map(() => (personalInfo, associatedWith));
//   return novato;
// }

// function isManager(id) {
//   // const encontraPessoa = employees.find((itemArray) => itemArray.id === id);
//   const gerente = data.employees.some((itemArray) => itemArray.managers === id);
//   // return gerente;
//   console.log(gerente);
// }
// isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   const novato = employees.map(() => {
//     id: id;
//     firstName: firstName;
//     lastName: lastName;
//     managers: managers;
//     responsibleFor: responsibleFor,
//   });
//   data.employees.push(novato);
//   return novato;
// };
// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');

// function countAnimals(species) {
//   const bicho = data.species.find((itemArray) => itemArray.name === species);
//   let retorno;
//   // console.log(bicho.popularity);
//   if (bicho === undefined) {
//     retorno = {};
//   } else {
//     retorno = bicho.popularity;
//   }
//   return retorno;// console.log(bicho.popularity);
// }
// countAnimals();

// function calculateEntry(entrants) {
//   const oi = entrants.filter((itemArray) => Object.key(itemArray) === 'Senior');
//   const a = entrants.Senior * data.prices.Senior;
//   console.log(oi);
//     // if (typeof entrants.Adult === 'number'){
//   //   const adulto = entrants.Adult * 49.99;
//   //   if (typeof entrants.Child === 'number'){
//   //     const criança = entrants.Child * 20.99;
//   //     if (typeof entrants.Senior === 'number'){
//   //       const idoso = entrants.Senior * 24.99;
//   //       let preçoTotal = adulto + criança + idoso;
//   //       console.log(preçoTotal);
//   //     }}}
  
//   // if (entrants.Adult !== undefined || entrants.Child !== undefined || entrants.Senior !== undefined)
// }
// calculateEntry([{ 'Senior': 1 }]);

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
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
