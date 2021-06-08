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
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const newArr = [];
  for (let index = 0; index < ids.length; index += 1) {
    const filtra = species.find((specie) => specie.id === ids[index]);
    newArr.push(filtra);
  }
  return newArr;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const newAnimal = species.filter((specie) => specie.name === animal);
  const allAnimals = newAnimal[0].residents;
  return allAnimals.every((item) => item.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined || employeeName === null) {
    return {};
  }
  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };

  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some((person) => person.managers.includes(id));
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
  employees.push(newEmployee);
}

function countAnimals(especie) {
  // seu código aqui
  if (especie === undefined || especie === null) {
    const newObj = {};
    species.forEach((item) => {
      newObj[item.name] = item.residents.length;
    });
    return newObj;
  }
  const newAnimal = species.find((item) => item.name === especie);
  return newAnimal.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalPrice = (Adult = 0, Senior = 0, Child = 0) => {
    const total = Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
    return total;
  };

  return totalPrice(entrants.Adult, entrants.Senior, entrants.Child);
}

// function getAnimalMap(options) {
//   // seu código aqui
//   const NElocate = species.filter((item) => item.location === 'NE');
//   const NWlocate = species.filter((item) => item.location === 'NW');
//   const SElocate = species.filter((item) => item.location === 'SE');
//   const SWlocate = species.filter((item) => item.location === 'SW');
//   const newObj = {};
//   if (options === undefined) {
//      newObj.NE = [NElocate[0].name, NElocate[1].name];
//      newObj.NW = [NWlocate[0].name, NWlocate[1].name, NWlocate[2].name];
//      newObj.SE = [SElocate[0].name, SElocate[1].name];
//      newObj.SW = [SWlocate[0].name, SWlocate[1].name];
//      return newObj;
//   }
//   if (options.includeNames === true) {
//    NElocate.forEach((item) => {     
//    })
//   }
// }

function getSchedule(dayName) {
  const keys = Object.keys(hours);
  const newObj = {};

  keys.forEach((day) => {
    if (day === dayName) {
      newObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      if (day === 'Monday') {
        newObj[day] = 'CLOSED';
      }
    }
  });
  if (dayName === undefined) { 
    keys.forEach((day) => {
      newObj[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      if (day === 'Monday') {
        newObj[day] = 'CLOSED';
      }
    });
  }

  return newObj;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const newArr = [];
  const employeeFind = employees.find((employee) => employee.id === id);
  const animalFind = species.find((animal) => employeeFind.responsibleFor[0] === animal.id);
  const resp = animalFind.residents.sort((a, b) => b.age - a.age)[0];
  newArr[0] = resp.name;
  newArr[1] = resp.sex;
  newArr[2] = resp.age;
  return newArr;
}

function increasePrices(percentage) {
  const keys = Object.keys(prices);
  const pctg1 = percentage + 100;
  keys.forEach((p) => { prices[p] = parseFloat(((prices[p] * pctg1) / 100 + 0.005).toFixed(2)); });
}

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  //   getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  //   getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
