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
  const species = ids.map((id) => (data.species.find((speciesId) => speciesId.id === id)));
  return species;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.species.find((species) => species.name === animal);
  return animals.residents.every((resident) => resident.age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const employeeFirstName = data.employees.find(({ firstName }) => (firstName === employeeName));
  const employeeLastName = data.employees.find(({ lastName }) => (lastName === employeeName));
  if (employeeFirstName === undefined && employeeLastName === undefined) {
    return {};
  }
  if (employeeFirstName !== undefined) {
    return employeeFirstName;
  }
  return employeeLastName;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(({ managers }) => managers.some((managerId) => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  // seu código aqui
  const animals = data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length; return acc;
  }, {});
  if (typeof (species) === 'string') {
    return animals[species];
  }
  return animals;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  const { Adult: adultPrice, Child: childPrice, Senior: seniorPrice } = data.prices;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const total = (Adult * adultPrice) + (Child * childPrice) + (Senior * seniorPrice);
  return total;
}

function getAnimalByRegion() {
  const animalsByRegion = data.species.reduce((acc, current) => {
    const arrayOfSpecies = data.species.filter((species) => species.location === current.location);
    const speciesByRegion = arrayOfSpecies.reduce((counter, currentValue) => {
      counter.push(currentValue.name);
      return counter;
    }, []);
    acc[current.location] = speciesByRegion;
    return acc;
  }, {});
  return animalsByRegion;
}

function includeNamesMap() {
  const animalsWithNames = data.species.reduce((acc, current) => {
    const arrayOfSpecies = data.species.filter((species) => species.location === current.location);
    const namesOfSpecies = arrayOfSpecies.reduce((counter, currentValue) => {
      counter.push({
        [currentValue.name]: currentValue.residents.reduce((acc2, current2) => {
          acc2.push(current2.name);
          return acc2;
        }, []),
      });
      return counter;
    }, []);
    acc[current.location] = namesOfSpecies;
    return acc;
  }, {});
  return animalsWithNames;
}

function sortBySex(sex) {
  const animalsBySex = data.species.reduce((acc, current) => {
    const arrayOfSpecies = data.species.filter((species) => species.location === current.location);
    const namesOfSpecies = arrayOfSpecies.reduce((counter, currentValue) => {
      counter.push({
        [currentValue.name]: currentValue.residents.filter((animal) => animal.sex === sex)
          .reduce((acc2, current2) => {
            acc2.push(current2.name);
            return acc2;
          }, []),
      });
      return counter;
    }, []);
    acc[current.location] = namesOfSpecies;
    return acc;
  }, {});
  return animalsBySex;
}

function sortAnimals(map) {
  const regions = Object.keys(map);
  regions.forEach((region) => {
    map[region].forEach((animal) => {
      const species = Object.keys(animal);
      animal[species[0]].sort();
    });
  });
}

function getAnimalMap(options = 0) {
  // seu código aqui
  const { includeNames, sorted, sex } = options;
  let animalMap = getAnimalByRegion();
  // sortAnimals(animalMap)
  if (includeNames === true) {
    animalMap = includeNamesMap();
    if (sex !== undefined) {
      animalMap = sortBySex(sex);
    }
    if (sorted === true) {
      sortAnimals(animalMap);
    }
  }
  return animalMap;
}

function getSchedule(dayName) {
  // seu código aqui
  const days = Object.keys(data.hours);
  const schedule = days.reduce((acc, curr) => {
    acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
    return acc;
  }, {});
  schedule.Monday = 'CLOSED';
  if (days.includes(dayName) === true) {
    return { [dayName]: schedule[dayName] };
  }
  return schedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const speciesId = data.employees.find((employee) => employee.id === id).responsibleFor;
  const animals = getSpeciesByIds(...speciesId);
  const residents = animals.reduce((acc, curr) => {
    acc.push(...curr.residents);
    return acc;
  }, []);
  const getOldest = residents.reduce((acc, curr) => ((curr.age > acc.age) ? curr : acc));
  return Object.values(getOldest);
}

function increasePrices(percentage) {
  // seu código aqui
  const entrance = Object.keys(data.prices);
  entrance.forEach((type) => {
    data.prices[type] *= ((100 + percentage) / 100);
    data.prices[type] = Math.round(data.prices[type] * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  let employees = data.employees.reduce((acc, { id, firstName, lastName }) => {
    const speciesId = data.employees.find((employee) => employee.id === id).responsibleFor;
    const animals = getSpeciesByIds(...speciesId);
    const residents = animals.reduce((count, curr) => { count.push(curr.name); return count; }, []);
    acc[`${firstName} ${lastName}`] = residents;
    return acc;
  }, {});
  const employeesNames = Object.keys(employees);
  let employeeName;
  if (data.employees.some((employee) => employee.id === idOrName)) {
    employeeName = data.employees.find((element) => element.id === idOrName).firstName;
  }
  employeesNames.forEach((name) => {
    if (name.includes(idOrName) || name.includes(employeeName)) {
      employees = { [name]: employees[name] };
    }
  });
  return employees;
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
