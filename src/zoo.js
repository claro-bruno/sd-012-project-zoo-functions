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

const getSpeciesByIds = (...ids) => {
  const result = [];
  if (ids === undefined) return result;
  ids.forEach((id) =>
    result
      .push(data.species
        .find((specie) => specie.id === id)));
  return result;
};

const getAnimalsOlderThan = (animal, age) => {
  const result = data.species
    .find(({ name }) => name === animal)
    .residents
    .every((resident) => resident.age >= age);
  return result;
};

const getEmployeeByName = (employeeName) => {
  let result = {};
  if (employeeName === undefined) return result;
  result = data.employees
    .find(({ firstName, lastName }) =>
      firstName === employeeName
      || lastName === employeeName);
  return result;
};

const createEmployee = (personalInfo, associatedWith) => {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
};

const isManager = (id) => {
  const managerIds = [];
  data.employees.forEach(({ managers }) => managerIds.push(...managers));
  const result = managerIds.some((managerId) => managerId === id);
  return result;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees
    .push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (species) => {
  if (species === undefined) {
    const result = {};
    data.species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  const result = data.species
    .find(({ name }) => name === species)
    .residents.length;
  return result;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const { Adult: adults = 0, Child: childs = 0, Senior: seniors = 0 } = entrants;
  const { Adult, Senior, Child } = data.prices;

  const result = adults * Adult + childs * Child + seniors * Senior;

  return result;
};

const locations = ['NE', 'NW', 'SE', 'SW'];

const getLocation = () => {
  const result = {};
  locations.forEach((loc) => {
    const animals = data.species
      .filter(({ location }) => location === loc)
      .map(({ name }) => name);
    result[loc] = animals;
  });
  return result;
};

const getBySex = (speciesName, residents, sexType) => ({ [speciesName]: residents
  .filter(({ sex }) => sex === sexType)
  .map(({ name, sex }) => name) });

const getByName = (sexType, sorted) => {
  const result = {};
  locations.forEach((loc) => {
    const locationAnimals = [];
    data.species
      .filter(({ location }) => location === loc)
      .forEach(({ name: speciesName, residents }) => {
        let teste = [];
        if (sexType !== '') {
          teste = getBySex(speciesName, residents, sexType);
        } else {
          teste = { [speciesName]: residents.map(({ name }) => name) };
        }
        if (sorted) teste[speciesName].sort();
        locationAnimals.push(teste);
      });
    result[loc] = locationAnimals;
  });
  return result;
};

const getAnimalMap = (options) => {
  if (options === undefined) return getLocation();
  const { includeNames = false, sorted = false, sex = '' } = options;
  if (includeNames) return getByName(sex, sorted);
  return getLocation();
};

const getSchedule = (dayName) => {
  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    const { open, close } = data.hours[day];
    if (day === 'Monday') {
      schedule[day] = 'CLOSED';
    } else {
      schedule[day] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (dayName === undefined) return schedule;
  const result = { [dayName]: schedule[dayName] };
  return result;
};

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find(({ id: employeeId }) => employeeId === id);
  const firstAnimal = data.species
    .find(({ id: specieId }) => specieId === employee.responsibleFor[0]);
  const oldestResident = firstAnimal.residents.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestResident;
  return [name, sex, age];
};

const increasePrices = (percentage) => {
  const { prices } = data;

  Object.keys(prices).forEach((key) => {
    const newPrice = (prices[key] * (1 + (percentage / 100))) + 0.005;
    prices[key] = Number(newPrice.toPrecision(4));
  });
};

const getAllEmployeeCoverage = () => {
  const result = {};
  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    result[`${firstName} ${lastName}`] = responsibleFor.map((specieId) =>
      data.species.find(({ id }) => id === specieId).name);
  });
  return result;
};

const getEmployeeCoverage = (idOrName) => {
  if (idOrName === undefined) return getAllEmployeeCoverage();
  const employee = data.employees
    .find(({ id, firstName, lastName }) =>
      idOrName === id || idOrName === firstName || idOrName === lastName);

  const { firstName, lastName, responsibleFor } = employee;
  const animals = responsibleFor.map((specieId) =>
    data.species.find(({ id }) => id === specieId).name);

  return { [`${firstName} ${lastName}`]: animals };
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
