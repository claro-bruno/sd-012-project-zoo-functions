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

const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  const species = ids.map((id) => (data.species.find((speciesId) => speciesId.id === id)));
  return species;
}
console.log(getSpeciesByIds());
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((species) => species.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));
console.log(getAnimalsOlderThan('otters', 10));

function getEmployeeByName(employeeName) {
  const nameEmployee = data.employees.find(({ firstName }) => (firstName === employeeName));
  const lastNameEmployee = data.employees.find(({ lastName }) => (lastName === employeeName));
  if (nameEmployee === undefined && lastNameEmployee === undefined) {
    return {};
  }
  if (nameEmployee !== undefined) {
    return nameEmployee;
  }
  return lastNameEmployee;
}
console.log(getEmployeeByName());
console.log(getEmployeeByName('Wilburn'));
console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}
console.log(createEmployee());

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((idManager) => idManager === id));
}
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, item) => ({
      ...acc, [item.name]: item.residents.length,
    }), {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}
console.log(countAnimals());
console.log(countAnimals('lions'));

function calculateEntry(entrants = 0) {
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const result = (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  return result;
}
console.log(calculateEntry());
console.log(calculateEntry({}));

// function getAnimalMap(options) {
// seu código aqui
// }

// function getSchedule(dayName) {
// seu código aqui
// }

function getOldestFromFirstSpecies(id) {
  const getAnimalId = data.employees.find((employee) => employee.id === id).responsibleFor;
  const oldestAnimal = getSpeciesByIds(...getAnimalId);
  const getResidents = oldestAnimal.reduce((acc, curr) => {
    acc.push(...curr.residents);
    return acc;
  }, []);
  const getOldest = getResidents.reduce((acc, curr) => ((curr.age > acc.age) ? curr : acc));
  return Object.values(getOldest);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function increasePrices(percentage) {
  const { Adult, Senior, Child } = prices;
  prices.Adult = Math.round(Adult * (1 + percentage / 100) * 100) / 100;
  prices.Senior = Math.round(Senior * (1 + percentage / 100) * 100) / 100;
  prices.Child = Math.round(Child * (1 + percentage / 100) * 100) / 100;
  return prices;
}
// console.log(increasePrices(50));
// console.log(increasePrices(30));

// function getEmployeeCoverage(idOrName) {
// seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
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
