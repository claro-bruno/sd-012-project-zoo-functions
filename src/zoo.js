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

const { species, employees, hours, prices } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return ids.map((id) => species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = species.find((specie) => specie.name === animal);
  return selectedAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
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
  data.employees = [...data.employees, newEmployee];
}

function countAnimals(specie) {
  // seu código aqui
  if (!specie) {
    const animals = {};
    species.forEach((animal) => {
      animals[animal.name] = animal.residents.length;
    });
    return animals;
  }
  const selectedAnimal = species.find((animal) => animal.name === specie);
  return selectedAnimal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const visitors = [entrants.Adult, entrants.Senior, entrants.Child];
  const values = [prices.Adult, prices.Senior, prices.Child];
  return visitors.reduce((totalValue, visitor = 0, index) => {
    let valorTotal = totalValue;
    valorTotal += visitor * values[index];
    return valorTotal;
  }, 0);
}

const locations = ['NE', 'NW', 'SE', 'SW'];

function speciesLocation() {
  const animalsLocation = {};
  locations.forEach((location) => {
    const speciesInTheLocation = species.filter((specie) =>
      specie.location === location);
    animalsLocation[location] = speciesInTheLocation.map((specie) => specie.name);
  });
  return animalsLocation;
}
// ideia de fazer algumas verificacoes nessa funcao em vez da outra retirada do codigo do Roberval https://github.com/tryber/sd-012-project-zoo-functions/pull/41
function speciesLocationWithParameters(sex, sorted) {
  const animalsLocation = {};
  locations.forEach((location) => {
    const speciesInTheLocation = species.filter((specie) =>
      specie.location === location);
    const eachAnimal = speciesInTheLocation.map((specie) => specie.name);
    animalsLocation[location] = eachAnimal.map((animal) => {
      let nomes = speciesInTheLocation.find((specie) => specie.name === animal).residents;
      if (sex) {
        nomes = nomes.filter((element) => element.sex === sex)
          .map((resident) => resident.name);
      } else nomes = nomes.map((resident) => resident.name);
      return sorted ? { [animal]: nomes.sort() } : { [animal]: nomes };
    });
  });
  return animalsLocation;
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return speciesLocation();
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    return speciesLocationWithParameters(sex, sorted);
  }
  return speciesLocation();
}

function generateScheduleForEveryDay() {
  const keys = Object.keys(hours);
  const schedule = {};
  keys.forEach((day) => {
    if (day === 'Monday') schedule[day] = 'CLOSED';
    else {
      const { open, close } = hours[day];
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  return schedule;
}

function getSchedule(dayName) {
  if (!dayName) {
    return generateScheduleForEveryDay();
  }
  const { open, close } = hours[dayName];
  if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
  return { [dayName]: `Open from ${open}am until ${close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmployee = employees.find((employee) => employee.id === id);
  const firstSpecieId = getEmployee.responsibleFor[0];
  const firstSpecie = species.find((specie) => specie.id === firstSpecieId);
  const oldest = firstSpecie.residents.sort((a, b) => b.age - a.age);
  console.log(oldest);
  const { name, sex, age } = oldest[0];
  return [name, sex, age];
}

function increasePrices(percentage) {
  // seu código aqui
  const raise = percentage / 100 + 1;
  let { Adult, Child, Senior } = data.prices;
  Adult = Number((Math.ceil(Adult * raise * 100) / 100).toPrecision(4));
  Child = Number((Math.ceil(Child * raise * 100) / 100).toPrecision(4));
  Senior = Number((Math.ceil(Senior * raise * 100) / 100).toPrecision(4));
  data.prices = {
    Adult,
    Senior,
    Child,
  };
}

function employeeAndAnimals() {
  const animalsAndEmployee = {};
  employees.forEach((employee) => {
    const selectedEmployeeAnimalsId = employee.responsibleFor;
    const animalsNames = selectedEmployeeAnimalsId.map((id) =>
      species.find((specie) => specie.id === id).name);
    const { firstName, lastName } = employee;
    animalsAndEmployee[`${firstName} ${lastName}`] = animalsNames;
  });
  return animalsAndEmployee;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  if (!idOrName) return employeeAndAnimals();
  const animalsAndEmployee = {};
  const selectedEmployee = employees.find((employee) =>
    employee.firstName === idOrName
    || employee.lastName === idOrName
    || employee.id === idOrName);
  const selectedEmployeeAnimalsId = selectedEmployee.responsibleFor;
  const animalsNames = selectedEmployeeAnimalsId.map((id) =>
    species.find((specie) => specie.id === id).name);
  const { firstName, lastName } = selectedEmployee;
  console.log(animalsNames);
  animalsAndEmployee[`${firstName} ${lastName}`] = animalsNames;
  return animalsAndEmployee;
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
