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
// dica colega Caio para colocar as arrays de objetos aqui p chamar com amsi facilidades nas funçòes.
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids.length) return [];
  return data.species.filter((specie, index) => specie.id === ids[index]);
  // dica de usar o index dentro do filter na monitoria.
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui animal, age
  // const name = species[0].name;
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

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) =>
    employee.managers.some((value) => value === id));
  // ajuda do colega Luis Fernando
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
  // ajuda colega Caio
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

function getSchedule(dayName) {
  // seu código aqui
  // MEGA ajuda do Thalles
  // 1º peguei as chaves/valores do objeto hours
  const arraySchedule = Object.entries(hours);
  // 2º Criei um objeto com o reduce que vai acumulando todos as chaves e valores do arraySchedule. Lembrando que tem a aexeção qd o dayName é 'Segunda'.
  const objSchedule = arraySchedule.reduce((acc, curr) => {
    const { open, close } = curr[1];
    acc[curr[0]] = `Open from ${open}am until ${close - 12}pm`;
    if (curr[0] === 'Monday') {
      acc[curr[0]] = 'CLOSED';
    }
    return acc;
  }, {});
  // 3º Se não for passaod parâmetro ele retorna o objSchule inteiro.
  if (!dayName) return objSchedule;
  // 4º Agora caso o parâmetro seja passado eu criei um objeto, que tem como chave o próprio dayName, lembrando que eu usei o break point (colchetes) pois é assim que atribui elemento ao objeto.
  const objDayName = { [dayName]: objSchedule[dayName] };
  return objDayName;
}
// console.log(getSchedule('Tuesday'));

function getOldestFromFirstSpecies(id2) {
  // seu código aqui
  // 1º pegar o objeto que de dentro da array employees que tenha o id igual ao id2 do parâmetro:
  const getEmployee = employees.find((employee) => employee.id === id2);
  // 2º pegar o id do animal que o employee.id2 é resposável:
  const idSpecie = getEmployee.responsibleFor[0];
  // 3º Pegar a array objeto do specie co idSpecie
  const objSpecie = species.find((specie) => specie.id === idSpecie);
  // 4º Pegar a chave residents com todos os residentes e colocar ela em ordem decrescente em relação a idade dos residentes.
  const residentsInOrder = objSpecie.residents.sort((a, b) => b.age - a.age);
  // 5º Pegar o pirmeiro residente da array de objetos redidentInOrder, pois ele será o mais velho e retornas seus valores.
  const oldestResident = residentsInOrder[0];
  return Object.values(oldestResident);
}
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) {
  // Vou fazer um forEach para aplicar em todos os elementos da array Object.keys(prices) --que é uma array com as chaves do obj prices. Depois de acessar cada elemento do obj prices eu vou aplicar o incremento da percentage passada como parâmetro. E por fim arredondar para 2 casas decimais.
  Object.keys(prices).forEach((element) => {
    // const increase = prices[element] * (percentage / 100);
    prices[element] *= (1 + percentage / 100);
    prices[element] = Math.round(prices[element] * 100) / 100;
  });
  return prices;
}
// console.log(increasePrices(30));

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
//   if (!idOrName)
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
