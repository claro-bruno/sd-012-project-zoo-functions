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
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
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
