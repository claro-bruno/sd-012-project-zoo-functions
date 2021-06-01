const data = require('./data');

function getSpeciesByIds(ids = []) {
  return ids.species.filter((id) => id.id);
}

console.log(getSpeciesByIds(data))



