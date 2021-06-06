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

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  const objetoAnimal = species.find((specie) => specie.name === animal);
  return objetoAnimal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((employee) => {
    const retorno = employee.firstName === employeeName || employee.lastName === employeeName;
    return retorno;
  });
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animal) {
  if (animal === undefined) {
    const objetoAnimais = {};
    species.forEach((eachSpecie) => {
      objetoAnimais[eachSpecie.name] = eachSpecie.residents.length;
    });
    return objetoAnimais;
  }
  const retorno = data.species.find((eachSpecie) => eachSpecie.name === animal);
  return retorno.residents.length;
}

function calculateEntry(entrants) {
  if (entrants === {} || !entrants) {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return Adult * data.prices.Adult + Child * data.prices.Child + Senior * data.prices.Senior;
}

// function getAnimalMap(options) {
//   let retorno = {}
//   if (!options) {

//   }
// }

function getSchedule(dayName) {
  const schedule = data.hours;
  const retorno = {};
  Object.keys(schedule).forEach((key) => {
    if (schedule[key].close === 0) {
      retorno[key] = 'CLOSED';
    } else {
      retorno[key] = `Open from ${schedule[key].open}am until ${schedule[key].close - 12}pm`;
    }
  });
  if (dayName !== undefined) {
    return { [dayName]: retorno[dayName] };
  }
  return retorno;
}

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const idAnimal = getEmployee.responsibleFor[0];
  const getResidents = species.find((specie) => specie.id === idAnimal).residents;
  const oldest = getResidents.reduce((residentA, residentB) =>
    (residentA.age > residentB.age ? residentA : residentB));
  const { name, sex, age } = oldest;
  return [name, sex, age];
}

function increasePrices(percentage) {
  const increaseValue = (100 + percentage) / 100;
  Object.keys(data.prices).forEach((key) => {
    data.prices[key] = Math.round(100 * (data.prices[key] * increaseValue)) / 100;
  });
}

// function getEmployeeCoverage(idOrName) {
//   const employeesArray = data.employees.map((employee) => {
//     const retorno = `${employee.firstName} ${employee.lastName}`;
//     return retorno;
//   });
//   const employeesObject = {};
//   employeesArray.forEach((employee) => )
//   console.log(employeesObject);
// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
