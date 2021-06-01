const assert = require("assert");
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

const data = require("./data");

function getSpeciesByIds(...ids) {
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

const actual = getSpeciesByIds();
const expected = [];
assert.deepStrictEqual(actual, expected);

const actual2 = getSpeciesByIds("0938aa23-f153-4937-9f88-4858b24d6bce");
const expected2 = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      { name: "Zena", sex: "female", age: 12 },
      { name: "Maxwell", sex: "male", age: 15 },
      { name: "Faustino", sex: "male", age: 7 },
      { name: "Dee", sex: "female", age: 14 },
    ],
  },
];
assert.deepStrictEqual(actual2, expected2);

const actual3 = getSpeciesByIds(
  "0938aa23-f153-4937-9f88-4858b24d6bce",
  "e8481c1d-42ea-4610-8e11-1752cfc05a46"
);
const expected3 = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      { name: "Zena", sex: "female", age: 12 },
      { name: "Maxwell", sex: "male", age: 15 },
      { name: "Faustino", sex: "male", age: 7 },
      { name: "Dee", sex: "female", age: 14 },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      { name: "Shu", sex: "female", age: 19 },
      { name: "Esther", sex: "female", age: 17 },
    ],
  },
];
assert.deepStrictEqual(actual3, expected3);

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .find(({ name }) => name === animal)
    .residents.every((resident) => resident.age > age);
}

let actual4 = getAnimalsOlderThan("otters", 7);
let expected4 = true;
assert.deepStrictEqual(actual4, expected4);

actual4 = getAnimalsOlderThan("penguins", 10);
expected4 = false;
assert.deepStrictEqual(actual4, expected4);

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
}

const actual5 = getEmployeeByName();
const expected5 = {};
assert.deepStrictEqual(actual5, expected5);

const actual6 = getEmployeeByName("Emery");
const expected6 = {
  id: "b0dc644a-5335-489b-8a2c-4e086c7819a2",
  firstName: "Emery",
  lastName: "Elser",
  managers: ["9e7d4524-363c-416a-8759-8aa7e50c0992"],
  responsibleFor: [
    "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    "0938aa23-f153-4937-9f88-4858b24d6bce",
  ],
};
assert.deepStrictEqual(actual6, expected6);

const actual7 = getEmployeeByName("Wishart");
const expected7 = {
  id: "56d43ba3-a5a7-40f6-8dd7-cbb05082383f",
  firstName: "Wilburn",
  lastName: "Wishart",
  managers: [
    "0e7b460e-acf4-4e17-bcb3-ee472265db83",
    "fdb2543b-5662-46a7-badc-93d960fdc0a8",
  ],
  responsibleFor: [
    "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
  ],
};
assert.deepStrictEqual(actual7, expected7);

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

const expected8 = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  ]
};

const personalInfo = {
  id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
  firstName: 'John',
  lastName: 'Doe',
};

const associatedWith = {
  managers: [
    'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    '9e7d4524-363c-416a-8759-8aa7e50c0992',
  ],
  responsibleFor: [
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '89be95b3-47e4-4c5b-b687-1fabf2afa274',
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
  ]
};
assert.deepStrictEqual(createEmployee(personalInfo, associatedWith), expected8);

function isManager(id) {
  // seu código aqui;
  return data.employees.some((employee) => employee.managers.includes(id));
}

let actual9 = isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
let expected9 = false;
assert.deepStrictEqual(actual9, expected9);

actual9 = isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');
expected9 = true;
assert.deepStrictEqual(actual9, expected9);

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function countAnimals(species) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
//   // seu código aqui
// }

// function getAnimalMap(options) {
//   // seu código aqui
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
  // calculateEntry,
  // getSchedule,
  // countAnimals,
  // getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  // getEmployeeCoverage,
  // addEmployee,
  isManager,
  getAnimalsOlderThan,
  // getOldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
