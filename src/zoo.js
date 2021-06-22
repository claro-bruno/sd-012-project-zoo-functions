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

const { prices, species } = require('./data');
const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]);
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'))

function getAnimalsOlderThan(animal, age) {
  return data.species.some((i) => i.name === animal && i.residents.every((I) => I.age >= age));
}
// console.log(getAnimalsOlderThan('penguins', 10))

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}
// console.log(getEmployeeByName('Emery'))

function createEmployee(personalInfo, associatedWith) {
  const Ob = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return Ob;
}

function isManager(id) {
  return data.employees.some((i) =>
    i.id === id && (i.managers).length <= 1);
}
// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const Ob = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(Ob);
}

function countAnimals(Species) {
  if (Species === undefined) {
    const quant = species.reduce((acc, i) => {
      acc[i.name] = i.residents.length;
      return acc;
    }, {});
    return quant;
  }
  const q = species.filter((i) => i.name === Species);
  return q[0].residents.length;
}
// console.log(countAnimals())

function calculateEntry(entrants) {
  if (entrants === undefined) return 0;
  let { Adult: A } = entrants;
  let { Child: C } = entrants;
  let { Senior: S } = entrants;
  if (A === undefined) A = 0;
  if (C === undefined) C = 0;
  if (S === undefined) S = 0;
  return C * data.prices.Child + S * data.prices.Senior + A * data.prices.Adult;
}
function getAnimalMap(options = {}) {
  const local = { NE: [], NW: [], SE: [], SW: [] };
  if (!options.includeNames) {
    data.species.forEach((itemArray) => local[itemArray.location].push(itemArray.name));
    return local;
  }
  data.species.forEach((itemArray) => {
    let residente = itemArray.residents;
    // sex especificada retorna animais macho/fêmea
    if (options.sex) {
      residente = itemArray.residents.filter((item) => item.sex === options.sex);
    }
    const residenteN = residente.map((itemArray2) => itemArray2.name);
    // sorted especificada retorna animais ordenados
    if (options.sorted) residenteN.sort();
    // dando o push para retornar os nomes dos animais
    local[itemArray.location].push({ [itemArray.name]: residenteN });
  });
  return local;
}
/* const options = { sex: 'female', includeNames: true };
console.log(getAnimalMap(options)) */
// auxiliado com o code-Review do LuctReis, não estava sabendo fundamentar os requesitos;
function getSchedule(dayName) {
  const crono = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return crono;
  }
  return { [dayName]: crono[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((item) => item.id === id).responsibleFor[0];
  const residentes = species.find((item) => item.id === animal).residents;
  residentes.sort((item1, item2) => item2.age - item1.age);
  const { name, sex, age } = residents[0];
  /* console.log(residents) */
  return [name, sex, age];
}
// getOldestFromFirstSpecies();
function increasePrices(percentage) {
  // const { Adult, Child, Senior } = data.prices;
  const mult = percentage / 100 + 1;
  const adultV = prices.Adult * mult;
  const childV = prices.Child * mult;
  const seniorV = prices.Senior * mult;

  prices.Adult = Math.round(adultV * 100) / 100;
  prices.Child = Math.round(childV * 100) / 100;
  prices.Senior = Math.round(seniorV * 100) / 100;
  return prices;
}

function getEmployeeCoverage(idOrName) {
  return idOrName;
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
