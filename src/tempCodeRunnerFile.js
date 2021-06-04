function countAnimals(specie) {
  if (specie === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  return data.species.find(({ name }) => name === specie).residents.length;
}
console.log('lions');