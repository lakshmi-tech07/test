const employeeRepo = require('../repositories/employeeRepository');

const addEmployee = async (req, res) => {
  const employee = await employeeRepo.createEmployee(req.body);
  res.status(201).json(employee);
};

const getEmployees = async (req, res) => {
  const employees = await employeeRepo.getAllEmployees();
  res.json(employees);
};

const updateEmployee = async (req, res) => {
  await employeeRepo.updateEmployee(req.params.id, req.body);
  res.json({ message: 'Employee updated' });
};

const deleteEmployee = async (req, res) => {
  await employeeRepo.deleteEmployee(req.params.id);
  res.json({ message: 'Employee deleted' });
};

module.exports = {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
};
