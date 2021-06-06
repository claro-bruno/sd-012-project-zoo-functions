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

const { employees, species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((animalsId) => animalsId.id === id));
} // consultei o repositório da Camila Malvess e do kevin Oliveira para ajudar no meu raciocínio
// console.log(getSpeciesByIds());
// console.log((getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce')));
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46', '01422318-ca2d-46b8-b66c-3e9e188244ed'));

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animalName.name === animal)
    .residents.every((resident) => resident.age > age);
}
// console.log((getAnimalsOlderThan('lions', 3)));

function getEmployeeByName(employeeName) {
  const findEmployee = data.employees.find((firstAndLastName) => firstAndLastName.firstName
  === employeeName || firstAndLastName.lastName === employeeName);
  if (findEmployee === undefined) {
    return {};
  }
  return findEmployee;
}
// console.log((getEmployeeByName('Nigel')));
// console.log((getEmployeeByName()));

function createEmployee(personalInfo, associatedWith) {
  const personalInfoAndAssociateWith = { ...personalInfo, ...associatedWith };
  return personalInfoAndAssociateWith;
}
// console.log(createEmployee({
//  id: '19p01s87',
//  firstName: 'Patricia',
//  lastName: 'Silvestre',
//  managers: [
//    'p5b83cb3',
//    '9e7d4524',
//  ],
//  responsibleFor: [
//    '0938aa23',
//    '89be95b3',
//  ],
// }));

function isManager(id) {
  const findManager = data.employees.some((employeeId, index) => employeeId.managers[index] === id);
  return findManager;
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(isManager('stephanieId'));
// console.log(isManager('burlId'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
} // para colocar a questão do [] no managers e responsibleFor,
// tive que consultar o respositório de alguns colegas, como o da Camila Malves, pois não sabia.

function countAnimals(species1) {
  const animals = data.species.reduce((acc, currentValue) => {
    const animalName = currentValue.name;
    acc[animalName] = currentValue.residents.length;
    return acc;
  }, {});
  if (typeof (species1) === 'string') {
    return animals[species1];
  }
  return animals;
} // Para resolver essa questão tive que consultar novamente o final da mentoria do Jensen e
// também consultei o repositório do colega Kevin Oliveira para unir as informações.
// console.log(countAnimals('tigers'));
// console.log(countAnimals());

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultos = Adult * data.prices.Adult;
  const child = Child * data.prices.Child;
  const senior = Senior * data.prices.Senior;
  return adultos + child + senior;
} // Usei a Thread pelo Matheus Tkaczyk , onde o Bruno Yamamoto deu a dica de usar Object.keys para retornar 0,
// quando a entrada fosse {}.
// console.log(calculateEntry());
// console.log(calculateEntry({}));
// console.log(calculateEntry({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));

// function getAnimalMap(options) {
// }

function getSchedule(dayName) {
  const objetoDays = Object.keys(data.hours); // pego o objeto todo
  const objetoSchedule = objetoDays.reduce((acc, curr) => {
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`; // -12 por conta de como está as horas no data
    return acc;
  }, {});
  objetoSchedule.Monday = 'CLOSED'; // pois Monday temos a exceção de estar fechado
  if (!dayName) {
    return objetoSchedule; // sem parametro,retorno obj inteiro
  }
  if (objetoDays.includes(dayName) === true) {
    return { [dayName]: objetoSchedule[dayName] }; // com parametro, retorno esse obj onde a chave será o dia q foi passado
    // como parâmetro, uso do [] como break point p atribuir o elemento ao obj
  }
}
// console.log(getSchedule());
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Friday'));
// consultei repositórios de colegas como da Marcela Silva e Kevin Oliveira

function getOldestFromFirstSpecies(id) {
  const findEmployeeId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const findSpecie = species.find((specie) => specie.id === findEmployeeId);
  const residentOrder = findSpecie.residents.sort((a, b) => b.age - a.age);
  const oldestResident = residentOrder[0];
  return Object.values(oldestResident);
}// Usei a dica do Leo Ferreira no slack na thread do Julio Barros
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function increasePrices(percentage) {
  const { Adult, Child, Senior } = data.prices;
  const adultPrice = Math.round((Adult * (1 + (percentage / 100)) * 100)) / 100;
  const childPrice = Math.round((Child * (1 + (percentage / 100)) * 100)) / 100;
  const seniorPrice = Math.round((Senior * (1 + (percentage / 100)) * 100)) / 100;
  data.prices = {
    Adult: adultPrice,
    Child: childPrice,
    Senior: seniorPrice,
  };
  return data.prices;
} // usei a dica do Thalles Carneiro de usar o Math.round(utilizei seu repositório) na thread postada pelo Rodrigo Merlone
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
// console.log(increasePrices(50));
// console.log(increasePrices(30));

// function getEmployeeCoverage(idOrName) {
// // seu código aqui
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
