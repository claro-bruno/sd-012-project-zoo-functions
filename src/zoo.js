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

const {
  species,
  employees,
  prices,
  hours,
} = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  return employees.find(((employee) => employee.firstName === employeeName
    || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith,
  };
}

function isManager(id) {
  const managersIds = employees.reduce(((acc, employee) => [...acc, ...employee.managers]), []);
  const isManagerBool = managersIds.some((managerId) => managerId === id);

  return isManagerBool;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  employees.push(employee);
}

function countAnimals(animalName) {
  if (!animalName) {
    return species.reduce(((acc, specie) => {
      const { name } = specie;

      return {
        ...acc,
        [name]: specie.residents.length,
      };
    }), {});
  }

  const quantity = species.find((specie) => specie.name === animalName).residents.length;

  return quantity;
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }

  const {
    Adult = 0,
    Senior = 0,
    Child = 0,
  } = entrants;

  const {
    Adult: adultPrice,
    Senior: seniorPrice,
    Child: childPrice,
  } = prices;

  return (Child * childPrice + Senior * seniorPrice + Adult * adultPrice);
}

//  FUNCTIONS TO SOLVE getAnimalMap()

const filterBySex = (residents, sex) => {
  if (sex === 'both') {
    return residents.map((resident) => resident.name);
  }
  return residents.filter((resident) => resident.sex === sex)
    .map((resident) => resident.name);
};

const isSorted = (sorted, names) => (sorted ? names.sort() : names);

const filterAnimals = (location, { includeNames = false, sorted = false, sex = 'both' }) => {
  const speciesFiltered = species.filter((specie) => specie.location === location)
    .reduce((acc, specie) => {
      const { name, residents } = specie;
      if (includeNames) {
        const residentsName = filterBySex(residents, sex);
        return [...acc, { [name]: isSorted(sorted, residentsName) }];
      }
      return [...acc, name];
    }, []);
  return speciesFiltered;
};

function getAnimalMap(options = {}) {
  const animalsByLocation = {
    NE: filterAnimals('NE', options),
    SW: filterAnimals('SW', options),
    SE: filterAnimals('SE', options),
    NW: filterAnimals('NW', options),
  };

  return animalsByLocation;
}

//  END OF getAnimalMap()

function getSchedule(dayName) {
  if (!dayName) {
    const days = Object.keys(hours);
    return days.reduce((acc, day) => {
      if (day === 'Monday') {
        return { ...acc, [day]: 'CLOSED' };
      }
      const openCloseMsg = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`;
      return { ...acc, [day]: openCloseMsg };
    }, {});
  }

  return dayName === 'Monday' ? { [dayName]: 'CLOSED' }
    : { [dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => emp.id === id);
  const firstAnimal = species.find((specie) => specie.id === employee.responsibleFor[0]);
  const oldestAnimal = firstAnimal.residents
    .reduce((acc, resident) => (resident.age > acc.age ? resident : acc));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const pricesKeys = Object.keys(prices);
  pricesKeys.forEach((key) => {
    const price = prices[key];
    prices[key] = Math.ceil((price + (price * (percentage / 100))) * 100) / 100;
  });
}

const getAnimalsOfEmployee = (animalsId) => animalsId
  .reduce((acc, id) => {
    const animalsName = species.filter((specie) => specie.id === id)
      .reduce(((acc2, specie) => acc2 + specie.name), []);
    return [...acc, animalsName];
  }, []);

function getEmployeeCoverage(idOrName) {
  if (!idOrName) {
    return employees.reduce((acc, employee) => {
      const { firstName, lastName, responsibleFor } = employee;
      const fullName = `${firstName} ${lastName}`;
      const animalsOfEmployee = getAnimalsOfEmployee(responsibleFor);
      return {
        ...acc,
        [fullName]: animalsOfEmployee,
      };
    }, {});
  }
  const { firstName, lastName, responsibleFor } = employees.find((employee) =>
    employee.firstName === idOrName
    || employee.lastName === idOrName
    || employee.id === idOrName);
  const fullName = `${firstName} ${lastName}`;
  const animalsOfEmployee = getAnimalsOfEmployee(responsibleFor);
  return { [fullName]: animalsOfEmployee };
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
