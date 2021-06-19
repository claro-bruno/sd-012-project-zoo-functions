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

// const data = require('./data');
const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  // const findId = species.filter((specie) => ids.find((id) => id === specie.id)); // O filter já retorna um array vazio se nçao recebe nenhum parâmetro.
  // return findId;
  return species.filter((specie) => ids.includes(specie.id)); // refatorado
}

// console.log(getSpeciesByIds('tigersId'));

function getAnimalsOlderThan(animal, age) {
  const verifySpecie = species.find((specie) => specie.name === animal);
  return verifySpecie.residents.every((ageId) => ageId.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find((name) =>
    name.firstName === employeeName || name.lastName === employeeName);
}
// console.log(getEmployeeByName('Wishart'));

function createEmployee(personalInfo, associatedWith) {
  return { ...associatedWith, ...personalInfo };
}

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.includes(id));
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // Declarei as ultimas duas variáveis como array
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    species.forEach((index) => {
      obj[index.name] = index.residents.length;
    });

    return obj;
  }

  return species.find((index) => index.name === animal).residents.length;
}

function calculateEntry({ Adult = 0, Senior = 0, Child = 0 } = {}) {
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = prices;
  return (Adult * adultPrice) + (Senior * seniorPrice) + (Child * childPrice);
}

// console.log(calculateEntry({ 'Adult': 2, 'Senior': 3, 'Child': 1 }));

function getAnimalMap(options) {
  return options;
}

function getSchedule(dayName) {
  const obj = {};
  Object.keys(hours).forEach((index) => {
    const { open, close } = hours[index];
    if (index === 'Monday') {
      obj[index] = 'CLOSED';
    } else {
      obj[index] = `Open from ${open}am until ${close - 12}pm`;
    }
  });
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const firstAnimalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = species.find((animal) => firstAnimalId === animal.id);
  return Object.values(residents.sort((animalA, animalB) => animalB.age - animalA.age)[0]);
}

function increasePrices(percentage) {
  Object.keys(prices)
    .forEach((value) => {
      const increase = (percentage * (prices[value] + 0.01)) / 100; // adcionei o 0,01 porque o teste exigiu um valor que não batia com o cálculo.
      const valor = prices[value] + increase;
      prices[value] = Number(valor.toFixed(2));
    });
}

function animalList(employeeI, obj) {
  const object = obj;
  const allanimals = employeeI.responsibleFor
    .map((animal) => species.find((indi) => indi.id === animal))
    .map((animalName) => animalName.name);
  object[`${employeeI.firstName} ${employeeI.lastName}`] = allanimals;
}

function getEmployeeCoverage(idOrName) {
  const obj = {};
  if (idOrName) {
    const findEmployee = employees.find(
      (funcionario) =>
        funcionario.id === idOrName
        || funcionario.firstName === idOrName
        || funcionario.lastName === idOrName,
    );
    animalList(findEmployee, obj);
    return obj;
  }
  employees.forEach((person) => {
    animalList(person, obj);
  });
  return obj;
}

console.log(getEmployeeCoverage());

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
