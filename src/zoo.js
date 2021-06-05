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
  return species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const employeeFound = employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
  if (!employeeFound) {
    return {};
  }
  return employeeFound;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((person, index) => person.managers[index] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(employee);
}

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    species.forEach((specie) => {
      const { name, residents } = specie;
      obj[name] = residents.length;
    });
    return obj;
  }
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }

  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const priceAdult = Adult * prices.Adult;
  const priceSenior = Senior * prices.Senior;
  const priceChild = Child * prices.Child;
  const totalPrice = priceAdult + priceSenior + priceChild;
  return totalPrice;
}

function getAnimalNoPar() {
  const obj = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((location) => {
    obj[location] = [];
    const locationAnimals = species.filter((specie) => specie.location === location);
    locationAnimals.forEach((animal) => {
      obj[location].push(animal.name);
    });
  });
  return obj;
}

function getAnimalIncludeNames(options) {
  const obj = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((location) => {
    obj[location] = [];
    const locationAnimals = species.filter((specie) => specie.location === location);
    locationAnimals.forEach((animal) => {
      obj[location].push({ [animal.name]: (animal.residents.map((resident) => resident.name)) });
    });
    if (options.sorted === true) obj[location].forEach((animal) => Object.values(animal)[0].sort());
  });
  return obj;
}

function getAnimalSex(options) {
  const obj = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((location) => {
    obj[location] = [];
    const locationAnimals = species.filter((specie) => specie.location === location);
    locationAnimals.forEach((animal) => {
      obj[location].push({ [animal.name]: (animal.residents.reduce((acc, resident) => {
        if (resident.sex === options.sex) acc.push(resident.name);
        return acc;
      }, [])),
      });
    });
    if (options.sorted === true) obj[location].forEach((animal) => Object.values(animal)[0].sort());
  });
  return obj;
}

function getAnimalMap(options) {
  if (options === undefined || options.includeNames === undefined) {
    return getAnimalNoPar();
  }
  if (options.sex !== undefined) {
    return getAnimalSex(options);
  }
  return getAnimalIncludeNames(options);
}

function getSchedule(dayName) {
  let hoursObj = {};
  if (!dayName) {
    hoursObj = {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
      Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
    return hoursObj;
  }
  hoursObj[dayName] = `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`;
  if (dayName === 'Monday') hoursObj[dayName] = 'CLOSED';
  return hoursObj;
}

function getOldestFromFirstSpecies(id) {
  const employeeById = employees.find((employee) => employee.id === id);
  const animalId = employeeById.responsibleFor[0];
  const animalObj = species.find((specie) => specie.id === animalId);
  const oldestAnimal = animalObj.residents.reduce((oldest, resident) => {
    if (resident.age > oldest.age) {
      return resident;
    }
    return oldest;
  });
  const { name, sex, age } = oldestAnimal;
  const oldestAnimalArr = [name, sex, age];
  return oldestAnimalArr;
}

function increasePrices(percentage) {
  let { Adult, Child, Senior } = prices;
  Adult += (Adult * (percentage / 100));
  Child += (Child * (percentage / 100));
  Senior += (Senior * (percentage / 100));
  prices.Adult = Math.round((Adult + Number.EPSILON) * 100) / 100;
  prices.Child = Math.round((Child + Number.EPSILON) * 100) / 100;
  prices.Senior = Math.round((Senior + Number.EPSILON) * 100) / 100;
}

function getEmployeeNoPar() {
  const obj = {};
  employees.forEach((employee) => {
    const fullName = `${employee.firstName} ${employee.lastName}`;
    const employeeAnimals = [];
    employee.responsibleFor.forEach((animal) => {
      const findAnimal = species.find((specie) => specie.id === animal);
      employeeAnimals.push(findAnimal.name);
      obj[fullName] = employeeAnimals;
    });
  });
  return obj;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return getEmployeeNoPar();
  const findEmployee = employees.find((employee) => employee.firstName === idOrName
  || employee.lastName === idOrName || employee.id === idOrName);
  const employeeAnimals = [];
  findEmployee.responsibleFor.forEach((animal) => {
    const findAnimal = species.find((specie) => specie.id === animal);
    employeeAnimals.push(findAnimal.name);
  });
  const employeeObj = {};
  const fullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  employeeObj[fullName] = employeeAnimals;
  return employeeObj;
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
