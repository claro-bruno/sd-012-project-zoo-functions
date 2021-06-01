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
  // seu código aqui
  let speciesFiltred = [];
  ids.forEach((id) => {
    const specieFiltred = data.species.filter((specie) => specie.id === id);
    speciesFiltred = [...speciesFiltred, ...specieFiltred];
  });
  return speciesFiltred;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = data.species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName = '') {
  // seu código aqui
  const employeFound = data.employees.find(
    (employe) =>
      employe.firstName === employeeName || employe.lastName === employeeName,
  );
  if (employeFound === undefined) {
    return {};
  }
  return employeFound;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newEmploye = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmploye;
}

function isManager(id) {
  // seu código aqui
  let managerList = [];
  data.employees.forEach((employe) => {
    managerList = [...managerList, ...employe.managers];
  });
  return managerList.some((manager) => manager === id);
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  const newEmploye = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmploye);
}

function countAnimals(species = '') {
  // seu código aqui
  const animals = {};
  data.species.forEach((animal) => {
    animals[animal.name] = animal.residents.length;
  });
  if (species === '') {
    return animals;
  }
  return animals[species];
}

function calculateEntry({ Adult = 0, Child = 0, Senior = 0 } = 0) {
  // seu código aqui
  const totalPrice = Adult * data.prices.Adult
    + Child * data.prices.Child
    + Senior * data.prices.Senior;
  return totalPrice;
}

// function getAnimalMap() {
//   // seu código aqui
//   const animalMap = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   data.species.forEach((animal) => {
//     switch (animal.location) {
//       case 'NE':
//         animalMap.NE = [...animalMap.NE, animal.name];
//         break;
//       case 'NW':
//         animalMap.NW = [...animalMap.NW, animal.name];
//         break;
//       case 'SE':
//         animalMap.SE = [...animalMap.SE, animal.name];
//         break;
//       case 'SW':
//         animalMap.SW = [...animalMap.SW, animal.name];
//         break;
//       default:
//         console.log('deu ruim');
//     }
//   });
//   return animalMap;
// }

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
  // getAnimalMap,
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
