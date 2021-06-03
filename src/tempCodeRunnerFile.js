
function getEmployeeByName(employeeName) {
  // seu código aqui
  const employee = employees.find((name) => name.firstName === employeeName || name.lastName === employeeName);
  return employee;
}
console.log(getEmployeeByName('Wishart'));