*/

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = ids.map((id) => species.find((specie) => specie.id === id));
  return result;
}
