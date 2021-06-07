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
  return species.filter((animal) => ids.includes(animal.id));
}

function getAnimalsOlderThan(animalName, age) {
  const listAnimal = species.find((animal) => animal.name === animalName);
  return listAnimal.residents.every((individual) => individual.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return employees.find((individual) => {
      const { firstName, lastName } = individual;
      return firstName === employeeName || lastName === employeeName;
    });
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((individual) => individual.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  employees.push(newEmployee);
}

function countAnimals(nameSpecies) {
  if (nameSpecies) {
    const animalFind = species.find((animal) => animal.name === nameSpecies);
    return animalFind.residents.length;
  }
  const animalInfo = {};
  species.forEach((animal) => {
    animalInfo[animal.name] = animal.residents.length;
  });
  return animalInfo;
}

function calculateEntry(entrants) {
  let valorTotal = 0;
  if (entrants) {
    Object.entries(entrants).forEach(([key, value]) => {
      valorTotal += value * prices[key];
    });
  }
  return valorTotal;
}

// function getAnimalMap(options) {
//   const animalTotal = {};
//   if (options === { includeNames: true }) {
//     const residentsList = [];
//     const animalList = {};
//     species.forEach((animal) => {
//       animal.residents.forEach((resident) => {
//         residentsList.push(resident.name);
//       });
//       animalList[animal.name] = residentsList;
//       animalTotal[animal.location] += animalList;
//     });
//     return animalTotal;
//   }
//   species.forEach((animal) => {
//     if (!(animal.location in animalTotal)) {
//       animalTotal[animal.location] = [];
//     }
//     animalTotal[animal.location].push(animal.name);
//   });
//   return animalTotal;
// }

const dayList = Object.entries(hours);

const dayObjectList = () => {
  const dayFinal = {};
  dayList.forEach(([day, value]) => {
    if (value.open === 0 && value.close === 0) {
      dayFinal[day] = 'CLOSED';
    } else {
      dayFinal[day] = `Open from ${value.open}am until ${value.close - 12}pm`;
    }
  });
  return dayFinal;
};

const dayObject = (dayName) => {
  const dayFinal = {};
  dayList.forEach(([day, value]) => {
    if (day === dayName) {
      if (value.open === 0 && value.close === 0) {
        dayFinal[day] = 'CLOSED';
      } else {
        dayFinal[day] = `Open from ${value.open}am until ${value.close - 12}pm`;
      }
    }
  });
  return dayFinal;
};

function getSchedule(dayName) {
  if (dayName) {
    return dayObject(dayName);
  }
  return dayObjectList();
}

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
  getSchedule,
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
