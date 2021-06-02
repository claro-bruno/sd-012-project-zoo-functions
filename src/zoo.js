/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
// const assert = require('assert');
/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');

function getSpeciesByIds(...ids) {
  // OK
  // seu código aqui
  // if (!ids.length) return [];
  // const getSpeciesById = (id, index) => {
  //   if (data.species[index].id === id) return data.species[index];
  // };
  // return ids.map(getSpeciesById);
  return ids.reduce((acc, id, index) => {
    if (data.species[index].id === id) {
      acc.push(data.species[index]);
    }
    return acc;
  }, []);
}

// const actual = getSpeciesByIds();
// const expected = [];
// assert.deepStrictEqual(actual, expected);

// const actual2 = getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
// const expected2 = [
//   {
//     id: '0938aa23-f153-4937-9f88-4858b24d6bce',
//     name: 'lions',
//     popularity: 4,
//     location: 'NE',
//     residents: [
//       { name: 'Zena', sex: 'female', age: 12 },
//       { name: 'Maxwell', sex: 'male', age: 15 },
//       { name: 'Faustino', sex: 'male', age: 7 },
//       { name: 'Dee', sex: 'female', age: 14 },
//     ],
//   },
// ];
// assert.deepStrictEqual(actual2, expected2);

// const actual3 = getSpeciesByIds(
//   '0938aa23-f153-4937-9f88-4858b24d6bce',
//   'e8481c1d-42ea-4610-8e11-1752cfc05a46'
// );
// const expected3 = [
//   {
//     id: '0938aa23-f153-4937-9f88-4858b24d6bce',
//     name: 'lions',
//     popularity: 4,
//     location: 'NE',
//     residents: [
//       { name: 'Zena', sex: 'female', age: 12 },
//       { name: 'Maxwell', sex: 'male', age: 15 },
//       { name: 'Faustino', sex: 'male', age: 7 },
//       { name: 'Dee', sex: 'female', age: 14 },
//     ],
//   },
//   {
//     id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
//     name: 'tigers',
//     popularity: 5,
//     location: 'NW',
//     residents: [
//       { name: 'Shu', sex: 'female', age: 19 },
//       { name: 'Esther', sex: 'female', age: 17 },
//     ],
//   },
// ];
// assert.deepStrictEqual(actual3, expected3);

function getAnimalsOlderThan(animal, age) {
  // OK
  // seu código aqui
  return data.species
    .find(({ name }) => name === animal)
    .residents.every((resident) => resident.age > age);
}

// let actual4 = getAnimalsOlderThan('otters', 7);
// let expected4 = true;
// assert.deepStrictEqual(actual4, expected4);

// actual4 = getAnimalsOlderThan('penguins', 10);
// expected4 = false;
// assert.deepStrictEqual(actual4, expected4);

function getEmployeeByName(employeeName) {
  // OK
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
}

// const actual5 = getEmployeeByName();
// const expected5 = {};
// assert.deepStrictEqual(actual5, expected5);

// const actual6 = getEmployeeByName('Emery');
// const expected6 = {
//   id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
//   firstName: 'Emery',
//   lastName: 'Elser',
//   managers: ['9e7d4524-363c-416a-8759-8aa7e50c0992'],
//   responsibleFor: [
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//     'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//   ],
// };
// assert.deepStrictEqual(actual6, expected6);

// const actual7 = getEmployeeByName('Wishart');
// const expected7 = {
//   id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
//   firstName: 'Wilburn',
//   lastName: 'Wishart',
//   managers: [
//     '0e7b460e-acf4-4e17-bcb3-ee472265db83',
//     'fdb2543b-5662-46a7-badc-93d960fdc0a8',
//   ],
//   responsibleFor: [
//     '78460a91-f4da-4dea-a469-86fd2b8ccc84',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ],
// };
// assert.deepStrictEqual(actual7, expected7);

function createEmployee(personalInfo, associatedWith) {
  // OK
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

// const expected8 = {
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ]
// };

// const personalInfo = {
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const associatedWith = {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ]
// };
// assert.deepStrictEqual(createEmployee(personalInfo, associatedWith), expected8);

function isManager(id) {
  // OK
  // seu código aqui;
  return data.employees.some((employee) => employee.managers.includes(id));
}

// let actual9 = isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
// let expected9 = false;
// assert.deepStrictEqual(actual9, expected9);

// actual9 = isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');
// expected9 = true;
// assert.deepStrictEqual(actual9, expected9);

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  // seu código aqui
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

// addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe');
// console.log(data.employees[8]);
// console.log(data.employees.length);
// assert.strictEqual(data.employees.length, 9);

// let lastEmployee = data.employees[8];
// assert.strictEqual(lastEmployee.id, '39800c14-4b76-454a-858d-2f8d168146a7');
// assert.strictEqual(lastEmployee.firstName, 'John');
// assert.strictEqual(lastEmployee.lastName, 'Doe');
// assert.deepStrictEqual(lastEmployee.managers, []);
// assert.deepStrictEqual(lastEmployee.responsibleFor, []);

// addEmployee('4141da1c-a6ed-4cf7-90c4-99c657ba4ef3', 'Jane', 'Doe',
//   [
//     '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//     'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//   ],
//   [
//     'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//     '210fcd23-aa7b-4975-91b7-0230ebb27b99',
//   ]);
// assert.strictEqual(data.employees.length, 10);

// lastEmployee = data.employees[9];
// assert.strictEqual(lastEmployee.id, '4141da1c-a6ed-4cf7-90c4-99c657ba4ef3');
// assert.strictEqual(lastEmployee.firstName, 'Jane');
// assert.strictEqual(lastEmployee.lastName, 'Doe');
// assert.deepStrictEqual(lastEmployee.managers,
//   [
//     '546fe3d4-2d81-4bb4-83a7-92d5b7048d17',
//     'a67a36ee-3765-4c74-8e0f-13f881f6588a',
//   ]);
// assert.deepStrictEqual(lastEmployee.responsibleFor, [
//   'ee6139bf-b526-4653-9e1e-1ca128d0ad2e',
//   '210fcd23-aa7b-4975-91b7-0230ebb27b99',
// ]);

// assert.strictEqual(data.employees.length, 10);

function countAnimals(species) {
  // OK
  // seu código aqui
  if (!species) {
    return data.species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === species).residents.length;
}

// const expected10 = {
//   'lions': 4,
//   'tigers': 2,
//   'bears': 3,
//   'penguins': 4,
//   'otters': 4,
//   'frogs': 2,
//   'snakes': 2,
//   'elephants': 4,
//   'giraffes': 6
// };
// const actual10 = countAnimals();
// assert.deepStrictEqual(actual10, expected10);

// let actual11 = countAnimals('lions');
// let expected11 = 4;
// assert.deepStrictEqual(actual11, expected11);

// actual11 = countAnimals('snakes');
// expected11 = 2;
// assert.deepStrictEqual(actual11, expected11);

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants === {}) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (
    Adult * data.prices.Adult
    + Child * data.prices.Child
    + Senior * data.prices.Senior
  );
}

// assert.strictEqual(calculateEntry(), 0);
// assert.strictEqual(calculateEntry({}), 0);
// let entrants = { Adult: 2, Child: 3, Senior: 1 };
// let actual11 = calculateEntry(entrants);
// assert.strictEqual(actual11, 187.94);

// entrants = { Adult: 1 };
// actual11 = calculateEntry(entrants);
// assert.strictEqual(actual11, 49.99);

// entrants = { Senior: 1 };
// actual11 = calculateEntry(entrants);
// assert.strictEqual(actual11, 24.99);

// entrants = { Child: 1 };
// actual11 = calculateEntry(entrants);
// assert.strictEqual(actual11, 20.99);

// entrants = { Child: 1, Senior: 1 };
// actual11 = calculateEntry(entrants);
// assert.strictEqual(actual11, 45.98);

function getAnimalSpeciesByLocationAndSex(species, location, sex) {
  return species
    .filter((animal) => animal.location === location)
    .filter((animal, index) => animal.residents[index].sex === sex)
    .map((animal) => animal.name);
}

function getSortedAnimalNamesByLocationAndSex(species, location, sex) {
  return species
    .filter((animal) => animal.location === location)
    .reduce((acc, { name, residents }) => {
      const obj = {
        [name]: residents
          .filter((resident) => resident.sex === sex)
          .map((resident) => resident.name)
          .sort(),
      };
      acc.push(obj);
      return acc;
    }, []);
}

function getAnimalNamesByLocationAndSex(species, location, sex) {
  return species
    .filter((animal) => animal.location === location)
    .reduce((acc, { name, residents }) => {
      const obj = {
        [name]: residents
          .filter((resident) => resident.sex === sex)
          .map((resident) => resident.name),
      };
      acc.push(obj);
      return acc;
    }, []);
}

function getSortedAnimalNamesByLocation(species, location) {
  return species
    .filter((animal) => animal.location === location)
    .reduce((acc, { name, residents }) => {
      const obj = {
        [name]: residents.map((resident) => resident.name).sort(),
      };
      acc.push(obj);
      return acc;
    }, []);
}

function getSortedAnimalSpeciesByLocation(species, location) {
  return species
    .filter((animal) => animal.location === location)
    .map((animal) => animal.name)
    .sort();
}

function getAnimalNamesByLocation(species, location) {
  return species
    .filter((animal) => animal.location === location)
    .reduce((acc, { name, residents }) => {
      const obj = {
        [name]: residents.map((resident) => resident.name),
      };
      acc.push(obj);
      return acc;
    }, []);
}

function getAnimalSpeciesByLocation(species, location) {
  return species
    .filter((animal) => animal.location === location)
    .map((animal) => animal.name);
}

function gamNoOpt() {
  return {
    NE: getAnimalSpeciesByLocation(data.species, 'NE'),
    NW: getAnimalSpeciesByLocation(data.species, 'NW'),
    SE: getAnimalSpeciesByLocation(data.species, 'SE'),
    SW: getAnimalSpeciesByLocation(data.species, 'SW'),
  };
}

function gamSortSexNames(sex) {
  return {
    SE: getSortedAnimalNamesByLocationAndSex(data.species, 'SE', sex),
    NW: getSortedAnimalNamesByLocationAndSex(data.species, 'NW', sex),
    SW: getSortedAnimalNamesByLocationAndSex(data.species, 'SW', sex),
    NE: getSortedAnimalNamesByLocationAndSex(data.species, 'NE', sex),
  };
}

function gamSexNames(sex) {
  return {
    NE: getAnimalNamesByLocationAndSex(data.species, 'NE', sex),
    NW: getAnimalNamesByLocationAndSex(data.species, 'NW', sex),
    SE: getAnimalNamesByLocationAndSex(data.species, 'SE', sex),
    SW: getAnimalNamesByLocationAndSex(data.species, 'SW', sex),
  };
}

function gamSex(sex) {
  return {
    NE: getAnimalSpeciesByLocationAndSex(data.species, 'NE', sex),
    NW: getAnimalSpeciesByLocationAndSex(data.species, 'NW', sex),
    SE: getAnimalSpeciesByLocationAndSex(data.species, 'SE', sex),
    SW: getAnimalSpeciesByLocationAndSex(data.species, 'SW', sex),
  };
}

function gamSortNames() {
  return {
    NE: getSortedAnimalNamesByLocation(data.species, 'NE'),
    NW: getSortedAnimalNamesByLocation(data.species, 'NW'),
    SE: getSortedAnimalNamesByLocation(data.species, 'SE'),
    SW: getSortedAnimalNamesByLocation(data.species, 'SW'),
  };
}

function gamSort() {
  return {
    NE: getSortedAnimalSpeciesByLocation(data.species, 'NE'),
    NW: getSortedAnimalSpeciesByLocation(data.species, 'NW'),
    SE: getSortedAnimalSpeciesByLocation(data.species, 'SE'),
    SW: getSortedAnimalSpeciesByLocation(data.species, 'SW'),
  };
}

function gamNames() {
  return {
    NE: getAnimalNamesByLocation(data.species, 'NE'),
    NW: getAnimalNamesByLocation(data.species, 'NW'),
    SE: getAnimalNamesByLocation(data.species, 'SE'),
    SW: getAnimalNamesByLocation(data.species, 'SW'),
  };
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return gamNoOpt();
  if (options.sex && options.sorted && options.includeNames) return gamSortSexNames(options.sex);
  if (options.sex && options.includeNames) return gamSexNames(options.sex);
  if (options.sex) return gamSex(options.sex);
  if (options.sorted && options.includeNames) return gamSortNames();
  if (options.sorted) return gamSort();
  if (options.includeNames) return gamNames();
}

// const expected12 = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };
// assert.deepStrictEqual(getAnimalMap(), expected12);

// const options = { includeNames: true };
// const actual13 = getAnimalMap(options);
// const expected13 = {
//   NE: [
//     { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
//     { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
//   ],
//   NW: [
//     { tigers: ['Shu', 'Esther'] },
//     { bears: ['Hiram', 'Edwardo', 'Milan'] },
//     { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
//   ],
//   SE: [
//     { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
//     { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
//   ],
//   SW: [{ frogs: ['Cathey', 'Annice'] }, { snakes: ['Paulette', 'Bill'] }],
// };

// assert.deepStrictEqual(actual13, expected13);

// const options2 = { includeNames: true, sorted: true };
// const actual14 = getAnimalMap(options2);
// const expected14 = {
//   NE: [
//     { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
//     { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] },
//   ],
//   NW: [
//     { tigers: ['Esther', 'Shu'] },
//     { bears: ['Edwardo', 'Hiram', 'Milan'] },
//     { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] },
//   ],
//   SE: [
//     { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
//     { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] },
//   ],
//   SW: [{ frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }],
// };

// assert.deepStrictEqual(actual14, expected14);

// const options3 = { includeNames: true, sex: 'female' };
// const actual15 = getAnimalMap(options3);
// const expected15 = {
//   NE: [{ lions: ['Zena', 'Dee'] }, { giraffes: ['Gracia', 'Vicky'] }],
//   NW: [
//     { tigers: ['Shu', 'Esther'] },
//     { bears: [] },
//     { elephants: ['Ilana', 'Bea'] },
//   ],
//   SE: [{ penguins: ['Keri'] }, { otters: ['Mercedes', 'Margherita'] }],
//   SW: [{ frogs: ['Cathey', 'Annice'] }, { snakes: ['Paulette'] }],
// };

// assert.deepStrictEqual(actual15, expected15);

// const options4 = { includeNames: true, sex: 'female', sorted: true };
// const actual16 = getAnimalMap(options4);
// const expected16 = {
//   NE: [{ lions: ['Dee', 'Zena'] }, { giraffes: ['Gracia', 'Vicky'] }],
//   NW: [
//     { tigers: ['Esther', 'Shu'] },
//     { bears: [] },
//     { elephants: ['Bea', 'Ilana'] },
//   ],
//   SE: [{ penguins: ['Keri'] }, { otters: ['Margherita', 'Mercedes'] }],
//   SW: [{ frogs: ['Annice', 'Cathey'] }, { snakes: ['Paulette'] }],
// };

// assert.deepStrictEqual(actual16, expected16);

// let options5 = { sex: 'female' };
// let actual17 = getAnimalMap(options5)['NE'][0];
// let expected17 = 'lions';
// assert.strictEqual(actual17, expected17);

// options5 = { sex: 'female', sorted: true };
// actual17 = getAnimalMap(options5)['NE'][0];
// expected17 = 'lions';
// assert.strictEqual(actual17, expected17);

function getSchedule(dayName) {
  // seu código aqui
  return dayName;
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
