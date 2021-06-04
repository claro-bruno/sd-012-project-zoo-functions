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

const { species, employees, prices, hours } = data;

const getSpeciesByIds = (...ids) => ids.map((id) =>
  species.find((specie) => specie.id === id));

const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal)
    .residents.map((ano) => ano.age).every((idade) => idade >= age);

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => {
  const novoFuncionario = {};
  Object.assign(novoFuncionario, personalInfo, associatedWith);
  return novoFuncionario;
};

const isManager = (ids) => employees.some((employee) =>
  employee.managers.find((id) => ids === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const createFuncionario = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(createFuncionario);
};

const countAnimals = (especies) => {
  if (especies === undefined) {
    const names = species.map((specie) => specie.name);
    const quantidades = species.map((specie) => specie.residents.length);
    const nameQuantidade = {};
    names.forEach((key, index) => {
      nameQuantidade[key] = quantidades[index];
    }); /* referência: https://stackoverflow.com/questions/39127989/creating-a-javascript-object-from-two-arrays */
    return nameQuantidade;
  }
  return species.find((specie) => specie.name === especies).residents.length;
};

const calculateEntry = ({ Adult = 0, Senior = 0, Child = 0 } = 0) => {
  const { Adult: pricesAdult, Senior: pricesSenior, Child: pricesChild } = prices;
  const soma = ((pricesAdult * (Adult))
    + (pricesSenior * (Senior))
    + (pricesChild * (Child)));
  return soma;
};

const optionUndefined = () => {
  const acharAnimaisLocalization = (localization) => species.filter((specie) =>
    specie.location === localization).map((specie2) => specie2.name);
  const localizations = ['NE', 'NW', 'SE', 'SW'];
  const resultado = {};
  const tipoAnimais = localizations.map((localization) => acharAnimaisLocalization(localization));
  localizations.forEach((key, index) => {
    resultado[key] = tipoAnimais[index];
  });
  return resultado;
};

const animaisSexSortTrueFalse = (localization, index, sex = undefined, sorted = undefined) => {
  let acharAnimaisSexTrueFalse;
  if (sex === undefined) {
    acharAnimaisSexTrueFalse = species.filter((specie) => specie.location === localization)
      .map((specie2) => specie2.residents.map((name) => name.name))[index];
  } else {
    acharAnimaisSexTrueFalse = species.filter((specie) => specie.location === localization)
      .map((specie2) => (specie2.residents.filter((specie) => specie.sex === sex)
        .map((name) => name.name)))[index];
  }
  let ordemTrueFalse;
  if (sorted === true) {
    ordemTrueFalse = acharAnimaisSexTrueFalse.sort();
  } else {
    ordemTrueFalse = acharAnimaisSexTrueFalse;
  }
  return ordemTrueFalse;
};

const indexLocalization = (localizations) => species.map((localization) => localization.location)
  .filter((loc) => loc === localizations);

const animaisLocalization = (localization, index) => species.filter((specie) =>
  specie.location === localization).map((specie2) => specie2.name)[index];

const objetosTiposNames = (localization, index, sex, sorted) => {
  const objeto = {
    [animaisLocalization(localization, index)]:
      animaisSexSortTrueFalse(localization, index, sex, sorted),
  };
  return objeto;
};

const arrayTiposNames = (localization, sex, sorted) => {
  const array = [];
  const localizations = indexLocalization(localization);
  for (let index = 0; index < localizations.length; index += 1) {
    array.push(objetosTiposNames(localization, index, sex, sorted));
  }
  return array;
};

const getAnimalMap = (options = undefined) => {
  if (options === undefined || options.includeNames === undefined) {
    return optionUndefined();
  }
  const { sex = undefined, sorted = undefined } = options;
  const localizations = ['NE', 'NW', 'SE', 'SW'];
  const objeto = {};
  localizations.forEach((key) => {
    objeto[key] = arrayTiposNames(key, sex, sorted);
  });
  return objeto;
};

const getSchedule = (dayName) => {
  let resultado = {};
  if (dayName === undefined) {
    const keys = Object.keys(hours);
    const values = Object.values(hours);
    keys.forEach((key, index) => {
      resultado[key] = `Open from ${values[index].open}am until ${values[index].close - 12}pm`;
      resultado.Monday = 'CLOSED';
    });
  } else if (dayName === 'Monday') {
    resultado = { Monday: 'CLOSED' };
  } else {
    resultado = { [dayName]:
    `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
  }
  return resultado;
};

const getOldestFromFirstSpecies = (id) => {
  const idAnimal = employees.find((employee) => employee.id === id)
    .responsibleFor.find((animal) => animal);
  const sortAnimal = species.find((specie) => specie.id === idAnimal)
    .residents.filter((nameAnimal) => nameAnimal).sort((a, b) => b.age - a.age);
  return Object.values(sortAnimal[0]);
};

const increasePrices = (percentage) => {
  const keys = Object.keys(prices);
  const values = Object.values(prices).map((value) =>
    Math.round((value + (value * percentage) / 100) * 100) / 100); /* https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary */
  keys.forEach((key, index) => {
    prices[key] = values[index];
  });
  return prices;
};

const funcaoObjeto = (parameters = undefined) => {
  const idEName = parameters;
  const funcionárioFind = employees.find((employee) =>
    employee.id === idEName
    || employee.firstName === idEName
    || employee.lastName === idEName);
  const animaisFilter = species.filter((animais) => animais);
  const acharAnimais = funcionárioFind.responsibleFor.map((idName) =>
    animaisFilter.filter((animal) => animal.id === idName))
    .map((name) => name.map((name2) => name2.name)).join(' ').split(' ');
  const fullName = [`${funcionárioFind.firstName} ${funcionárioFind.lastName}`];
  const resultado = {};
  fullName.forEach((key) => {
    resultado[key] = acharAnimais;
  });
  return resultado;
};

const getEmployeeCoverage = (idOrName) => {
  if (idOrName === undefined) {
    const listaGeral = {};
    employees.map((funcionários) =>
      Object.assign(listaGeral, funcaoObjeto(funcionários.firstName)));
    return listaGeral;
  }
  return funcaoObjeto(idOrName);
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
