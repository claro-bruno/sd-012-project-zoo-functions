const data = require('./data');

function getSpeciesByIds(...ids) {
  // console.log(ids);
  const id = data.species.map((element) => element.id);
  return id.map((element, index) => element === ids[index]);
}

console.log(getSpeciesByIds());

// const { id } = data.species[0];
// console.log(id);
