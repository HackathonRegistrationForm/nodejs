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
    projecttopic: {
        type: String
       
    },
    interestedtechnology: {
        type: String
       
    
    },
    gender: {
        type: String 
       
    },

  
        


})


module.exports = mongoose.model('employee' , employeeSchema)
