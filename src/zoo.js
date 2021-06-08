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

const { species, employees, prices, hours } = data;

// function getSpeciesByIds(...codigo) {
//   const especie = species.filter((itemArray, index) => itemArray.id === codigo[index]);
//   return especie;
// }

// function getAnimalsOlderThan(animal, age) {
//   const encontrarAnimal = species.find((itemArray) => itemArray.name === animal);
//   const animalVelho = encontrarAnimal.residents.every((itemArray) => itemArray.age > age);
//   return animalVelho;
// }

// function getEmployeeByName(employeeName) {
//   const funcionario = employees.find((itemArray) =>
//     itemArray.firstName === employeeName || itemArray.lastName === employeeName);
//   return !employeeName ? {} : funcionario;
// }

// function createEmployee(personalInfo, associatedWith) {
//   return { ...personalInfo, ...associatedWith };
// }

// function isManager(id) {
//   const encontraPessoa = employees.filter((itemArray) => itemArray.managers.length > 0);
//   const gerente = encontraPessoa.some((itemArray) => itemArray.managers.includes(id));
//   return gerente;
// }

// function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
//   const novato = { id, firstName, lastName, managers, responsibleFor };
//   employees.push(novato);
//   return novato;
// }

// function countAnimals(specie) {
//   if (specie) {
//     const bicho = species.find((itemArray) => itemArray.name === specie).residents.length;
//     return bicho;
//   }
//   const retorno = {};
//   species.forEach((itemArray) => {
//     retorno[itemArray.name] = itemArray.residents.length;
//   });
//   return retorno;
// }

// function calculateEntry(entrants) {
//   if (!entrants || Object.keys(entrants).length === 0) {
//     return 0;
//   }
//   const { Adult: adulto = 0, Child: criança = 0, Senior: idoso = 0 } = entrants;
//   const totalAdulto = Number(adulto) * Number(prices.Adult);
//   const totalCriança = Number(criança) * Number(prices.Child);
//   const totalIdoso = Number(idoso) * Number(prices.Senior);
//   return totalAdulto + totalCriança + totalIdoso;
// }

// function getAnimalMap(options) {
//   if (options = {}) {
//     const animaisLocaliacao = species.filter((itemArray) => itemArray.location);
//     animaisLocaliacao.sort();
//     console.log(animaisLocaliacao);
//   }
// }
// getAnimalMap();

function getSchedule(dayName) {
  if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  if (dayName) {
    const dia = Object.keys(hours).filter((itemArray) => (itemArray) === dayName);
    return { [dayName]: `Open from ${hours[dia].open}am until ${(hours[dia].close - 12)}pm` };
  }
  return Object.keys(hours).reduce((acc, itemArray) => {
    const semana = itemArray;
    acc[semana] = `Open from ${hours[itemArray].open}am until ${(hours[itemArray].close - 12)}pm`;
    if (itemArray === 'Monday') {
      acc[semana] = 'CLOSED';
    }
    return acc;
  }, {});
}
getSchedule();

// function getOldestFromFirstSpecies(id) {
//   const funcionario = employees.find((itemArray) => itemArray.id === id).responsibleFor[0];
//   const animal = species.find((itemArray) => itemArray.id === funcionario).residents;
//   const idadesArray = animal.map((itemArray) => `${itemArray.age}`);
//   const maiorIdade = idadesArray.find((maior, itemArray) => !(maior > itemArray)
//    ? maior : itemArray);
//   const velho = animal.find((itemArray) => itemArray.age === Number(maiorIdade));
//   return velho;
//   // console.log(velho);
// }
// getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
// function increasePrices(percentage) {
//   const acrescimo = prices.forEach((itemArray) => itemArray * ((percentage / 100) + 1));
//   return acrescimo;
//   // console.log(acrescimo);
// }
// // increasePrices(20);

// function getEmployeeCoverage(idOrName) {
//   if (idOrName) {
//     const responsavel = employees.find((itemArray) => (itemArray.id === idOrName
//       || itemArray.firstName === idOrName || itemArray.lastName === idOrName));
//     return responsavel;
//   }
//   let pessoa = {};
//   employees.filter((itemArray) => {
//     pessoa = `${itemArray.firstName} ${itemArray.lastName}: `;
//     const animais = itemArray.responsibleFor; 
//     const bichos = species.find((itemArray) => itemArray.id === animais);
//     const tudo = `${pessoa}${bichos}`;
//     // return tudo;
//     console.log(tudo);
//   }
// }
// getEmployeeCoverage();//retorna o id do animal e não o nome

module.exports = {
  // calculateEntry,
  getSchedule,
  // countAnimals,
  // // getAnimalMap,
  // getSpeciesByIds,
  // getEmployeeByName,
  // // getEmployeeCoverage,
  // addEmployee,
  // isManager,
  // getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // // increasePrices,
  // createEmployee,
}