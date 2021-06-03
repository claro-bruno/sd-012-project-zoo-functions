function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const verifySpecie = species.find((specie) => specie.name === animal);
  return verifySpecie.residents.every((ageId) => ageId.age === age);
}
console.log(getAnimalsOlderThan());