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

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return ids;
  return data.species.filter(({ id }) => ids.includes(id));
}

function getAnimalsOlderThan(animal, minimumAge) {
  const animalObj = data.species.find((specie) => specie.name === animal);
  return animalObj.residents.every(({ age }) => age >= minimumAge);
}

function getEmployeeByName(employeeName = {}) {
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) || employeeName;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    },
  );
}

function countAnimals(species) {
  if (!species) {
    const animalsObj = {};
    data.species.forEach(({ name, residents }) => {
      animalsObj[name] = residents.length;
    });
    return animalsObj;
  }
  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (
    (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior) || 0
  );
}

const createDefaultMap = (siglas) => {
  const defaultMap = {};
  siglas.forEach((sigla) => {
    const localNames = data.species.filter(({ location }) => location === sigla);
    defaultMap[sigla] = localNames.map(({ name }) => name);
  });
  return defaultMap;
};

const siglas = ['NE', 'NW', 'SE', 'SW'];
const defaultMap = createDefaultMap(siglas);

const sortNames = (obj) => {
  siglas.forEach((sigla) => {
    obj[sigla].forEach((elemento) =>
      Object.values(elemento)[0].sort());
  });
  return obj;
};

const speciesNamesSex = (inputSex) => {
  const species = data.species.map(({ residents }) =>
    residents.filter(({ sex }) =>
      sex === inputSex).map(({ name }) => name));
  const nameSexRelatory = {};
  data.species.forEach(({ name }, index) => {
    nameSexRelatory[name] = species[index];
  });
  return nameSexRelatory;
};

const changeBySex = (sex, sorted = false) => {
  const namesBysex = speciesNamesSex(sex);
  const newObj = {};
  siglas.forEach((sigla) => {
    const localNames = data.species.filter(({ location }) =>
      location === sigla).map(({ name }) => name);
    newObj[sigla] = localNames.map((localName) =>
      ({ [localName]: namesBysex[localName] }));
  });
  if (sorted) { sortNames(newObj); }
  return newObj;
};

const createNamesMap = (sorted = false, sex) => {
  const namesMap = {};
  siglas.forEach((sigla) => {
    const speciesNames = data.species.filter(({ location }) =>
      location === sigla).map(({ name }) => name);
    const residents = data.species.filter(({ location }) =>
      location === sigla);
    namesMap[sigla] = speciesNames.map((specieName) =>
      ({ [specieName]: residents.find(({ name }) =>
        name === specieName).residents.map(({ name }) => name) }));
  });
  if (sex === 'male') { return changeBySex('male', sorted); }
  if (sex === 'female') { return changeBySex('female', sorted); }
  if (sorted) { return sortNames(namesMap); }
  return namesMap;
};

function getAnimalMap({ includeNames, sorted, sex } = defaultMap) {
  if (!includeNames) { return defaultMap; }
  return createNamesMap(sorted, sex);
}

function getSchedule(dayName) {
  const days = Object.keys(data.hours);
  const times = Object.values(data.hours);
  const schedule = {};
  days.forEach((day, index) => {
    if (day !== 'Monday') {
      schedule[day] = `Open from ${times[index].open}am until ${times[index].close - 12}pm`;
    } else {
      schedule[day] = 'CLOSED';
    }
  });
  if (!dayName) { return schedule; }
  if (dayName !== 'Monday') {
    const getHour = data.hours[dayName];
    return {
      [dayName]: `Open from ${getHour.open}am until ${getHour.close - 12}pm`,
    };
  }
  return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(inputId) {
  const { responsibleFor } = data.employees.find(({ id }) => id === inputId);
  const animalId = responsibleFor[0];
  const { residents } = data.species.find(({ id }) => id === animalId);
  const oldestAnimal = residents.sort((a, b) => b.age - a.age)[0];
  const keys = Object.keys(oldestAnimal);
  return keys.map((key) => oldestAnimal[key]);
}

function increasePrices(percentage) {
  const people = Object.keys(data.prices);
  people.forEach((person) => {
    const newPrice = (data.prices[person] * (1 + (percentage / 100))) + 0.001;
    data.prices[person] = Number(newPrice.toFixed(2));
  });
}

const createDefaultList = () => {
  const defaultList = {};
  data.employees.forEach(({ firstName, lastName, responsibleFor }) => {
    const fullName = `${firstName} ${lastName}`;
    const animals = responsibleFor.map((animalsId) =>
      data.species.find(({ id }) =>
        id === animalsId).name);
    defaultList[fullName] = animals;
  });
  return defaultList;
};

const setFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

const findAndSetEmployeeCoverage = (idOrName) => {
  const employee = data.employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  const fullName = setFullName(employee);
  const animals = employee.responsibleFor.map((animalsId) =>
    (data.species.find(({ id }) => id === animalsId)).name);
  return { [fullName]: animals };
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) { return createDefaultList(); }
  return findAndSetEmployeeCoverage(idOrName);
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
