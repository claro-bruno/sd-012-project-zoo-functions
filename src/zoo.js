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

function getSpeciesByIds(...ids) {
  return species.filter((value) => ids.includes(value.id));
} // ok1

function getAnimalsOlderThan(animal, age) {
  return species
    .find((value) => value.name === animal).residents.every((value) => value.age >= age);
} // ok2

function getEmployeeByName(employeeName) {
  return employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName)
    || {};
} // ok3

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
} // ok4

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
} // ok5

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const obj = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(obj);
} // ok6

function countAnimals(specieName) {
  if (specieName !== undefined) {
    return species.find((specie) => specie.name === specieName).residents.length;
  }
  return species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});
} // ok7

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants)
    .reduce((acc, entrant) => acc + entrants[entrant] * prices[entrant], 0);
} // ok8

function getAnimalMap(options) {
  const res = species.reduce((acc, specie) => {
    const { name, location, residents } = specie;
    if (acc[location] === undefined) {
      acc[location] = [];
    }console.log(options);
    if (!options.includeNames){
      acc[location].push(name);
      return acc;
    }
    const residents2 = [];
    residents.forEach((resident) => {
      if (options.sex === undefined || options.sex === resident.sex) {
        residents2.push(resident.name);
      }
    });
    if (options.sorted){
      residents2.sort();
    }
    acc[location].push({[name]: residents2});
    return acc
  }, {});
  return res;
} 
console.log(getAnimalMap());
// console.log(getAnimalMap({sex: 'male', sorted: true, includeNames: false}));

function getSchedule(dayName) {
  const obj = {};
  Object.keys(hours).forEach((weekDay) => {
    if (weekDay === 'Monday') {
      obj[weekDay] = 'CLOSED';
    } else {
      obj[weekDay] = `Open from ${hours[weekDay].open}am until ${hours[weekDay].close % 12}pm`;
    }
  });
  if (dayName !== undefined) {
    return { [dayName]: obj[dayName] };
  }
  return obj;
} // ok10

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((value) => value.id === id);
  const animalId = employee.responsibleFor[0];
  const { residents } = species.find((specie) => specie.id === animalId);
  const oldest = residents.reduce((acc, resident) => {
    if (resident.age > acc.age) {
      return resident;
    }
    return acc;
  }, { age: 0 });
  return Object.values(oldest);
} // ok11

function increasePrices(percentage) {
  Object.keys(prices).forEach((key) => {
    prices[key] = Math.round(prices[key] * (1 + percentage / 100) * 100) / 100;
  });
} // ok12

function anfi(idArr) {
  const namesArr = idArr.map((id) => (
    species.find((specie) => specie.id === id).name
  ));
  return namesArr;
}

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined || Object.keys(idOrName).length === 0) {
    const obj = {};
    employees.forEach((employee) => {
      obj[`${employee.firstName} ${employee.lastName}`] = anfi(employee.responsibleFor);
    });
    return obj;
  }
  const resEmp = employees.find((employee) => (
    idOrName === employee.id
    || idOrName === employee.firstName
    || idOrName === employee.lastName
  ));
  const resFor = resEmp.responsibleFor;
  const animalsArr = resFor.map((specieId) => (
    species.find((specie) => specie.id === specieId).name));
  const name = `${resEmp.firstName} ${resEmp.lastName}`;
  return { [name]: animalsArr };
}// ok13

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
