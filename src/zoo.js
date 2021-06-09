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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((speci, index) => speci.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // achar o nome da especie dentro do array (find e every)
  const specieName = species.find((specie) => specie.name === animal);
  const residentsAge = specieName.residents.every((specie) => specie.age > age);
  return residentsAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  // Primeiro eu verifico se o parametro é indefinido.
  if (typeof employeeName !== 'undefined') {
    const employeesFirstName = employees.find((employe) => employe.firstName === employeeName);
    const employeesLastName = employees.find((employe) => employe.lastName === employeeName);
    // Depois verifico se  nós temos o primeiro nome.
    if (typeof employeesFirstName === 'undefined') {
      return employeesLastName;
    }
    return employeesFirstName;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  // Recebo os parametros e faço uma desconstrução dentro de um novo array.
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  // Verifica se algum dos elementos dentro do array é igual a o item que está dentro do managers
  const findManager = employees.some((employe) => employe.managers.some((item) => item === id));
  return findManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  // ex bem simples, porém esqueci de adicionar '[]' como default parameters
  const moreEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(moreEmployee);
}

function countAnimals(specie) {
  // seu código aqui
  const animalList = {};
  if (typeof specie === 'undefined') {
    species.forEach((item) => { animalList[item.name] = item.residents.length; });
    return animalList;
  }
  return species.find((item) => item.name === specie).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined') return 0;
  let seniors = entrants.Senior;
  if (typeof seniors === 'undefined') seniors = 0;
  let adults = entrants.Adult;
  if (typeof adults === 'undefined') adults = 0;
  let childs = entrants.Child;
  if (typeof childs === 'undefined') childs = 0;
  return (adults * prices.Adult) + (seniors * prices.Senior) + (childs * prices.Child);
}

function getAnimalMap() {
  // seu código aqui
  // const buscar = (animais) => {
  //   if (animais.location === 'NE') {
  //     return animais.location;
  //   }
  // };

  // return species.filter(buscar);
}

function getSchedule(dayName) {
  // Verificar se dayName tem valorg
  // Tratando o monday que no caso sempre retorna closed
  // return para cada dayName que vai repetir passando por todo o parametro
  // Meus sinceros agradecimentos ao Kevin Oliveira e Janderson S.M, que me ajudaram a fazer o código rodar.
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  if (!dayName) {
    const hour = Object.keys(hours);
    const cronograma = hour.reduce((acc, crr) => {
      acc[crr] = `Open from ${hours[crr].open}am until ${hours[crr].close - 12}pm`;
      return acc;
    }, {});
    cronograma.Monday = 'CLOSED';
    return cronograma;
  }
  return { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  // O empregado  é  stephanieId a primeira especie é girafa e o animal mais velho é a vickie
  // expected ['Vicky', 'female', 12];
  // Encontrando a primeira especie de animais do emplopyee/empregado
  const animal = employees.find((employee) => employee.id === id).responsibleFor[0];
  // Coletando a informação dos animais
  const animalInfo = species.find((item) => item.id === animal).residents;
  // Pensei em usar um for each mas acabei me enrolando então recorri ao repo do  Bruno Yamamoto: https://github.com/tryber/sd-012-project-zoo-functions/blob/bruno-yamamoto-zoo-functions-project/src/zoo.js
  const oldestAnimal = animalInfo.sort((a, b) => b.age - a.age)[0];
  const {
    name,
    sex,
    age,
  } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  // Não tava conseguindo imprimir o valor certo então recorri ao repo do  cristiano lima 'https://github.com/tryber/sd-012-project-zoo-functions/blob/cristiano-lima-zoo-functions-project/src/zoo.js'
  const { Adult, Senior, Child } = prices;
  prices.Adult = Math.round(Adult * (1 + percentage / 100) * 100) / 100;
  prices.Senior = Math.round(Senior * (1 + percentage / 100) * 100) / 100;
  prices.Child = Math.round(Child * (1 + percentage / 100) * 100) / 100;
}

function getEmployeeCoverage() {
  // seu código aqui
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
