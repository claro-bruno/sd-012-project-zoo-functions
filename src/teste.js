const data = require('./data');

function getEmployeeByName(nome) {
  const ml = data.employees;
  const retorno = ml.find((employee) => employee.firstName === nome || employee.lastName === nome);
  return retorno;
}

console.log(getEmployeeByName());
