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
  if (ids.length < 2) {
    return data.species.filter((specie) => specie.id === ids[0]);
  }
  return data.species.filter((specie) =>
    ids.some((id) => id === specie.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.some((specie) => {
    const verifyAllAge = specie.residents.every((resident) => resident.age >= age);
    return specie.name === animal && verifyAllAge;
  });
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  const findEmployee = data.employees.find((employee) =>
    employee.id === id);
  const managements = data.employees.filter((employee) =>
    employee.managers.includes(findEmployee.id));
  if (managements.length > 0) return true;
  return false;
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
  if (species === undefined) {
    const animalsObj = {};
    data.species.forEach((specie) => {
      animalsObj[specie.name] = specie.residents.length;
    });
    return animalsObj;
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants = 0) {
  if (entrants === undefined) return entrants;
  const entrantsKeys = Object.keys(entrants);
  let totalValue = 0;
  entrantsKeys.forEach((key) => {
    if (key === 'Adult') {
      totalValue += entrants[key] * data.prices.Adult;
    } else if (key === 'Child') {
      totalValue += entrants[key] * data.prices.Child;
    } else if (key === 'Senior') {
      totalValue += entrants[key] * data.prices.Senior;
    }
  });
  return totalValue;
}

const createDefaultMap = (siglas) => {
  const defaultMap = {};
  siglas.forEach((sigla) => {
    const locations = data.species.filter((specie) => specie.location === sigla);
    defaultMap[sigla] = locations.map((specie) => specie.name);
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

const speciesNamesSex = (sex) => {
  const species = data.species.reduce((acc, specie) => {
    acc.push(specie.residents.filter((resident) =>
      resident.sex === sex).map((resident) => resident.name));
    return acc;
  }, []);
  const nameSexRelatory = {};
  data.species.forEach((element, index) => {
    nameSexRelatory[element.name] = species[index];
  });
  return nameSexRelatory;
};

const maleSex = (obj, sorted) => {
  const maleNames = speciesNamesSex('male');
  const newObj = {};
  siglas.forEach((sigla) => {
    obj[sigla].forEach(() => {
      const speciesNames = data.species.filter((specie) =>
        specie.location === sigla).map((specie) =>
        specie.name);
      newObj[sigla] = speciesNames.map((specie) =>
        ({ [specie]: maleNames[specie] }));
    });
  });
  if (sorted) { sortNames(newObj); }
  return newObj;
};

const femaleSex = (obj, sorted) => {
  const femaleNames = speciesNamesSex('female');
  const newObj = {};
  siglas.forEach((sigla) => {
    obj[sigla].forEach(() => {
      const speciesNames = data.species.filter((specie) =>
        specie.location === sigla).map((specie) =>
        specie.name);
      newObj[sigla] = speciesNames.map((specie) =>
        ({ [specie]: femaleNames[specie] }));
    });
  });
  if (sorted) { sortNames(newObj); }
  return newObj;
};

const createNamesMap = (sorted, sex) => {
  const namesMap = {};
  siglas.forEach((sigla) => {
    const speciesNames = data.species.filter((specie) =>
      specie.location === sigla).map((specie) =>
      specie.name);
    const residents = data.species.filter((specie) =>
      specie.location === sigla);
    namesMap[sigla] = speciesNames.map((specie) => ({ [specie]: residents.find((animal) =>
      animal.name === specie).residents.map((resident) => resident.name) }));
  });
  if (sex === 'male') { return maleSex(namesMap, sorted); }
  if (sex === 'female') { return femaleSex(namesMap, sorted); }
  if (sorted) { return sortNames(namesMap); }
  return namesMap;
};

function getAnimalMap(options) {
  if (options === undefined) { return defaultMap; }
  const { includeNames = false, sorted = false, sex = undefined } = options;
  if (includeNames) {
    return createNamesMap(sorted, sex);
  } if (!includeNames) { return defaultMap; }
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
  if (dayName === undefined) { return schedule; }
  if (dayName !== 'Monday') {
    const getHour = data.hours[dayName];
    return {
      [dayName]: `Open from ${getHour.open}am until ${getHour.close - 12}pm`,
    };
  }
  return { [dayName]: 'CLOSED' };
}

function getOldestFromFirstSpecies(id) {
  const responsable = data.employees.find((employee) =>
    employee.id === id);
  const animalId = responsable.responsibleFor[0];
  const animal = data.species.find((specie) =>
    specie.id === animalId);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age)[0];
  const keys = Object.keys(oldestAnimal);
  const details = [];
  keys.forEach((key) => {
    details.push(oldestAnimal[key]);
  });
  return details;
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
      (data.species.find(({ id }) => id === animalsId)).name);
    defaultList[fullName] = animals;
  });
  return defaultList;
};

const setFullName = (employee) => `${employee.firstName} ${employee.lastName}`;

const findAndSetEmployeeCoverage = (idOrName) => {
  const employee = data.employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  const fullName = setFullName(employee);
  const animals = employee.responsibleFor.map((animalsId) =>
    (data.species.find(({ id }) => id === animalsId)).name);
  return {
    [fullName]: animals,
  };
};

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) { return createDefaultList(); }
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
