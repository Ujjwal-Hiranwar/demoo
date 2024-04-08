// this code is to practice mongo db setup
const express = require('express')
const app = express()
const path = require('path')
const indexRoutes = require('./routes/loginform')
app.use(express.json())
app.use("/",indexRoutes);




app.listen(5000,(err)=>{
    if(err) console.log("error in server setup")
    console.log("server started successfully")
})