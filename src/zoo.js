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
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  const animalObj = species.find((specie) => specie.name === animal);
  return animalObj.residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) {// seu código aqui
    return {};
  }
  return employees.find(((employee) => employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return {
    ...personalInfo,
    ...associatedWith
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
      const {
        name
      } = specie;
      return {
        ...acc,
        [name]: specie.residents.length,
      };
    }), {});
  };

  const quantity = species.find((specie) => specie.name === animalName).residents.length;
  return quantity;
}

function calculateEntry(entrants) {
  if(!entrants){
    return 0;
  };
  const {Adult = 0, Senior = 0, Child = 0} = entrants;
  const {
    Adult: adultPrice,
    Senior: seniorPrice,
    Child: childPrice,
  } = prices;

  return (Child * childPrice + Senior * seniorPrice + Adult * adultPrice);
}

//FUNCTIONS TO SOLVE getAnimalMap()

const onlyOneSex = (residents, sex) => residents.filter((resident) => resident.sex === sex).map((resident) => resident.name);

const getSpeciesByLocation = (location, { includeNames = false, sorted = false, sex = 'both' }) => {
  const speciesFiltered = species.filter((specie) => specie.location === location).reduce((acc, specie) => {
    const { name, residents } = specie;
    if (includeNames){
      const residentsName = sex === 'both' ? residents.map((resident) => resident.name) : onlyOneSex(residents, sex);
      return sorted ? [...acc, { [name]: residentsName.sort() }] : [...acc, { [name]: residentsName }];
    }
      return [...acc, name];
  }, []);
  return speciesFiltered;
}

function getAnimalMap(options = {}) {
  const animalsByLocation = {
    NE: getSpeciesByLocation('NE', options),
    SW: getSpeciesByLocation('SW', options),
    SE: getSpeciesByLocation('SE', options),
    NW: getSpeciesByLocation('NW', options),
  };

  return animalsByLocation;
}

//END OF getAnimalMap()

function getSchedule(dayName) {
  if (!dayName){
    const days = Object.keys(hours);
    return days.reduce((acc, day) => {
     if(day === 'Monday'){
       return {...acc, [day]: 'CLOSED'};
     }
     return {...acc, [day]: `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`};
   }, {});
  };
  
  return dayName === 'Monday' ? {[dayName]: 'CLOSED'} : {[dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`};
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
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
