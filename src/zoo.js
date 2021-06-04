const data = require('./data');

function getSpeciesByIds(...ids) {
  const selectedSpecie = [];
  ids.forEach((id) => selectedSpecie.push(data.species.find((specie) => specie.id === id)));
  return selectedSpecie;
}

function getAnimalsOlderThan(animal, age) {
  const selectedSpecie = data.species.find((specie) => specie.name === animal);
  return selectedSpecie.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof (employeeName) !== 'undefined') {
    return data.employees.find((employee) => {
      const findEmloyee = employee.firstName === employeeName || employee.lastName === employeeName;
      return findEmloyee;
    });
  } return {};
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  let checkManager = false;
  data.employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === id)) checkManager = true;
  });
  return checkManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (typeof (species) === 'undefined') {
    const animalsObjs = data.species.map((specie) => ({ [specie.name]: specie.residents.length }));
    return animalsObjs.reduce((prevValue, currValue) => Object.assign(prevValue, currValue), {});
  } return data.species.find((specie) => specie.name === species).residents.length;
}

const sumEntry = (entrants) => entrants.reduce((prevValue, currValue) => {
  if (currValue[0] === 'Adult') return prevValue + (currValue[1] * 49.99);
  if (currValue[0] === 'Senior') return prevValue + (currValue[1] * 24.99);
  return prevValue + (currValue[1] * 20.99);
}, 0);

function calculateEntry(entrants) {
  if (typeof (entrants) === 'undefined' || Object.keys(entrants).length === 0) return 0;
  return sumEntry(Object.entries(entrants));
}

const getSpeciesByLocation = (species, location) => {
  const specieByLocation = species.filter((specie) => specie.location === location);
  return specieByLocation.map((specie) => specie.name);
};

const getSpeciesWithName = (species, location) => {
  const specieWithName = species.filter((specie) => specie.location === location).map((specie) => {
    const objectSpecie = { [specie.name]: (specie.residents.map((resident) => resident.name)) };
    return objectSpecie;
  });
  return specieWithName;
};

const getSpeciesWithNameSorted = (species, location) => {
  const specieSorted = species.filter((specie) => specie.location === location).map((specie) => {
    const residentsCopy = [...specie.residents];
    const objectSpecieSorted = { [specie.name]: (residentsCopy).sort((a, b) => {
      if (b.name > a.name) return -1;
      return 0;
    }).map((resident) => resident.name) };
    return objectSpecieSorted;
  });
  return specieSorted;
};

const getSpeciesWithSex = (species, location, sex) => {
  const specieSex = species.filter((specie) => specie.location === location).map((specie) => {
    const objectSpecie = { [specie.name]: (specie.residents.filter((resident) => {
      const verifySex = resident.sex === sex;
      return verifySex;
    }).map((resident) => resident.name)) };
    return objectSpecie;
  });
  return specieSex;
};

const getSpeciesWithSexSorted = (species, location, sex) => {
  const specieSexSorted = species.filter((specie) => specie.location === location).map((specie) => {
    const residentsCopy = [...specie.residents];
    const objectSpecieSorted = { [specie.name]: (residentsCopy.filter((resident) => {
      const verifySexSorted = resident.sex === sex;
      return verifySexSorted;
    }).sort((a, b) => {
      if (b.name > a.name) return -1;
      return 0;
    }).map((resident) => resident.name)) };
    return objectSpecieSorted;
  });
  return specieSexSorted;
};

const callAnimalMapFunction = (animalMapFunction, sex) => {
  if (animalMapFunction === getSpeciesWithSex || animalMapFunction === getSpeciesWithSexSorted) {
    return {
      NE: animalMapFunction(data.species, 'NE', sex),
      NW: animalMapFunction(data.species, 'NW', sex),
      SE: animalMapFunction(data.species, 'SE', sex),
      SW: animalMapFunction(data.species, 'SW', sex),
    };
  }
  return {
    NE: animalMapFunction(data.species, 'NE'),
    NW: animalMapFunction(data.species, 'NW'),
    SE: animalMapFunction(data.species, 'SE'),
    SW: animalMapFunction(data.species, 'SW'),
  };
};

const verifyDefault = (options) => (typeof (options) === 'undefined');

const verifyNames = (names, length) => (names === true && length === 1);

const verifySorted = (names, length, sorted) => (names === true && sorted === true && length === 2);

const existSex = (sex) => (sex === 'female' || sex === 'male');

const verifySex = (names, length, sex) => (names === true && sex === true && length === 2);

const verifySexSorted = (names, sex, sorted) => (names === true && sex === true && sorted === true);

const verifyWrong = (names, sex, sorted) => (names !== true && (sex === true || sorted === true));

const getAnimalMapExtend = (options) => {
  const { includeNames, sorted } = options;
  const optionsLength = Object.entries(options).length;
  const sex = existSex(options.sex);
  const optionSex = verifySex(includeNames, optionsLength, sex);
  if (optionSex) return callAnimalMapFunction(getSpeciesWithSex, options.sex);
  const optionSexSorted = verifySexSorted(includeNames, sex, sorted);
  if (optionSexSorted) return callAnimalMapFunction(getSpeciesWithSexSorted, options.sex);
  const optionWrong = verifyWrong(includeNames, sex, sorted);
  if (optionWrong) return callAnimalMapFunction(getSpeciesByLocation);
};

function getAnimalMap(options) {
  const optionDefault = verifyDefault(options);
  if (optionDefault) return callAnimalMapFunction(getSpeciesByLocation);
  const { includeNames, sorted } = options;
  const optionsLength = Object.entries(options).length;
  const optionNames = verifyNames(includeNames, optionsLength);
  if (optionNames) return callAnimalMapFunction(getSpeciesWithName);
  const optionSorted = verifySorted(includeNames, optionsLength, sorted);
  if (optionSorted) return callAnimalMapFunction(getSpeciesWithNameSorted);
  return getAnimalMapExtend(options);
}

const formatSchedule = (hour) => {
  if (hour[0] === 'Monday') return ({ [hour[0]]: 'CLOSED' });
  const open = parseInt(hour[1].open, 10);
  const close = parseInt(hour[1].close, 10) - 12;
  return ({ [hour[0]]: `Open from ${open}am until ${close}pm` });
};

const formatScheduleDefault = (hours) => {
  const format = hours.map((hour) => formatSchedule(hour));
  return format.reduce((prevValue, currValue) => Object.assign(prevValue, currValue), {});
};

function getSchedule(dayName) {
  if (typeof (dayName) === 'undefined') return formatScheduleDefault(Object.entries(data.hours));
  return formatSchedule(Object.entries(data.hours).find((hour) => hour[0] === dayName));
}

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldest = (data.species.find((specie) => specie.id === specieId).residents).sort((a, b) => {
    if (b.age < a.age) return -1;
    return 0;
  })[0];
  return [oldest.name, oldest.sex, oldest.age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((price) => {
    data.prices[price] = Math.round((data.prices[price] * (1 + (percentage / 100))) * 100) / 100;
  });
}

const formatGetCovered = (employee) => {
  const fullName = `${employee.firstName} ${employee.lastName}`;
  return ({ [fullName]: employee.responsibleFor.map((caredSpecie) => {
    const foundSpecie = (data.species.find((specie) => specie.id === caredSpecie)).name;
    return foundSpecie;
  }) });
};

const getCoverageUndefined = () => {
  const employeeList = data.employees.map((employee) => formatGetCovered(employee));
  return employeeList.reduce((prevValue, currValue) => Object.assign(prevValue, currValue), {});
};

const getCoveredByIdOrName = (idOrName) => {
  const employeeFind = data.employees.find((employee) => {
    let foundEmployee = (employee.firstName === idOrName || employee.lastName === idOrName);
    if (foundEmployee === false) foundEmployee = employee.id === idOrName;
    return foundEmployee;
  });
  return formatGetCovered(employeeFind);
};

function getEmployeeCoverage(idOrName) {
  if (typeof (idOrName) === 'undefined') {
    return getCoverageUndefined();
  }
  return getCoveredByIdOrName(idOrName);
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
