const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // auto-generate UUID
    primaryKey: true
  },
  empName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  empEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  designation: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Active'
  }
});

module.exports = Employee;
