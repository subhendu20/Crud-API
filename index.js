const express = require('express')
const mongoose = require('mongoose')
const middleware = require('body-parser')
const route1 = require('./Router/Route1')
const dotenv = require('dotenv').config();
const app = express()

// ----------------------------------------------dbconnection-------------------------------------------//
mongoose.connect(process.env.DB,{
          useNewUrlParser:true,
          
          useUnifiedTopology:true
})
const conn = mongoose.connection
conn.on('open',function(){
          console.log("connected")

})

// -----------------------------------------------middleware--------------------------------------------//

app.use(middleware.urlencoded({ extended: false }));
app.use(middleware.json());
app.use('/',route1)

//------------------------------------------------Endpoints----------------------------------------------//

//---------------------------------------------- server setup---------------------------------------------//
app.listen(process.env.PORT,()=>{
          console.log(`app running on ${process.env.PORT}`)
})