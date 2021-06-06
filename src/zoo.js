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

const { species } = data;

const { employees } = data;

const { prices } = data;

// const { hours } = data;

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const resultado = species.filter((specie) => ids.includes(specie.id));
  return resultado;
}

function getAnimalsOlderThan(animal, age) {
  const filterAnimals = species.filter((specie) => animal.includes(specie.name));
  const checksAge = filterAnimals.every((item, index) => age < item.residents[index].age);
  return checksAge;
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const emP = employees.find((em) => employeeName === em.firstName || employeeName === em.lastName);
  return emP;
}

function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
}

function isManager(id) {
  const managers = employees.map((employee) => employee.managers);
  const idIsManager = managers.some((manager, index) => manager[index] === id);
  return idIsManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specieS) {
  const everyAnimals = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  if (!specieS) return everyAnimals;
  const { residents } = species.find((specie) => specie.name === specieS);
  return residents.length;
}

function calculateEntry(entrants = { Adult: 0, Child: 0, Senior: 0 }) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const pricePerPeople = [
    prices.Adult * Adult,
    prices.Child * Child,
    prices.Senior * Senior,
  ];
  const amount = pricePerPeople.reduce((previousV, currentV) => previousV + currentV);
  return amount;
}

function getAnimalMap() {
  /*   const region = { (options)
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };
    if (options) return region; */
}

function getSchedule(dayName) {
  const infos = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return infos;
  const dayChose = Object.entries(infos).find((day) => day[0] === dayName);
  return { [dayChose[0]]: dayChose[1] };
}

function getOldestFromFirstSpecies(id) {
  const employeeId = employees.find((employee) => id.includes(employee.id));
  const specieResponsible = employeeId.responsibleFor[0];
  const animals = species.find((animal) => animal.id === specieResponsible).residents;
  const ageResidents = animals.map((resident) => resident.age);
  const ageResident = ageResidents.sort((a, b) => b - a);
  const oldResident = animals.find((animal) => animal.age === ageResident[0]);
  const infosAnimal = Object.values(oldResident);
  return [...infosAnimal];
}

function increasePrices() {
  // seu código aqui percentage
}

function getEmployeeCoverage() {
  // seu código aqui idOrName
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
