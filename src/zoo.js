const data = require('./data');

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const dataAnimal = species.find((specie) => specie.name === animal);
  const checkAgeAnimals = dataAnimal.residents.every((resident) => resident.age > age);
  return checkAgeAnimals;
}

function getEmployeeByName(employeeName) {
  const employeeData = employees.find((employ) =>
    employ.firstName === employeeName
    || employ.lastName === employeeName);
  return employeeName !== undefined ? employeeData : {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
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
  const employeesManager = employees.filter((employee) => employee.managers.length > 0);
  return employeesManager.some((manager) => manager.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(newEmployee);
}

function countAnimals(specie) {
  if (specie) {
    const resultCountSpecie = species.find((especie) => especie.name === specie).residents.length;
    return resultCountSpecie;
  }

  const resultCountSpecies = {};
  species.forEach((spec) => {
    resultCountSpecies[spec.name] = spec.residents.length;
  });
  return resultCountSpecies;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult: adults = 0, Child: children = 0, Senior: seniors = 0 } = entrants;
  const totalEntryAdult = Number(adults) * Number(prices.Adult);
  const totalEntryChild = Number(children) * Number(prices.Child);
  const totalEntrySenior = Number(seniors) * Number(prices.Senior);
  const total = totalEntryAdult + totalEntryChild + totalEntrySenior;

  return total;
}

const generateNameAnimals = (specs, sorted, sex) => {
  const arrAnimalsSpecie = [];
  specs.forEach((specieName) => {
    const objAnimalsName = {};
    let arrAnimals = species.find((specie) => specie.name === specieName).residents;
    if (sex) arrAnimals = arrAnimals.filter((animal) => animal.sex === sex);
    arrAnimals = arrAnimals.map((animal) => animal.name);
    if (sorted) arrAnimals = arrAnimals.sort();
    objAnimalsName[specieName] = arrAnimals;
    arrAnimalsSpecie.push(objAnimalsName);
  });
  return arrAnimalsSpecie;
};

const generateBaseMapAnimals = (regions, options) => {
  const objRegionsSpecies = {};
  const objNamesSpecies = {};
  regions.forEach((location) => {
    const dataAnimals = species.filter((loc) =>
      loc.location === location).map((specie) => specie.name);
    objRegionsSpecies[location] = dataAnimals;
  });

  if (options && options.includeNames) {
    const { sorted = false, sex = '' } = options;
    regions.forEach((location) => {
      objNamesSpecies[location] = generateNameAnimals(objRegionsSpecies[location], sorted, sex);
    });
    return objNamesSpecies;
  }
  return objRegionsSpecies;
};

function getAnimalMap(options) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const getSpeciesLocation = generateBaseMapAnimals(locations, options);
  return getSpeciesLocation;
}
console.log(getAnimalMap());

function getSchedule(dayName) {
  const schedule = {};
  if (!dayName) {
    const scheduleDays = Object.keys(hours);
    scheduleDays.forEach((day) => {
      const { open, close } = hours[day];
      schedule[day] = day !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';
    });
    return schedule;
  }

  const { open, close } = hours[dayName];
  schedule[dayName] = dayName !== 'Monday' ? `Open from ${open}am until ${close - 12}pm` : 'CLOSED';

  return schedule;
}

function getOldestFromFirstSpecies(id) {
  const speciesList = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animalList = species.find((spec) => spec.id === speciesList).residents;
  const elder = animalList.reduce((elderAnimal, animal) => {
    const { name, sex, age } = animal;
    const { age: ageOlder } = elderAnimal;
    return age > ageOlder ? { name, sex, age } : elderAnimal;
  }, { name: '', sex: '', age: 0 });
  return Object.values(elder);
}

function increasePrices(percentage) {
  // Utilizado o link abaixo para fixar as casas decimais
  // https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

  Object.keys(data.prices).forEach((price) => {
    data.prices[price] = Math.round((prices[price] * (1 + (percentage / 100)) * 100)) / 100;
  });
  return data.prices;
}

function getEmployeeCoverage(idOrName) {
  const employeeSpecies = {};
  if (idOrName) {
    const getEmployeeSpecies = employees.find(({ firstName, lastName, id }) =>
      firstName === idOrName || lastName === idOrName || id === idOrName);

    const { firstName, lastName, responsibleFor } = getEmployeeSpecies;
    const speciesAnimals = responsibleFor.map((specie) =>
      species.find((spec) => spec.id === specie).name);

    employeeSpecies[`${firstName} ${lastName}`] = speciesAnimals;
    return employeeSpecies;
  }

  employees.forEach(({ firstName: nome, lastName: sobreNome, responsibleFor: idsSpecie }) => {
    employeeSpecies[`${nome} ${sobreNome}`] = idsSpecie.map((specieId) =>
      species.find((spec) => spec.id === specieId).name);
  });
  return employeeSpecies;
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
  generateBaseMapAnimals,
  generateNameAnimals,
};
