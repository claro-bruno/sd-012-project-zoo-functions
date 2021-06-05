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

// destructuring individual objects from the 'data' file.
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // first gets all data from certain species.
  const chosenAnimal = species.find((specie) => specie.name === animal);

  // then we look on all residents if EVERYone matches the parameter.
  return chosenAnimal.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find(
      (emp) => emp.firstName === employeeName || emp.lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // using rest to assemble information in order.
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
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
  // first getting specific species.
  const selectedSpecies = species.find((specie) => specie.name === specieName);

  // if specified species, return residents count which is equal to number of animals.
  if (specieName) {
    return selectedSpecies.residents.length;
  }
  // if not specified, create object and populate it.
  // for each animal that exists in species original object, create an entry on the fullCount obj.
  // keys will be the species that we are reading on the original object.
  // values will be a count of residents of the same species.
  const fullCount = {};
  species.forEach((specie) => {
    fullCount[specie.name] = specie.residents.length;
  });
  return fullCount;
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = {}) {
  // destructuring the price value of the original object
  const { Adult: AdultPrice, Child: ChildPrice, Senior: seniorPrices } = prices;

  const adultTotal = Adult * AdultPrice;
  const childTotal = Child * ChildPrice;
  const seniorTotal = Senior * seniorPrices;

  return adultTotal + childTotal + seniorTotal;
}

// function getAnimalMap(options) {
//   // seu código aqui
//   // 1º - O que fazer pra colocar no lugar de options caso seja uma ou outra opção?
//   // 2º - Como passar essas várias condicionais pro código?
// }

function getSchedule(dayName) {
  const newObj = {};

  Object.keys(hours).forEach((key) => {
    newObj[key] = `Open from ${hours[key].open}am until ${
      hours[key].close % 12
    }pm`;
    if (key === 'Monday') newObj[key] = 'CLOSED';
  });

  if (dayName) {
    return { [dayName]: newObj[dayName] };
  }

  return newObj;
}

function getOldestFromFirstSpecies(id) {
  const specieId = employees.find((person) => person.id === id);
  const firstAnimal = specieId.responsibleFor[0];
  const findSpecie = species.find(
    (animal) => animal.id === firstAnimal,
  ).residents;
  const oldestAnimal = findSpecie.sort((a, b) => b.age - a.age)[0];

  return [`${oldestAnimal.name}`, `${oldestAnimal.sex}`, oldestAnimal.age];
}

function increasePrices(percentage) {
  const pricesArray = Object.keys(prices);

  return pricesArray.forEach((eachPrice) => {
    prices[eachPrice] = Math.round(prices[eachPrice] * (1 + percentage / 100) * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  const empObj = {};
  if (idOrName) {
    const findEmp = employees.find(
      (emp) => emp.firstName === idOrName || emp.lastName === idOrName
      || emp.id === idOrName,
    );
    const animalsCoverage = findEmp.responsibleFor.map((parametro) =>
      species.find((animal) => animal.id === parametro)).map((each) => each.name);
    empObj[`${findEmp.firstName} ${findEmp.lastName}`] = animalsCoverage;
    return empObj;
  }
  return employees.reduce((reader, person) => {
    const animalNames = person.responsibleFor.map((xablau) =>
      species.find((animal) => animal.id === xablau));
    const namesArray = animalNames.map((each) => each.name);
    empObj[`${person.firstName} ${person.lastName}`] = namesArray;
    return reader;
  }, empObj);
}

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
