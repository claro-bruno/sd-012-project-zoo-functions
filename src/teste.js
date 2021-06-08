const data = require('./data');

const { employees, species } = data;


function getOldestFromFirstSpecies(id) {
  const obj = {};
  if (!id) {
    employees.forEach((valor) => {
      obj[`${valor.firstName} ${valor.lastName}`] = valor.responsibleFor.map((specieId) =>
        species.find((animaus) => animaus.id === specieId).name);
    });
    return obj;
  }
  const empregado = employees.find((employee) =>
    employee.id === id || employee.firstName === id || employee.lastName === id);
  const animais = empregado.responsibleFor;
  const arAnimals = animais.map((specieId) =>
    species.find((animaus) => animaus.id === specieId).name);
  obj[`${empregado.firstName} ${empregado.lastName}`] = arAnimals;
  return obj;
}
console.log(getOldestFromFirstSpecies());
