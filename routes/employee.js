const express  = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')


const Employee = require('../models/employee')

router.post('/addemployee' , async (req,res) => {
    const employee = new Employee(req.body)
    try{
        const empInfo = await employee.save()
        res.status(201).json({
            EmployeeInfo:empInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

router.get('/getemployee' , async (req,res) => {
    try{
        const empInfo = await Employee.find()
        res.status(200).json({
            count: empInfo.length , 
            EmployeeInfo: empInfo
        })
    
    }catch(err){
        console.log(err)
        res.status(400).json({err})
    }
   
})

module.exports = router
