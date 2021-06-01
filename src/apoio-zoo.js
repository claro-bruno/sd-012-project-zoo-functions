const data = require('./data');

// function getSpeciesByIds(...ids) {
//   return data.species.filter((element, index) => element.id === ids[index]);
// }

// console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

// function getAnimalsOlderThan(animal, age) {
//   return data.species.filter((element) => element.name === animal).
//   filter((element) => element.residents)
// }
// console.log(data.species.filter((element) => element.name === 'penguins'));
// console.log(getAnimalsOlderThan('otters', 7));

const animal = data.species.filter((element) => element.name === 'penguins');
console.log(animal);
console.log(animal.map((element) => element.residents));
