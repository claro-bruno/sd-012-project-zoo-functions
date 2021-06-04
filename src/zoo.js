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

const { hours, species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const speciesEncontr = (id) => data.species.find((especie) => id === especie.id);
  const specieIgual = ids.map(speciesEncontr);
  return specieIgual;
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((especie) => especie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species2) {
  if (!species2) {
    const objSpecie = {};
    data.species.forEach((item) => { objSpecie[item.name] = item.residents.length; });
    return objSpecie;
  }
  return data.species.find((key) => key.name === species2).residents.length;
}

function calculateEntry(entrants = 0) {
  if (!entrants) return entrants;
  let total = 0;
  const keysEntries = Object.keys(entrants); // cria array com as chaves do objeto
  keysEntries.forEach((key) => {
    if (key === 'Adult') {
      total += entrants[key] * data.prices.Adult;
    } else if (key === 'Child') {
      total += entrants[key] * data.prices.Child;
    } else {
      total += entrants[key] * data.prices.Senior;
    }
  });
  return total;
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  /** Consultei o repositório de Caio Takeshi para resolver esta parte:
   * link: https://github.com/tryber/sd-012-project-zoo-functions/pull/11/files
   */
  const objectAll = {};
  Object.keys(hours).forEach((chave) => {
    if (hours[chave].close !== 0) {
      objectAll[chave] = `Open from ${hours[chave].open}am until ${hours[chave].close - 12}pm`;
    } else {
      objectAll[chave] = 'CLOSED';
    }
  });
  if (!dayName) return objectAll;
  return { [dayName]: objectAll[dayName] };
}

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((item) => item.id === id); // encontra o primeiro empregado com o mesmo id dado no parâmetro
  const animalId = employee.responsibleFor.find((item) => item); // encontra o primeiro animal da lista responsibleFor de cada empregado. (o nome do animal corresponde ao id)
  const arrayAnimaInfo = data.species.find((specie) => specie.id === animalId); // encontra o primeiro objeto/animal e suas propriedades através do mesmo id do primeiro animal que está na lista responsibleFor dos empregados. (não vem em formato de array, só traz o elemente, que é um objeto)
  const arrayAges = arrayAnimaInfo.residents.map(({ age }) => age); // traz um array só com as idades. Acessa o objeto arrayAnimalInfo e nele acessa a chave residents que contém a idade.
  const findOldest = arrayAnimaInfo.residents // parte que acessa o objeto inteiro e, dentro dele, acessa a chave/objeto residentes que contém as chaves name, sex, age. residents é um objeto com as informações de cada espécie de animal.
    .find(({ age }) => age === Math.max(...arrayAges)); // usa o find para trazer o objeto cujo age seja o maior na array de idades arrayAges. Usar apenas Math.max(arrayAges) retorna NaN, impossibilitando encontrar o maior. Spread foi solicitado pelo lint.
  return Object.values(findOldest); // retorna os valores do objeto findOldest em um array.
}

function increasePrices(percentage) {
  const pricesValues = Object.values(data.prices);
  const callback = (preco) => Math.round(preco * (1 + percentage / 100) * 100) / 100;
  const pricesIncrease = pricesValues.map(callback);
  const arrayToNumber = pricesIncrease.map((item) => Number(item));
  const pricesKeys = Object.keys(data.prices);
  data.prices = {};
  pricesKeys.forEach((item, index) => {
    data.prices[item] = arrayToNumber[index];
  });
  return data.prices;
}

const responsibleFor = () => {
  const allEmployess = data.employees.reduce((acc, employee) => { // acessar objeto com dados do funcionário (first name, last name, responsabile)
    const animalId = employee.responsibleFor;
    const speciesMap = animalId.map((idSpecie) => { // formar lista com o nome das espécies pelas quais cada profissional é responsábel
      const filterSpecies = species.find((specie) => specie.id === idSpecie); // encontrar a espécie pelo id
      return filterSpecies.name;
    });
    acc[`${employee.firstName} ${employee.lastName}`] = speciesMap;
    return acc;
  }, {});
  return allEmployess;
};

function getEmployeeCoverage(idOrName) {
  if (!idOrName) return responsibleFor();
  return data.employees.reduce((acc, employee) => {
    if (idOrName === employee.firstName
      || idOrName === employee.lastName
      || idOrName === employee.id) {
      const animalId = employee.responsibleFor;
      const speciesMap = animalId.map((idSpecie) => { // formar lista com o nome das espécies pelas quais cada profissional é responsábel
        const filterSpecies = species.find((specie) => specie.id === idSpecie); // encontrar a espécie pelo id
        return filterSpecies.name;
      });
      acc[`${employee.firstName} ${employee.lastName}`] = speciesMap;
    }
    return acc;
  }, {});
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
