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

const { species, employees, prices } = require('./data');

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
  if (!employeeName) {
    return {};
  }
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

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

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

function countAnimals(specieName) {
  // seu código aqui
  const selectedSpecies = species.find((specie) => specie.name === specieName);
  if (specieName) {
    return selectedSpecies.residents.length;
  }
  const retorno = {};
  species.forEach((specie) => { retorno[specie.name] = specie.residents.length; });
  return retorno;
}

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

function increasePrices(percentage) {
  // seu código aqui
  const pricesArray = Object.keys(prices);

  return pricesArray.forEach((eachPrice) => {
    prices[eachPrice] = Math.round(prices[eachPrice] * (1 + percentage / 100) * 100) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
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
  // getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
