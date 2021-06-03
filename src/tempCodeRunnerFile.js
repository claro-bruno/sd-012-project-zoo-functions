function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.find((idManager) => idManager === id));
}

console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));