const data = require('./data');

function getSpeciesByIds(...ids) {
  const { animals } = data;
  // seu código aqui
  const result = ids.map((id) => animals.find((animal) => animal.id === id));
  return result;