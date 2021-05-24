export function fireEmployees(employees: string[], unemployed: string[]) {
  let result: string[] = [];
  employees.forEach((employee) => {
    if (!unemployed.includes(employee)) {
      result.push(employee);
    }
  });
  return result;
}
