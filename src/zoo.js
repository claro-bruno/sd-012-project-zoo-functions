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
// const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((elem) => ids.find((id) => elem.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return species.find((elem) => elem.name === animal)
    .residents.every((element) => element.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? employees.find((elem) =>
    elem.firstName === employeeName || elem.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((elm) => elm.managers.find((man) => man === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const addEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(addEmp);
}

function countAnimals(speciesName) {
  return !speciesName
    ? species.reduce((obj, elm) => ({ ...obj, [elm.name]: elm.residents.length }), {})
    : species.find((elem) => elem.name === speciesName).residents.length;
}

function calculateEntry(entrants = 0) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  let sum = 0;
  sum += Adult * prices.Adult;
  sum += Child * prices.Child;
  sum += Senior * prices.Senior;
  return sum;
}

function getAnimalName(sorted, sex, local) {
  return local.reduce((acc, loc) => ({
    ...acc,
    [loc]: species.filter((sElm) => sElm.location === loc).map((elm) => {
      let { residents } = elm;
      if (sex) {
        residents = residents.filter((el) => el.sex === sex);
      }
      residents = residents.map((resid) => resid.name);
      if (sorted) {
        residents.sort();
      }
      return { [elm.name]: residents };
    }),
  }), {});
}

function getAnimalMap(options) {
  const local = [...new Set(species.map((elem) => elem.location))];
  if (!options || !options.includeNames) {
    return local.reduce((acc, loc) => ({
      ...acc,
      [loc]: species.filter((sElm) => sElm.location === loc).map((filtSpec) => filtSpec.name),
    }), {});
  }

  const { includeNames, sorted = false, sex = false } = options;
  if (includeNames) {
    return getAnimalName(sorted, sex, local);
  }
}

function getSchedule(dayName) {
  if (dayName) {
    const { open, close } = hours[dayName];
    if (dayName === 'Monday') {
      return ({ [dayName]: 'CLOSED' });
    }
    return ({ [dayName]: `Open from ${open}am until ${close - 12}pm` });
  }
  // Maneira 1
  // const teste = Object.keys(hours).map((day) => ({ [day]: (hours[day].open === 0) ? 'CLOSED' : `Open from ${hours[day].open}am until ${hours[day].close - 12}pm` })).reduce((elm, cur) => ({...elm, ...cur}) ,{})
  // return teste

  // Maneira 2
  const testa = {};
  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];
    testa[day] = day === 'Monday' ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
  });
  return testa;
}

function getOldestFromFirstSpecies(id) {
  const firstAnimalID = employees.find((anim) => anim.id === id).responsibleFor[0];
  const animalArray = species.find((old) => old.id === firstAnimalID).residents;
  const animalAge = animalArray.reduce((age, curr) => {
    let value = age;
    if (curr.age > value) {
      value = curr.age;
    } else {
      return value;
    }
    return value;
  }, 0);
  const result = Object.values(animalArray.find((elem) => elem.age === animalAge));
  return result;
}

function increasePrices(percentage) {
  Object.keys(prices).forEach((elem) => {
    prices[elem] *= ((percentage + 100) / 100);
    prices[elem] = Math.round(prices[elem] * 100) / 100;
  });
  return prices;
}

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, empName) => {
      const { responsibleFor } = empName;
      const NewName = `${empName.firstName} ${empName.lastName}`;
      return { ...acc,
        [NewName]: responsibleFor.map((animalID) =>
          species.find((specName) => specName.id === animalID).name) };
    }, {});
  }
  const empSelect = employees.find((emp) =>
    emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName);
  const selecName = `${empSelect.firstName} ${empSelect.lastName}`;
  return { [selecName]: empSelect.responsibleFor.map((animalID) =>
    species.find((speciesName) => speciesName.id === animalID).name) };
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
