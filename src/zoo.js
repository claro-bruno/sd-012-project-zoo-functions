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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  if (ids.length === 1) {
    return data.species.filter((specie) => specie.id === ids[0]); 
  }
  return data.species.filter((specie) => ids.some((spec) => spec === specie.id));
};

function getAnimalsOlderThan(animal, age) {
 return data.species.some((specie) => {
  const ag = specie.residents.every((speciee) => speciee.age >= age); 
 return specie.name === animal && ag
});
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employe) => employe.firstName === employeeName || employe.lastName === employeeName );
}

function createEmployee({id, firstName, lastName,},{managers, responsibleFor}) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return managers.some(manager => manager.managers.includes(id));
}


function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmploye = 
    {
    id: id,
    firstName: firstName,
    lastName: lastName,
    managers: managers,
    responsibleFor: responsibleFor,
    }
return data.employees.push(newEmploye);
}

function countAnimals(species) {
  if (species === undefined) {
  const key = {};
  data.species.map((specie) => {
    key[specie.name] = specie.residents.length;
  });
  return key  
}
return data.species.find((spec) => spec.name === species).residents.length;
}
function calculateEntry(entrants) {
if (entrants = {} || entrants === undefined) return 0;
  const total = Object.keys(entrants);
  return total
}
  function getAnimalMap(options) {
  // seu código aqui
}


function getSchedule(dayName) {
  const week = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED'
  };
  if (dayName === undefined) return week;
  return data.hours.find((hour) => hour.hours === dayName);
}

function getOldestFromFirstSpecies(id) {

}

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
