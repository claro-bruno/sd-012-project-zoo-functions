const data = require('./data');
const outro = data.species.find((nome) => nome.name === 'lions').residents.filter((idade) => idade.age).every((age) => age.age >= 10)
const index = data.species.find((nome) => nome.name === 'lions').residents[outro]


function idade (nomes, idade) {
  let index = data.species
    .find((nome) => nome.name === nomes).residents
    .filter((idade) => idade.age)
    .every((age) => age.age >= idade)
   return index
}
console.log(idade('lions', 6))