const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie, index) => specie.id === ids[index]);
}

function getAnimalsOlderThan(nomes, idade) {
  const index = data.species
    .find((nome) => nome.name === nomes).residents
    .filter((idades) => idades.age)
    .every((age) => age.age >= idade);
  return index;
}

function getEmployeeByName(nome) {
  if (nome === undefined) {
    return {};
  }
  const ml = data.employees;
  const retorno = ml.find((employee) => employee.firstName === nome || employee.lastName === nome);
  return retorno;
}
console.log(getEmployeeByName());
