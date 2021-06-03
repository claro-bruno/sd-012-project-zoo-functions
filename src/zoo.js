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

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (arguments.length === 0) {
    return [];
  }
  const arraySpecie = ids.map((idi) => species.find((specie) => specie.id === idi));
  return arraySpecie;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const minimumAge = species.find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
  return minimumAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (arguments.length === 0) {
    return {};
  }

  const name = employeeName;

  const employeeObject = employees.find((e) => e.firstName === name || e.lastName === name);
  return employeeObject;
}

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

function isManager(id) {
  // seu código aqui
  const manager = employees.some((employee) => employee.managers.includes(id));
  return manager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const objeto = { id, firstName, lastName, managers, responsibleFor };
  employees.push(objeto);
}

function countAnimals(specieS) {
  // seu código aqui
  const obj = {};
  if (arguments.length === 0) {
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const okArguments = species.find((specie) => specie.name === specieS).residents.length;
  return okArguments;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrices, Senior: seniorPrices, Child: childPrices } = prices;

  const total = (Adult * adultPrices) + (Senior * seniorPrices) + (Child * childPrices);

  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  // seu código aqui
  const obj = {};
  const keys = Object.keys(hours);
  keys.forEach((key) => {
    const { open, close } = hours[key];
    if (key === 'Monday') {
      obj[key] = 'CLOSED';
    } else {
      obj[key] = `Open from ${open}am until ${close - 12}pm`;
    }
  });

  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employedPerson = employees.find((employee) => employee.id === id);
  const firstResponsableFor = employedPerson.responsibleFor[0];
  const kindOfAnimal = species.find((specie) => specie.id === firstResponsableFor);
  const oldestAnimal = kindOfAnimal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestAnimal;
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(prices)
    .forEach((key) => {
      const base100 = prices[key] * 100;
      const newValue = Math.round(base100 * ((percentage / 100) + 1)) / 100;
      prices[key] = Number(newValue.toFixed(2));
    });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const obj = {};
  employees.forEach(({ firstName, lastName, responsibleFor }) => {
    obj[`${firstName} ${lastName}`] = responsibleFor
      .map((aidi) => species.find(({ id }) => id === aidi).name);
  });
  if (!idOrName) {
    return obj;
  }
  const employee = employees.find(({ id, firstName, lastName }) =>
    idOrName === id || idOrName === firstName || idOrName === lastName);
  const animal = employee.responsibleFor
    .map((aidi) => species.find(({ id }) => id === aidi).name);
  return { [`${employee.firstName} ${employee.lastName}`]: animal };
}
console.log(getEmployeeCoverage('Azevado'));

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
