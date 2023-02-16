const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
      
    },
    email: {
        type: String
      
    },
    groups: {
        type: String
       
    },
    Available:{
        type:Number
    },
    interestedtechnology: {
        type: String
    },
    gender: {
        type: String 
       
    },
})
module.exports = mongoose.model('employee' , employeeSchema)
