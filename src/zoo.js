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
// 1. IMPLEMENTE A FUNÇÃO getSpeciesByIds
// Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

// Observações técnicas

// O parâmetro desta função pode ser alterado para atender ao requisito proposto
// O que será avaliado

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id
// Ao receber mais de um id, retorna um array com as espécies referentes aos ids

const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((arrayItem) =>
    ids.find((arrayItem1) => arrayItem.id === arrayItem1));
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// seu código aqui

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((specie) => specie.name === animal);
  const idadeAnimal = nomeAnimal.residents.every(
    (idadeMax) => idadeMax.age >= age,
  );
  return idadeAnimal;
}
// console.log(getAnimalsOlderThan('bears', 4));

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const nomeColaborador = data.employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return nomeColaborador;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  const manager = data.employees.some((employee) =>
    employee.managers.find((employe) => employe === id));
  return manager;
}
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  const vazio = {};
  if (species === undefined) {
    data.species.forEach((specie) => {
      const nome = specie.name;
      const quantidade = specie.residents.length;
      vazio[nome] = quantidade;
    });
    return vazio;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}
// console.log(countAnimals());

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (Adult * data.prices.Adult)
  + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  const agenda = { ...hours };
  const days = Object.keys(agenda);
  days.forEach((day) => {
    agenda[day] = `Open from ${agenda[day].open}am until ${agenda[day].close - 12}pm`;
    if (day === 'Monday') agenda[day] = 'CLOSED';
  });
  if (dayName === undefined) {
    return agenda;
  }
  const vazio = {};
  vazio[dayName] = agenda[dayName];
  return vazio;
}
// console.log(getSchedule('Sunday'));

function getOldestFromFirstSpecies(id) {
  const idFuncionario = data.employees.find((employe) => employe.id === id);
  const valor = idFuncionario.responsibleFor[0];
  const idAnimal = data.species.find((specie) => specie.id === valor);
  const teste = idAnimal.residents.sort((animalA, animalB) => animalB.age - animalA.age);
  const { name, sex, age } = teste[0];
  return [name, sex, age];
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function increasePrices(percentage) {
  const valor = data.prices;
  const increaseAdulto = (valor.Adult + ((percentage / 100)
  * valor.Adult + ((0.5) / 100))).toFixed(2) / 1;
  const increaseSenior = (valor.Senior + ((percentage / 100)
  * valor.Senior + (0.5 / 100))).toFixed(2) / 1;
  const increaseChild = (valor.Child + ((percentage / 100)
  * valor.Child + (0.5 / 100))).toFixed(2) / 1;
  valor.Adult = (increaseAdulto);
  valor.Senior = (increaseSenior);
  valor.Child = (increaseChild);
  return valor;
}
// console.log(increasePrices(50));
// console.log(increasePrices(30));

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

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
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
