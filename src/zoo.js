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

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const speciesEncontr = (id) => data.species.find((especie) => id === especie.id);
  const specieIgual = ids.map(speciesEncontr);
  return specieIgual;
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((especie) => especie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (!species) {
    const objSpecie = {};
    data.species.forEach((item) => { objSpecie[item.name] = item.residents.length; });
    return objSpecie;
  }
  return data.species.find((key) => key.name === species).residents.length;
}

function calculateEntry(entrants = 0) {
  if (!entrants) return entrants;
  let total = 0;
  const keysEntries = Object.keys(entrants); // cria array com as chaves do objeto
  keysEntries.forEach((key) => {
    if (key === 'Adult') {
      total += entrants[key] * data.prices.Adult;
    } else if (key === 'Child') {
      total += entrants[key] * data.prices.Child;
    } else {
      total += entrants[key] * data.prices.Senior;
    }
  });
  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
// }

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((item) => item.id === id); // encontra o primeiro empregado com o mesmo id dado no parâmetro
  const animalId = employee.responsibleFor.find((item) => item); // encontra o primeiro animal da lista responsibleFor de cada empregado. (o nome do animal corresponde ao id)
  const arrayAnimaInfo = data.species.find((specie) => specie.id === animalId); // encontra o primeiro objeto/animal e suas propriedades através do mesmo id do primeiro animal que está na lista responsibleFor dos empregados. (não vem em formato de array, só traz o elemente, que é um objeto)
  const arrayAges = arrayAnimaInfo.residents.map(({ age }) => age); // traz um array só com as idades. Acessa o objeto arrayAnimalInfo e nele acessa a chave residents que contém a idade.
  const findOldest = arrayAnimaInfo.residents // parte que acessa o objeto inteiro e, dentro dele, acessa a chave/objeto residentes que contém as chaves name, sex, age. residents é um objeto com as informações de cada espécie de animal.
    .find(({ age }) => age === Math.max.apply(Math,arrayAges)); // usa o find para trazer o objeto cujo age seja o maior na array de idades arrayAges. Usar apenas Math.max(arrayAges) retorna NaN, impossibilitando encontrar o maior. Spread foi solicitado pelo lint.
  return Object.values(findOldest); // retorna os valores do objeto findOldest em um array.
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
