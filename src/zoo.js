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
const {
  species,
  hours,
} = require('./data');
const {
  employees,
} = require('./data');
// const { data } = require('./data');
const {
  prices,
} = require('./data');

function getSpeciesByIds(...ids) {
  // return ids.map((idAnimal) => species.find((animals) => idAnimal === animals.id));
  return ids.map((id) => species.find((specie) => id === specie.id));
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function getAnimalsOlderThan(animal, age) {
  return species
    .find(({
      name,
    }) => name === animal).residents.every((animalonly) => animalonly.age >= age);
}
// referencia  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

function getEmployeeByName(name) {
  if (!name) return {};
  return employees.find((index) => name === index.firstName || name === index.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}
//  https://www.alura.com.br/artigos/o-que-e-o-operador-ternario?gclid=Cj0KCQjw5PGFBhC2ARIsAIFIMNd7ReICV3cuH5g_2lyjEwAbJ1cO2XeOR2nLS7eNWKhyZg7VoIPJxEMaAk20EALw_wcB

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (managers === undefined && responsibleFor === undefined) {
    employees.push({
      id,
      firstName,
      lastName,
      managers: [],
      responsibleFor: [],
    });
  } else {
    employees.push({
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    });
  }
}

function countAnimals(input) {
  if (!input) {
    const animals = species.reduce((acc, {
      name,
      residents,
    }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return animals;
  }
  const resut = species.find((specie) => (input === specie.name)); // find pegando o primeiro resultado passado no parametro
  return resut.residents.length; // .length pu
}
// obtive ajuda do aluno Kevin Oliveira; https://github.com/tryber/sd-012-project-zoo-functions/blob/kevin-oliveira-zoo-functions-project/src/zoo.js

function calculateEntry(entrants = 0) {
  if (Object.keys(entrants).length === 0) return 0;
  let {
    Adult = 0, Child = 0, Senior = 0,
  } = entrants;
  Adult *= prices.Adult;
  Child *= prices.Child;
  Senior *= prices.Senior;
  // const myarray = [Adult, Child, Senior];
  const total = Adult + Child + Senior;
  return total;
}
/*
function getAnimalMap(options) {
  // seu código aqui
}
*/

function getSchedule(dayName) {
  if (dayName === 'Monday') {
    return {
      Monday: 'CLOSED',
    };
  }
  if (!dayName) {
    const hour = Object.keys(hours);
    const cronograma = hour.reduce((acc, crr) => {
      acc[crr] = `Open from ${hours[crr].open}am until ${hours[crr].close - 12}pm`;
      return acc;
    }, {});
    cronograma.Monday = 'CLOSED';
    return cronograma;
  }
  return {
    [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`,
  };
}

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const buscaSpecie = funcionario.responsibleFor[0];
  const buscaAnimal = species.find((specie) => specie.id === buscaSpecie);
  let animalOld = buscaAnimal.residents[0];
  buscaAnimal.residents.forEach((animals) => {
    if (animals.age > animalOld.age) {
      animalOld = animals;
    }
  });
  return Object.values(animalOld);
}
//  acompanhei reciocineo do eurides e thales na mentoria  link do pull request: https://github.com/tryber/sd-012-project-zoo-functions/pull/88/commits/1cea67f94166e04e18d8cdec573e99c996615c2b
function increasePrices(percentage) {
  prices.Adult = Math.round((prices.Adult * (1 + (percentage / 100)) * 100)) / 100;
  prices.Senior = Math.round((prices.Senior * (1 + (percentage / 100)) * 100)) / 100;
  prices.Child = Math.round((prices.Child * (1 + (percentage / 100)) * 100)) / 100;
  return prices;
}

// function getEmployeeCoverage(idOrName) {

// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  //  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  //  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
