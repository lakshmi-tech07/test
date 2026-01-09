
const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeControllers');

router.post('/employees', controller.addEmployee);
router.get('/employees', controller.getEmployees);
router.put('/employees/:id', controller.updateEmployee);
router.delete('/employees/:id', controller.deleteEmployee);

module.exports = router;
