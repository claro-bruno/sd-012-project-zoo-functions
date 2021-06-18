/* eslint-disable max-lines-per-function */
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
// dica colega Caio para colocar as arrays de objetos aqui p chamar com mais facilidades nas funções.
const data = require('./data');

// dica de usar o index dentro do filter na monitoria.
function getSpeciesByIds(...ids) {
  if (!ids.length) return [];
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const findindSpecie = species.find((specie) => specie.name === animal);
  return findindSpecie.residents.every((resident) => age < resident.age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployee = (employee) =>
    employee.lastName === employeeName || employee.firstName === employeeName;
  return employees.find(findEmployee);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// ajuda do colega Luis Fernando
function isManager(id) {
  return data.employees.some((employee) =>
    employee.managers.some((value) => value === id));
}

// ajuda colega Caio
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(species2) {
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

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult: numberOfAdults = 0, Child: numberOfChildren = 0,
    Senior: numberOfSeniors = 0 } = entrants; // dica de threads do slack.
  const adults = numberOfAdults * prices.Adult;
  const childs = numberOfChildren * prices.Child;
  const seniors = numberOfSeniors * prices.Senior;
  return adults + childs + seniors;
}

// 9 Ajuda do monitor Daniel e do colega Kevin

function getAcumulatorRegion() {
  return species.reduce((acc, curr) => {
    if (curr.location === 'NE') {
      acc.NE.push(curr.name);
      return acc;
    }
    if (curr.location === 'NW') {
      acc.NW.push(curr.name);
      return acc;
    }
    if (curr.location === 'SE') {
      acc.SE.push(curr.name);
      return acc;
    }
    if (curr.location === 'SW') {
      acc.SW.push(curr.name);
      return acc;
    } return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function filterSex(options, curr) {
  if (options.sex === 'female') {
    const animalAndSex = curr[1];
    const mapeadoAnimalAndSex = animalAndSex.map((animal) => species
      .find((e) => e.name === animal));
    const filterSex2 = mapeadoAnimalAndSex.map((element) => element.residents);
    const females = filterSex2.map((e) => e.filter((elem) => elem.sex === 'female'));
    const females2 = females.map((names) => names.map((name) => name.name));
    return females2;
  }
  return curr[1]
    .map((animal) => species
      .find((e) => e.name === animal).residents
      .map((resident) => resident.name));
}

function getIncludesNames(acumulatorAnimals, options) {
  const arrAcumulatorAnimal = Object.entries(acumulatorAnimals);
  return arrAcumulatorAnimal.reduce((acc, curr) => {
    const value = filterSex(options, curr);
    if (options.sorted) {
      acc[curr[0]] = curr[1].map((e, index) => ({ [e]: value[index].sort() }));
      return acc;
    }
    acc[curr[0]] = curr[1].map((e, index) => ({ [e]: value[index] }));
    return acc;
  }, {});
}

function getAnimalMap(options) {
  const acumulatorAnimals = getAcumulatorRegion();
  if (!options) return acumulatorAnimals;
  if (options.includeNames) {
    return getIncludesNames(acumulatorAnimals, options);
  }
  return acumulatorAnimals;
}

// MEGA ajuda do Thalles
function getSchedule(dayName) {
  const arraySchedule = Object.entries(hours);
  const objSchedule = arraySchedule.reduce((acc, curr) => {
    const { open, close } = curr[1];
    acc[curr[0]] = `Open from ${open}am until ${close - 12}pm`;
    if (curr[0] === 'Monday') {
      acc[curr[0]] = 'CLOSED';
    }
    return acc;
  }, {});
  if (!dayName) return objSchedule;
  const objDayName = { [dayName]: objSchedule[dayName] };
  return objDayName;
}

function getOldestFromFirstSpecies(id2) {
  const getEmployee = employees.find((employee) => employee.id === id2);
  const idSpecie = getEmployee.responsibleFor[0];
  const objSpecie = species.find((specie) => specie.id === idSpecie);
  const residentsInOrder = objSpecie.residents.sort((a, b) => b.age - a.age);
  const oldestResident = residentsInOrder[0];
  return Object.values(oldestResident);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((element) => {
    prices[element] *= (1 + percentage / 100);
    prices[element] = Math.round(prices[element] * 100) / 100;
  });
  return prices;
}

// 13
function getEmployeeByNameOrId(data2) {
  if (!data2) return {};
  const findEmployee = (employee) =>
    employee.lastName === data2 || employee.firstName === data2 || employee.id === data2;
  return employees.find(findEmployee);
}

function getEmployeeCoverage(idOrName) {
  const getSpeciesById = (id) => species.find((specie) => specie.id === id);
  if (!idOrName) {
    const employeesMap = employees.reduce((obj, employee) => {
      const obj2 = obj;
      obj2[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
        .map((id) => getSpeciesById(id).name);
      return obj2;
    }, {});
    return employeesMap;
  }
  const objEmployee = getEmployeeByNameOrId(idOrName);
  const responsible = objEmployee.responsibleFor;
  const responsibleMap = responsible.map((element) => getSpeciesById(element).name);
  const objFinal = {
    [`${objEmployee.firstName} ${objEmployee.lastName}`]: responsibleMap,
  };

  return objFinal;
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
