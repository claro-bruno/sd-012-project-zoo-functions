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

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animalName, age) {
  const animal = data.species.find((specie) => specie.name === animalName);
  return animal.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  return data.employees.reduce((acc, currentValue) => {
    if (currentValue.firstName === employeeName || currentValue.lastName === employeeName) {
      return Object.assign(acc, currentValue);
    }
    return acc;
  }, {});
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  if (!species) {
    return data.species.reduce((acc, currentValue) => ({ ...acc,
      [currentValue.name]: currentValue.residents.length }), {});
  }
  return data.species.find((specie) => specie.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) {
    return 0;
  }
  const { Adult: adultPrice, Senior: seniorPrice, Child: childPrice } = data.prices;
  const { Adult: adultTot = 0, Senior: seniorTot = 0, Child: childTot = 0 } = entrants;
  return adultPrice * adultTot + seniorPrice * seniorTot + childPrice * childTot;
}

// Requisito 9

const animalMapNoParameter = (regions) => {
  regions.NE.push(...data.species
    .filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name));
  regions.NW.push(...data.species
    .filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name));
  regions.SE.push(...data.species
    .filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name));
  regions.SW.push(...data.species
    .filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name));
  return regions;
};

const animalMapInclude = (regions) => {
  regions.NE.push(...data.species
    .filter((specie) => specie.location === 'NE')
    .map((specie) => ({ [specie.name]: specie.residents
      .map((resident) => resident.name) })));
  regions.NW.push(...data.species
    .filter((specie) => specie.location === 'NW')
    .map((specie) => ({ [specie.name]: specie.residents
      .map((resident) => resident.name) })));
  regions.SE.push(...data.species
    .filter((specie) => specie.location === 'SE')
    .map((specie) => ({ [specie.name]: specie.residents
      .map((resident) => resident.name) })));
  regions.SW.push(...data.species
    .filter((specie) => specie.location === 'SW')
    .map((specie) => ({ [specie.name]: specie.residents
      .map((resident) => resident.name) })));
  return regions;
};

const animalMapSorted = (regions, sorted) => {
  if (sorted) {
    regions.NE.forEach((specie) => Object.values(specie)[0].sort());
    regions.NW.forEach((specie) => Object.values(specie)[0].sort());
    regions.SE.forEach((specie) => Object.values(specie)[0].sort());
    regions.SW.forEach((specie) => Object.values(specie)[0].sort());
  }
  return regions;
};

const sexPerRegion = (regions, region, sex) =>
  regions[region].map((specieReg) => {
    const filterResidents = Object.values(specieReg)[0]
      .filter((residentName) => {
        const residentObj = data.species.find((specieRes) => specieRes.name
   === Object.keys(specieReg)[0]).residents.find((resident) => resident.name === residentName);
        return residentObj.sex === sex;
      });
    return { [Object.keys(specieReg)[0]]: filterResidents };
  });

const animalMapSex = (regions, sex) => {
  if (sex) {
    const newReg = {
      NE: sexPerRegion(regions, 'NE', sex),
      NW: sexPerRegion(regions, 'NW', sex),
      SE: sexPerRegion(regions, 'SE', sex),
      SW: sexPerRegion(regions, 'SW', sex),
    };
    return newReg;
  }
  return regions;
};

function getAnimalMap(options) {
  const regions = data.species.reduce((acc, currentValue) =>
    Object.assign(acc, { [currentValue.location]: [] }), {});
  if (!options) return animalMapNoParameter(regions);
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    animalMapInclude(regions);
    animalMapSorted(regions, sorted);
    return animalMapSex(regions, sex);
  }
  return animalMapNoParameter(regions);
}

// function getSchedule(dayName) {
//   // seu código aqui
// }

// function getOldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function getEmployeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  calculateEntry,
  // getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};

/* newReg.NE = regions.NE.map((specieReg) => Object.values(specieReg)[0]
.filter((residentName) => {
  const residentObj = data.species.find((specieRes) => specieRes.name
 === Object.keys(specieReg)[0]).residents.find((resident) => resident.name === residentName);
  return residentObj.sex === sex;
})); */
