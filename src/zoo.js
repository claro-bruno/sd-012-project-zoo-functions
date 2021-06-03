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

const { species, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const retorno = ids.length === 0 ? []
    : ids.map((id) => species.find((specie) => specie.id === id));
  return retorno;
}

function getAnimalsOlderThan(animal, age) {
  const animalName = species.find((specie) => specie.name === animal);
  return animalName.residents.every((animalAge) => animalAge.age > age);
}

function getEmployeeByName(employeeName) {
  const retorno = employeeName === undefined ? {}
    : data.employees.find((pessoa) => pessoa.firstName === employeeName
    || pessoa.lastName === employeeName);
  return retorno;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const result = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return result;
}

function isManager(id) {
  const people = data.employees.find((pessoa) => pessoa.id === id);
  const result = people.managers.some((manager) => manager
    === '9e7d4524-363c-416a-8759-8aa7e50c0992');
  return result;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (managers === undefined || responsibleFor === undefined) {
    const mAux = [];
    const rAux = [];
    const newEmployee2 = { id, firstName, lastName, managers: mAux, responsibleFor: rAux };
    data.employees.push(newEmployee2);
  } else {
    const newEmployee = {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    };
    data.employees.push(newEmployee);
  }
}

function countAnimals(species1) {
  if (species1 === undefined) {
    const name = data.species.map((specie) => specie.name);
    const quantidade = data.species.map((specie) => specie.residents.length);
    const result = { ...quantidade };
    Object.keys(name).forEach((key) => {
      const newKey = name[key];
      result[newKey] = result[key];
      delete result[key];
    });
    return result;
  }
  const quant = data.species.find((specie) => specie.name === species1);
  return quant.residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const result = [prices.Adult * entrants.Adult, prices.Child * entrants.Child,
    prices.Senior * entrants.Senior];
  result.forEach((num, pos) => {
    if (Number.isNaN(num) === true) delete result[pos];
  });
  return result.reduce((acc, cur) => acc + cur);
}

// function getAnimalMap(options) {
//   if (!options) {
//     return Auxiliar();
//   }
//   if (options === {includesNames: true}){
//     let array = Auxiliar();
//     array.NE.map((animal) => animal)
//   }
// }

// function Auxiliar () {
//   const NE = data.species.filter((specie) => specie.location === 'NE');
//   const NW = data.species.filter((specie) => specie.location === 'NW');
//   const SE = data.species.filter((specie) => specie.location === 'SE');
//   const SW = data.species.filter((specie) => specie.location === 'SW');
//   let expected = {
//     NE: NE.map((ne) => ne.name),
//     NW: NW.map((nw) => nw.name),
//     SE: SE.map((se) => se.name),
//     SW: SW.map((sw) => sw.name)
//   };
//   return expected;
// }
// console.log(getAnimalMap());

function getSchedule(dayName) {
  const weekDays = Object.keys(data.hours);
  const days = Object.values(data.hours);
  const newObj = {};
  days.forEach((day, position) => {
    days[position] = `Open from ${day.open}am until ${day.close - 12}pm`;
    if (position === 6) { days[position] = 'CLOSED' };
  });
  weekDays.forEach((wday, position) => {return newObj[`${wday}`] = days[position]});
  if (!dayName) { return newObj; }
  const result = { [dayName]: newObj[Object.keys(newObj).find((key) => key === dayName)] };
  return result;
}

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

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
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
