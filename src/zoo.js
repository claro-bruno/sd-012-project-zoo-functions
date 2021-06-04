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

// const { species } = require('./data');
// const { employees } = require('./data');
const { hours } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const especies = [];
  if (ids.length === 0) {
    return ids;
  }
  if (ids.length === 1) {
    especies.push(data.species.find((specie) => specie.id === ids[0]));
    return especies;
  }
  for (let index = 0; index < ids.length; index += 1) {
    especies.push(data.species.find((specie) => specie.id === ids[index]));
  }
  return especies;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const especieAnimal = data.species.find((specie) => specie.name === animal);
  const verifyAge = Object.values(especieAnimal.residents).every((resident) => resident.age >= age);
  return verifyAge;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const nameFunc = data.employees.find((employee) => employee.firstName === employeeName);
  const lastNameFunc = data.employees.find((employee) => employee.lastName === employeeName);

  if (!nameFunc) {
    return lastNameFunc;
  }
  if (!lastNameFunc) {
    return nameFunc;
  }
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // seu código aqui
  // Método .flat visto no link https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays;
  const getManagers = (data.employees.map((employee) => employee.managers)).flat();
  const checkManagers = getManagers.some((manager) => manager === id);
  return checkManagers;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const novoFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(novoFuncionario);
}

function countAnimals(species) {
  // seu código aqui
  const animais = data.species.filter((especie) => especie.name);
  if (!species) {
    const totalAnimais = {};
    for (let i = 0; i < animais.length; i += 1) {
      totalAnimais[animais[i].name] = animais[i].residents.length;
    }
    return totalAnimais;
  }
  const especieInserida = data.species.find((animal) => animal.name === species);
  return especieInserida.residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arrayEntrants = Object.entries(entrants);
  const soma = arrayEntrants.reduce((acc, pessoa) => acc + (data.prices[pessoa[0]] * pessoa[1]), 0);
  return soma;
}

function getAnimalMap() {
  // seu código aqui
// options
}

function getSchedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return {
      Tuesday: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close - 12}pm`,
      Wednesday: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close - 12}pm`,
      Thursday: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close - 12}pm`,
      Friday: `Open from ${hours.Friday.open}am until ${hours.Friday.close - 12}pm`,
      Saturday: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close - 12}pm`,
      Sunday: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close - 12}pm`,
      Monday: 'CLOSED',
    };
  }
  if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  const info = `Open from ${hours[dayName].open}am until ${(hours[dayName].close) - 12}pm`;
  return { [dayName]: info };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = data.employees.filter((employee) => employee.id === id);
  const firstSpecie = funcionario[0].responsibleFor[0];
  const speciesObj = (data.species.filter((specie) => specie.id === firstSpecie));
  const { residents } = speciesObj[0];
  const olderAnim = residents.reduce((older, animal) => (animal.age > older.age ? animal : older));
  const { age, sex, name } = olderAnim;
  const olderAnimalArray = [name, sex, age];
  return olderAnimalArray;
}

function increasePrices(percentage) {
  // seu código aqui
  const { Adult, Senior, Child } = data.prices;
  const valorAdulto = (Adult + (Adult * (percentage / 100)));
  const valorSenior = (Senior + (Senior * (percentage / 100)));
  const valorCrianca = (Child + (Child * (percentage / 100)));
  // Forma de arredondar as casas decimais do resultado final vista no link https://bit.ly/3g2wSFr;
  data.prices.Adult = Math.round(valorAdulto * 100) / 100;
  data.prices.Senior = Math.round(valorSenior * 100) / 100;
  data.prices.Child = Math.round(valorCrianca * 100) / 100;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    const objetoFinal = data.employees.reduce((acc, employee) => {
      const speciesNames = employee.responsibleFor.map((id) => {
        const objSpecie = data.species.find((specie) => specie.id === id);
        return objSpecie.name;
      });
      acc[`${employee.firstName} ${employee.lastName}`] = speciesNames;
      return acc;
    }, {});
    return objetoFinal;
  }
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
