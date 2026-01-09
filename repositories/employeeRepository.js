const Employee = require('../models/employee');

const createEmployee = (data) => {
  return Employee.create(data);
};

const getAllEmployees = () => {
  return Employee.findAll();
};

const updateEmployee = (id, data) => {
  return Employee.update(data, { where: { id } });
};

const deleteEmployee = (id) => {
  return Employee.destroy({ where: { id } });
};

module.exports = {
  createEmployee,
  getAllEmployees,
  updateEmployee,
  deleteEmployee
};
