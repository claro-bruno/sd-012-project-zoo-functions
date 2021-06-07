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

function getSpeciesByIds(...species) {
  return species.map((itemId) => data.species.find((specie) => specie.id === itemId));
}

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = data.species.find((old) => old.name === animal);
  return nomeAnimal.residents.every((ag) => ag.age > age);
}
// console.log(getAnimalsOlderThan('otters', 7));

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const emp = data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  return emp;
}
// console.log(getEmployeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((manage) => manage.managers.includes(id));
}

// manager = [] significa que se não receber parâmetro esse é seu valor
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(add);
}

// countAnimals resolvido com ajuda do PR do https://github.com/tryber/sd-012-project-zoo-functions/pull/41/files
function countAnimals(species) {
  if (species === undefined) {
    const objName = {};
    data.species.forEach(({ name, residents }) => {
      objName[name] = residents.length;
    });
    return objName;
  }
  const result = data.species.find(({ name }) => name === species).residents.length;
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants; // Pega a quantidade do parâmetro recebido
  const { Adult: priceAdult, Child: priceChild, Senior: priceSenior } = data.prices; // pega o preço de cada
  const sum = Adult * priceAdult + Child * priceChild + Senior * priceSenior;
  return sum;
}

function getAnimalMap() {
  // seu código aqui options
}

// Resolvido de acordo com o PR do Carlos Eduardo Tomé
// https://github.com/tryber/sd-012-project-zoo-functions/pull/132/files
function getSchedule(dayName) {
  const { hours } = data;
  const weekDays = Object.keys(hours);
  const hourDay = Object.values(hours);
  const cronogram = {};
  weekDays.forEach((day, index) => { // monta o cronograma da semana
    if (day !== 'Monday') {
      cronogram[day] = `Open from ${hourDay[index].open}am until ${hourDay[index].close - 12}pm`;
    } else {
      cronogram[day] = 'CLOSED';
    }
  });
  if (!dayName) { return cronogram; }// verifica parametro e remonta o cronograma de acordo com a requisição
  if (dayName !== 'Monday') {
    const day = hours[dayName];
    return {
      [dayName]: `Open from ${day.open}am until ${day.close - 12}pm`,
    };
  } return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(id) {
  const responsibl = data.employees.find((responsible) => responsible.id === id).responsibleFor[0];
  const residAnimal = data.species.find((residentsAnimals) => residentsAnimals.id === responsibl);
  const residentsOldest = residAnimal.residents.reduce((animalFirst, aniamlSecond) =>
    (animalFirst.age > aniamlSecond.age ? animalFirst : aniamlSecond));
  const { name, sex, age } = residentsOldest;
  return [name, sex, age];
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
