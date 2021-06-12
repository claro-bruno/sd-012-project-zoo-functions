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
const { species, employees, hours, prices } = require('./data');

const getSpeciesByIds = (...ids) => species.filter((animal) => ids.includes(animal.id));

const getAnimalsOlderThan = (animal, age) => species.find((specie) => specie.name === animal)
  .residents.every((element) => element.age >= age);

const getEmployeeByName = (employeeName) =>
  (employeeName ? employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) : {});

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => employees.some((empregado) => empregado.managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  employees.push({ id, firstName, lastName, managers, responsibleFor });
};

const countAnimals = (speciess) => {
  const todos = {};
  species.forEach(({ name, residents }) => { todos[name] = residents.length; });
  return !speciess ? todos : species.find((animal) => animal.name === speciess).residents.length;
};

function calculateEntry(entrants = []) {
  let soma = 0;
  Object.entries(entrants).forEach((element) => {
    switch (element[0]) {
    case 'Child':
      soma += element[1] * 20.99;
      return;
    case 'Adult':
      soma += element[1] * 49.99;
      return;
    case 'Senior':
      soma += element[1] * 24.99;
      return;
    default:
      return soma;
    }
  });
  return soma;
}

function generateAnimalsLocation(arrayCoord) {
  return arrayCoord.reduce((object, coord) => {
    const objectCoord = object;
    const arraySpecies = species
      .filter(({ location }) => location === coord)
      .map((specie) => specie.name);
    objectCoord[coord] = arraySpecies;
    return objectCoord;
  }, {});
}

function generateSpeciesName(arrayAnimal, options) {
  return arrayAnimal.reduce((array, specieName) => {
    const object = {};
    let arrayNames = species.find((specie) => specie.name === specieName).residents;

    if (options.sex) arrayNames = arrayNames.filter((animal) => animal.sex === options.sex);

    arrayNames = arrayNames.map((animal) => animal.name);

    if (options.sorted) arrayNames.sort();

    object[specieName] = arrayNames;
    array.push(object);
    return array;
  }, []);
}

function getAnimalMap(options) {
  const coords = ['NE', 'NW', 'SE', 'SW'];
  const animalsLocation = generateAnimalsLocation(coords);
  const namesLocation = {};

  if (!options || !options.includeNames) return animalsLocation;

  coords.forEach((key) => {
    namesLocation[key] = generateSpeciesName(animalsLocation[key], options);
  });
  return namesLocation;
}

function getSchedule(dayname) {
  const todos = { };
  if (!dayname) {
    Object.keys(hours).forEach((dia) => {
      const { open, close } = hours[dia];
      todos[dia] = dia === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
    });
    return todos;
  }
  const { open, close } = hours[dayname];
  return { [dayname]: dayname === 'Monday'
    ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm` };
}

getSchedule();

const getOldestFromFirstSpecies = (call) => {
  const animalId = employees.find(({ id }) => id === call).responsibleFor[0];
  return Object.values((species.find(({ id }) => id === animalId).residents.reduce((acc, animals) =>
    (animals.age > acc.age ? animals : acc))));
};

const increasePrices = (percentage) => {
  Object.keys(prices).forEach((key) => {
    prices[key] *= ((percentage / 100) + 1);
    prices[key] = Math.round(prices[key] * 100) / 100;
  });
  return prices;
};

const responsible = {};
const getResonsible = () => {
  employees.forEach((empregado) => {
    responsible[`${empregado.firstName} ${empregado.lastName}`] = empregado.responsibleFor;
  });
  Object.keys(responsible).forEach((key) =>
    responsible[key].forEach((id, index) => species.forEach((animal) => {
      if (animal.id === id) {
        responsible[key][index] = animal.name;
      }
    })));
};

const getEmployeeCoverage = (idOrName) => {
  getResonsible();
  if (idOrName) {
    let empregado = employees.find((empregados) =>
      empregados.firstName === idOrName || empregados.id === idOrName
      || empregados.lastName === idOrName).firstName;
    empregado = Object.keys(responsible).find((key) => key.includes(empregado));
    return { [empregado]: responsible[empregado] };
  }
  return responsible;
};

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
