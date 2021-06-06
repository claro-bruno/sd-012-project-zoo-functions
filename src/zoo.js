/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');

function getSpeciesByIds(...ids) {
  // OK
  // seu código aqui
  return ids.reduce((acc, id, index) => {
    if (data.species[index].id === id) {
      acc.push(data.species[index]);
    }
    return acc;
  }, []);
}

function getAnimalsOlderThan(animal, age) {
  // OK
  // seu código aqui
  return data.species
    .find(({ name }) => name === animal)
    .residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // OK
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // OK
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // OK
  // seu código aqui;
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(species) {
  // OK
  // seu código aqui
  if (!species) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === species).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (
    Adult * data.prices.Adult
    + Child * data.prices.Child
    + Senior * data.prices.Senior
  );
}

const resetAcc = () => {
  const acc = [
    {
      NE: [],
      NW: [],
      SE: [],
      SW: [],
    },
    {
      NE: [],
      NW: [],
      SE: [],
      SW: [],
    },
  ];
  return acc;
};

const sortNoNames = (noNames) => ({
  NE: noNames.NE.sort(),
  NW: noNames.NW.sort(),
  SW: noNames.NW.sort(),
  SE: noNames.SE.sort(),
});

const getRightLocation = (speciesObj) => {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  return locations.find((location) => speciesObj.location === location);
};

const cutResidentsArrayToSize = (speciesObj, sex) => {
  const residentsArray = speciesObj.residents;
  if (sex) {
    return residentsArray
      .filter((resident) => resident.sex === sex)
      .reduce((acc, resident) => {
        acc.push(resident.name);
        return acc;
      }, []);
  }
  return residentsArray.reduce((acc, resident) => {
    acc.push(resident.name);
    return acc;
  }, []);
};

const populateLocationArrays = (acc, speciesObj, sex, sorted) => {
  const rightLocation = getRightLocation(speciesObj);
  if (sorted) {
    acc[0][rightLocation].push({
      [speciesObj.name]: cutResidentsArrayToSize(speciesObj, sex).sort(),
    });
  } else {
    acc[0][rightLocation].push({
      [speciesObj.name]: cutResidentsArrayToSize(speciesObj, sex),
    });
  }
  if (!acc[1][rightLocation].includes(speciesObj.name)) {
    acc[1][rightLocation].push(speciesObj.name);
  }
  return acc;
};

const groupAnimalsByLocation = (speciesArray, sex, sorted) =>
  speciesArray.reduce(
    (acc, speciesObj) => populateLocationArrays(acc, speciesObj, sex, sorted),
    resetAcc(),
  );

function getAnimalMap(options) {
  // seu código aqui
  const noOptions = { includeNames: false, sorted: false, sex: false };
  const {
    includeNames = false,
    sorted = false,
    sex = false,
  } = options || noOptions;
  let animalMap = data.species;
  animalMap = groupAnimalsByLocation(animalMap, sex, sorted);
  const [withNames, noNames] = animalMap;
  if (includeNames) return withNames;
  if (sorted && includeNames) return sortNoNames(noNames);
  return noNames;
}

function convert24To12Hs(hour24) {
  const hour12 = hour24 % 12;
  const amOrPm = hour24 > 12 ? 'pm' : 'am';
  return { hour: hour12, amOrPm };
}

const toHumanReadable = (acc, curr) => {
  if (curr === 'Monday') {
    acc[curr] = 'CLOSED';
    return acc;
  }
  const open = convert24To12Hs(data.hours[curr].open);
  const close = convert24To12Hs(data.hours[curr].close);
  acc[
    curr
  ] = `Open from ${open.hour}${open.amOrPm} until ${close.hour}${close.amOrPm}`;
  return acc;
};

const allDays = (schedule) =>
  schedule
    .reduce((acc, curr) => toHumanReadable(acc, curr), {});

const aDay = (schedule, dayName) =>
  schedule
    .filter((day) => day === dayName)
    .reduce((acc, curr) => toHumanReadable(acc, curr), {});

function getSchedule(dayName) {
  // seu código aqui
  let schedule = Object.keys(data.hours);
  if (dayName === undefined) {
    schedule = allDays(schedule);
    return schedule;
  }
  return aDay(schedule, dayName);
}

const getResponsible = (employees, id) =>
  employees.find((employee) => employee.id === id);

const getFirstSpecies = (employee, species) =>
  species.find((speciesObj) => speciesObj.id === employee.responsibleFor[0]);

const getOldestResident = (firstSpecies) => [
  ...Object.values(firstSpecies.residents.sort((a, b) => b.age - a.age)[0]),
];

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  let { employees } = data;
  const { species } = data;
  employees = getResponsible(employees, id);
  const firstSpecies = getFirstSpecies(employees, species);
  const oldestResident = getOldestResident(firstSpecies);
  return oldestResident;
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;
  data.prices = {
    Adult: parseFloat((Adult + Adult * (percentage / 100) + 0.001).toFixed(2)),
    Senior: parseFloat(
      (Senior + Senior * (percentage / 100) + 0.001).toFixed(2),
    ),
    Child: parseFloat((Child + Child * (percentage / 100) + 0.001).toFixed(2)),
  };
}

const getResponsibleByIdOrName = (employees, idOrName) => employees.find(
  (employee) =>
    employee.id === idOrName
    || employee.firstName === idOrName
    || employee.lastName === idOrName,
);

const getNameById = (id) => data.species.find((speciesObj) => speciesObj.id === id).name;

const getListOfTennants = (employee) => employee.responsibleFor.map((id) => getNameById(id));

const getCoverageList = (employees) => employees.reduce((acc, employee) => {
  acc[`${employee.firstName} ${employee.lastName}`] = getListOfTennants(employee);
  return acc;
}, {});

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const { employees } = data;
  if (idOrName === undefined) return getCoverageList(employees);
  const responsible = getResponsibleByIdOrName(employees, idOrName);
  return { [`${responsible.firstName} ${responsible.lastName}`]: getListOfTennants(responsible) };
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
