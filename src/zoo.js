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
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  const result = [];
  ids.forEach((id) => {
    species.forEach((specie) => {
      if (specie.id === id) {
        result.push(specie);
      }
    });
  });
  return result;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieName = species.find((specie) => (specie.name === animal));
  return specieName.residents.every((resident) => (resident.age >= age));
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    }
    return false;
  });
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  console.log(id);
  // seu código aqui
  return employees.some((employee) => employee.managers.some((manager) => {
    if (manager === id) {
      return true;
    }
    return false;
  }));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(specieName) {
  // seu código aqui
  if (!specieName) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  return species.find((specie) => specie.name === specieName).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) {
    return 0;
  }
  const typeEntries = Object.keys(entrants);
  let value = 0;
  typeEntries.forEach((entrance) => {
    value += (entrants[entrance] * prices[entrance]);
  }, 1);
  return value;
}

// Retorna animais categorizados por localização;
// const locationAnimalMap = () => species.reduce((acc, specie) => {
//   const specieNames = species.reduce((arrNames, specieMap) => {
//     if (specieMap.location === specie.location)arrNames.push(specieMap.name);
//     return arrNames;
//   }, []);
//   acc[specie.location] = specieNames;
//   return acc;
// }, {});

// // Nomes dos animais por localização
// const nameForLocation = () => species.reduce((acc, specie) => {
//   const arrSpecies = [];

//   acc[specie.location] = arrSpecies;
//   return acc;
// }, {});

// function getAnimalMap(options) {
//   // seu código aqui
//   if (options === undefined) {
//     return locationAnimalMap();
//   }
//   if (options.includeNames === true) {
//     return nameForLocation();
//   }
// }

// Retorna todos os dias e horários de funcionamento
const returnHours = () => {
  const weekDaysValues = Object.values(hours);
  const weekDays = Object.keys(hours);
  return weekDaysValues.reduce((acc, curr, index) => {
    if (weekDays[index] === 'Monday') {
      acc[weekDays[index]] = 'CLOSED';
    } else {
      acc[weekDays[index]] = `Open from ${curr.open}am until ${curr.close - 12}pm`;
    }
    return acc;
  }, {});
};

// Retorna horário de funcionamento de acordo com o dia passado como parâmetro
function getSchedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return returnHours();
  }
  const hoursDay = hours[dayName];
  if (hoursDay.open === 0) {
    return { [dayName]: 'CLOSED' };
  }
  return { [dayName]: `Open from ${hoursDay.open}am until ${hoursDay.close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firsSpecie = employees.reduce((acc, employee) => {
    if (id === employee.id) {
      acc.push(...employee.responsibleFor);
    }
    return acc;
  }, [])[0];
  return species.reduce((acc, specie) => {
    const sortResidents = specie.residents.sort((a, b) => b.age - a.age);
    if (firsSpecie === specie.id) {
      acc.push(...Object.values(sortResidents[0]));
    }
    return acc;
  }, []);
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  getSpeciesByIds,
  getAnimalsOlderThan,
  getEmployeeByName,
  createEmployee,
  isManager,
  addEmployee,
  countAnimals,
  calculateEntry,
  // getAnimalMap,
  getSchedule,
  getOldestFromFirstSpecies,
  // increasePrices,
  // getEmployeeCoverage,
};
