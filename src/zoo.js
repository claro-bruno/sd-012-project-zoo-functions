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

const { species } = require('./data');
const { employees } = require('./data');
const { prices } = require('./data');
// const { hours } = require('./data');

const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const chosenAnimal = species.filter((specie) => ids.includes(specie.id));

  return chosenAnimal;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const chosenAnimal = species.find((specie) => specie.name === animal);

  const old = chosenAnimal.residents.every((resident) => resident.age > age);
  return old;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  return employees.find(
    (fun) => fun.firstName === employeeName || fun.lastName === employeeName,
  );
}

function createEmployee(
  { id, firstName, lastName },
  { managers, responsibleFor },
) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

// function isManager(id) {
//   // seu código aqui
// }

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui

  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

// function countAnimals(species) {
//   // seu código aqui
// }

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  // seu código aqui
  const { Adult: AdultPrice, Child: ChildPrice, Senior: seniorPrices } = prices;
  const adultTotal = Adult * AdultPrice;
  const childTotal = Child * ChildPrice;
  const seniorTotal = Senior * seniorPrices;
  const totalCharge = adultTotal + childTotal + seniorTotal;

  return totalCharge;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

// function getSchedule(dayName) {
//   // seu código aqui
//   // genial way i found to convert 24h to 12h clock time:
//   // https://www.codegrepper.com/code-examples/javascript/convert+24+hours+to+12+hours+javascript
//   if (dayName === 'Monday') return { Monday: 'CLOSED' };
//   if (!dayName) {
//     Object.keys(hours).forEach((day) =>
//       ({ [day]: `Open from ${hours[day].open} until ${hours[day].open % 12}` }));
//   }
// }
// console.log(getSchedule());

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
//   const increasePercentage = percentage / 100;
//   const pricesArray = Object.keys(prices);
//   for (let index = 0; index < pricesArray.length; index += 1) {
//     prices[pricesArray[index]] = parseFloat(
//       prices[pricesArray[index]] * increasePercentage
//         + prices[pricesArray[index]],
//     ).toFixed(2);
//   }
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  // isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
