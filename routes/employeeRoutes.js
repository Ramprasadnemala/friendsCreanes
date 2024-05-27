const express =require('express');
const router=express.Router()
const employeeController = require('../controllers/employeeController')
const Employee= require('../models/Employee')


//very importants in backend methods like get, post, put, delete

router.post('/add-emp',employeeController.createEmployee)
router.get("/allemployees",employeeController.getEmployees)

module.exports= router