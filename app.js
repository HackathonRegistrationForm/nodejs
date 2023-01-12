const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const employeeRoutes = require('./routes/employee')

mongoose.connect('mongodb+srv://Uma:Umaraj09@cluster0.cy5cq2n.mongodb.net/?retryWrites=true&w=majority',{

})

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors())

app.use('/employee', employeeRoutes);

module.exports=app;
