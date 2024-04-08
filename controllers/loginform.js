const path = require('path')
const users = require('../models/loginform')
const sendLogin = async (req,res)=>{
    try{
        res.sendFile(path.join(__dirname,"../view","/index.html"));
        console.log("this is index file")
    }
    catch(err){
        
        res.send("sendFile terminited")
    }

}
const sendResponse =  async (req,res)=>{
    try{
         res.send("your form is submitted")
    }
    catch(err){
        res.send(err);
    }
}
const sendDataToDataBase =async (req,res)=>{
    try{
      users.insertMany([{
        username : "hhdhdhd",
        password : "hdhdhdhd"
      }])
      res.send("data sent to mongoDB")
      console.log(req.body)
    }
    catch(err){
        console.log(err)
    }
}
module.exports = {sendLogin,sendDataToDataBase,sendResponse};