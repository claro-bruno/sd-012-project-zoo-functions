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
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((id) => ids.includes(id.id));
}

function getAnimalsOlderThan(animal, age) {
// seu código aqui
  const findAnimal = species.find((specie) => specie.name === animal);
  return findAnimal.residents.every((elem) => elem.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const employeeFName = employees.find((firstName) => employeeName.includes(firstName.firstName));

  const employeeLName = employees.find((lastName) => employeeName.includes(lastName.lastName));

  return employeeFName || employeeLName;
}

function createEmployee(personalInfo, associatedWith) {
// seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species1) {
  // seu código aqui
  if (species1 === undefined) {
    const totalAnimals = species.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
    return totalAnimals;
  }
  const currentAnimal = species.find((animal) => animal.name === species1).residents.length;
  return currentAnimal;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
}

function getAnimalMap() {
  // seu código aqui options
}

function getSchedule(dayName) {
  // seu código aqui
  // O código a seguir foi inspirado pela resposta do colega Roberval Filho. Na sequência, seguem comentários de cado passo para comprovar que eu entendi o racional que levou a esta solução.

  // 1 - Cria um objeto vazio para receber as keys/value do objeto 'hours' 2 - Chama o Object.keys para retorna um array da propriedades do objeto hours e chama o forEach para executar cada um dos elementos do agora array que contém os valores do objeto hours. 3 - Verifica se o parametro 'day' receba a string 'Monday', se sim, retorna a string 'CLOSED'. 4 - Senão, em um template literals, retorna o dia selecionado pelo usuário e seu horário de funcionamento, chamando as propriedades 'open' e 'close' 5 - Se o parametro dayName retornar um valor undefined, retorna a programação semanal. 6 - Se o parametro retornar algum dia da semana, retorna-se a const 'zooSchedule' contendo o nome do parametro e o objeto que contém o dia e seu respectivo horário.
  const weekDays = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    if (day === 'Monday') {
      weekDays[day] = 'CLOSED';
    } else {
      weekDays[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName === undefined) return weekDays;

  const zooSchedule = { [dayName]: weekDays[dayName] };
  return zooSchedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findAnimalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findResidents = species.find((oldestAnimal) => oldestAnimal.id === findAnimalId).residents;

  findResidents.sort((a, b) => b.age - a.age);

  return Object.values(findResidents[0]);
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = prices;
  const adultPrice = Math.round((((Adult * percentage) / 100) + Adult) * 100) / 100;
  const seniorPrice = Math.round((((Senior * percentage) / 100) + Senior) * 100) / 100;
  const childPrice = Math.round((((Child * percentage) / 100) + Child) * 100) / 100;

  prices.Adult = adultPrice;
  prices.Senior = seniorPrice;
  prices.Child = childPrice;

  return prices;
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
