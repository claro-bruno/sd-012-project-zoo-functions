const data = require('./data');

function getEmployeeByName(nome) {
  const retorno = data.employees.find((employee) => employee.firstName === nome || employee.lastName === nome);
  return nome.length === 0 ? [] : retorno;
}

console.log(getEmployeeByName('Nelson'))
