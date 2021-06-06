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
const { species, employees, prices, hours } = require('./data');

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.some((id) => specie.id === id));

const getAnimalsOlderThan = (animal, age) => {
  const animais = species.find((specie) => specie.name === animal).residents;
  return animais.every((animalAge) => animalAge.age >= age);
};

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return employees.find((employee) =>
    employee.firstName === employeeName
    || employee.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => {
  const employeeCreated = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return employeeCreated;
};

const isManager = (id) => employees.some((employee) => employee.managers.includes(id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
};

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, specie) => (
      { ...acc, [specie.name]: specie.residents.length }), {});
  }
  const count = species.find((specie) => specie.name === animal);
  return count.residents.length;
};

const calculateEntry = (entrants) => {
  if (entrants === {} || !entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
};

const getAnimalMap = (options = {}) => {
  const { includeNames = false, sorted = false, sex = false } = options;
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const speciesByLocation = Object.values(locations.map((location) =>
    species.filter((specie) =>
      specie.location === location)));
        
  if (includeNames === true) {
    return speciesByLocation.reduce((acc, curr) =>
      ({ ...acc, [curr[0].location]: curr.reduce((acc, curr) => {
        const animalNames = ({ ...acc,
          [curr.name]: (curr.residents.map((specie) => specie.name))});
        const animalNamesSorted = ({ ...acc,
          [curr.name]: (curr.residents.map((specie) => specie.name).sort())});
        if (sorted === true) {
          return animalNamesSorted;
        } else if (sex === male) {

        } else if (sex === female) {

        }
        return animalNames;
        }, {}) }), {});
  }

  return speciesByLocation.reduce((acc, curr) =>
  ({ ...acc, 
    [curr[0].location]: curr.map((animalByLocation) =>
    animalByLocation.name) }), {});
};

console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));

const getSchedule = (dayName) => {
  const weekDays = Object.keys(hours);
  const weekHours = Object.values(hours);
  const schedule = weekHours.reduce((acc, hour, day) => {
    if (weekDays[day] !== 'Monday') {
      acc[weekDays[day]] = `Open from ${hour.open}am until ${hour.close - 12}pm`;
    } else acc[weekDays[day]] = 'CLOSED';
    return acc;
  }, {});

  if (!dayName) return schedule;
  const dayChose = Object.entries(schedule).find((day) => day[0] === dayName);
  return { [dayChose[0]]: dayChose[1] };
};

const getOldestFromFirstSpecies = (id) => {
  const employeeFoundById = employees.find((employee) => employee.id === id);
  const firstSpecieId = employeeFoundById.responsibleFor[0];
  const specieResidents = species.find((specie) => specie.id === firstSpecieId).residents;
  let oldestAnimal = specieResidents[0];
  specieResidents.forEach((resident) => {
    if (resident.age > oldestAnimal.age) {
      oldestAnimal = resident;
    }
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

const increasePrices = (percentage) => {
  prices.Adult = Math.round((prices.Adult + (prices.Adult * (percentage / 100))) * 100) / 100;
  prices.Child = Math.round((prices.Child + (prices.Child * (percentage / 100))) * 100) / 100;
  prices.Senior = Math.round((prices.Senior + (prices.Senior * (percentage / 100))) * 100) / 100;
  return prices;
};

const getEmployeeCoverage = (idOrName) => {
  const employeeCoverage = employees.reduce((acc, employee) => (
    { ...acc,
      [`${employee.firstName} ${employee.lastName}`]:
      employee.responsibleFor.map((specieId) =>
        species.find((specie) => specieId === specie.id).name),
    }), {});

  if (!idOrName) return employeeCoverage;
  const employeeChose = employees.find((employee) =>
    employee.firstName === idOrName
  || employee.lastName === idOrName
  || employee.id === idOrName);
  const employeeName = `${employeeChose.firstName} ${employeeChose.lastName}`;
  const employeeCaught = Object.entries(employeeCoverage).find((name) => name[0] === employeeName);
  return { [employeeCaught[0]]: employeeCaught[1] };
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
