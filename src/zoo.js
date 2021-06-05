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
const { employees, species } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.filter((specie) => specie.id === id)[0]);
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const isOlder = (bixo) => bixo.age > age;
  return species.find((specie) => specie.name === animal).residents.every(isOlder);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const name = employeeName;
  const filter = ({ firstName, lastName }) => firstName === name || lastName === name;
  return employees.find(filter);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const algum = (valor) => valor === id;
  return employees.some(({ managers }) => managers.some(algum));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return employees.push(obj);
}

function countAnimals(Species) {
  // seu código aqui
  if (Species) return species.find(({ name }) => name === Species).residents.length;
  return species.reduce((acc, { name, residents }) =>
    ({ ...acc, [name]: residents.length }), {});
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  return Object.keys(entrants).reduce((acc, cur) => acc + entrants[cur] * data.prices[cur], 0);
}

const fil = (local) => species.filter(({ location }) => location === local);

const animalLocation = () => {
  const loc = species.map((a) => a.location);
  const set = new Set(loc);
  return [...set];
};

const animalObject = (loc) => {
  const result = {};
  loc.forEach((local) => {
    result[local] = [];
    fil(local).map(({ name }) => result[local].push(name));
  });
  return result;
};

function AnimalMap(locations, sorted, sex) {
  // seu código aqui
  const result = {};
  locations.forEach((local) => {
    result[local] = [];
    fil(local).map((a) => {
      const nomeAnimal = a.name;
      let animalRe = a.residents.map(({ name }) => name);
      if (sex) {
        animalRe = a.residents.filter((ani) => ani.sex === sex).map(({ name }) => name);
      }

      if (sorted) animalRe = animalRe.sort();
      result[local].push({ [nomeAnimal]: animalRe });
      return 1;
    });
  });
  return result;
}

function getAnimalMap(options) {
  const { includeNames = false, sex, sorted = false } = options || {};
  const loc = animalLocation();
  if (includeNames) return AnimalMap(loc, sorted, sex);
  return animalObject(loc);
}

const { hours } = require('./data');

const days = () => {
  const obj = {};
  const horas = Object.entries((hours));
  horas.forEach((hour) => {
    if (hour[1].close === 0) obj[hour[0]] = 'CLOSED';
    else obj[hour[0]] = `Open from ${hour[1].open}am until ${hour[1].close - 12}pm`;
  });
  return obj;
};

function getSchedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return days();
  }
  const obj = days();
  const array = Object.entries(obj);
  const resultF = array.find((a) => a[0] === dayName);
  return { [resultF[0]]: resultF[1] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEm = employees.find((employee) => employee.id === id);
  const result = getEm.responsibleFor.map((res) => species.find((specie) => specie.id === res));
  const oldeSpecie = result[0].residents.reduce((acc, cur) => (cur.age > acc.age ? cur : acc));
  const array = Object.values(oldeSpecie);
  return array;
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
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
