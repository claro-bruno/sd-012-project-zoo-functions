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
const arraysOfData = data.species; // especies
const arraysOfemployee = data.employees; // empregados
function getSpeciesByIds(...ids) { 
  let idGathered = arraysOfData.filter( element => ids.find( verId  => verId === element.id));
};

function getAnimalsOlderThan(animal, age) {
  const animalName = arraysOfData.find( item => item.name === animal);
  const animalAgeVerify = animalName.residents.every(item => item.age >= age);
  console.log(`Verifica o retorno da comparação do animal com seu respectiva idade: (${animalAgeVerify})`);
  return animalAgeVerify;
};

function getEmployeeByName(employeeName) {
  if(employeeName === undefined){
    const objVazio = {};
    console.log(`Nenhum paramentro encontrado!${objVazio}`);
    return objVazio;
  }else{
    const name = arraysOfemployee.find( item => item.firstName === employeeName || item.lastName === employeeName);
    console.log(name);
    return name;
  };
};

function createEmployee(personalInfo, associatedWith) {
  const employeeCreated = {...personalInfo, ...associatedWith};
  return employeeCreated;
};

function isManager(id) {

  const managerFinder = arraysOfemployee.some( item => item.managers.find( element => element === id ));
  console.log(managerFinder);
  return managerFinder;
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
};

function countAnimals(species) {
  if (!species) {
    const allSpecies = {};
    data.species.forEach((specie) => {
      allSpecies[specie.name] = specie.residents.length;
    });
    return allSpecies;
  }
  const countSpecie = data.species.find((specie) => specie.name === species)
    .residents.length;
  return countSpecie;
};

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length < 1) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const totalPrice = (adultPrice * Adult) + (childPrice * Child) + (seniorPrice * Senior);
  return totalPrice;
};

function getAnimalMap(options) {
  const animalsMap = {};
  const neAnimalsLocale = data.species.filter((specie) => specie.location === 'NE');
  const nwAnimalsLocale = data.species.filter((specie) => specie.location === 'NW');
  const seAnimalsLocale = data.species.filter((specie) => specie.location === 'SE');
  const swAnimalsLocale = data.species.filter((specie) => specie.location === 'SW');
  if (!options || !options.includeNames) {
    return {
      NE: neAnimalsLocale.map((specie) => specie.name),
      NW: nwAnimalsLocale.map((specie) => specie.name),
      SE: seAnimalsLocale.map((specie) => specie.name),
      SW: swAnimalsLocale.map((specie) => specie.name),
    };
  }
  animalsMap.NE = neAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  animalsMap.NW = nwAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  animalsMap.SE = seAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  animalsMap.SW = swAnimalsLocale.map((specie) => ({ [specie.name]: getNames(options, specie) }));
  return animalsMap;
};

function getSchedule(dayName) {
  if (!dayName) {
    const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = data.hours;
    return {
      Tuesday: `Open from ${Tuesday.open}am until ${Tuesday.close - 12}pm`,
      Wednesday: `Open from ${Wednesday.open}am until ${Wednesday.close - 12}pm`,
      Thursday: `Open from ${Thursday.open}am until ${Thursday.close - 12}pm`,
      Friday: `Open from ${Friday.open}am until ${Friday.close - 12}pm`,
      Saturday: `Open from ${Saturday.open}am until ${Saturday.close - 12}pm`,
      Sunday: `Open from ${Sunday.open}am until ${Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
  }
  if (dayName === 'Monday') return { Monday: 'CLOSED' };
  const dayReturn = Object.entries(data.hours).find((day) => day[0] === dayName);
  return {
    [dayReturn[0]]: `Open from ${dayReturn[1].open}am until ${dayReturn[1].close - 12}pm`,
  };
};

function getOldestFromFirstSpecies(id) {
  const getFirstSpecie = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const olderAnimal = data.species.find((specie) => specie.id === getFirstSpecie)
    .residents.reduce((acc, age) => {
      if (acc.age > age.age) return acc;
      return age;
    });
  const arrayAnimal = Object.values(olderAnimal);
  return arrayAnimal;
};

function increasePrices(percentage) {
  const { Adult: adult, Child: child, Senior: senior } = data.prices;
  data.prices.Adult = Math.round((adult + adult * (percentage / 100)) * 100) / 100;
  data.prices.Child = Math.round((child + child * (percentage / 100)) * 100) / 100;
  data.prices.Senior = Math.round((senior + senior * (percentage / 100)) * 100) / 100;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    const employeeAnimals = data.employees.reduce((acc, employee) => {
      const name = `${employee.firstName} ${employee.lastName}`;
      const responsible = findResposibles(employee);
      acc[name] = responsible;
      return acc;
    }, {});
    return employeeAnimals;
  }
  const findEmployee = data.employees
    .find((employ) =>
      employ.firstName === idOrName || employ.lastName === idOrName || employ.id === idOrName);
  const employeeName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  const responsible = findResposibles(findEmployee);
  return { [employeeName]: responsible };
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
