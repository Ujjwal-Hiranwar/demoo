const mongoDB = require('mongoose')
const database = mongoDB.connect("mongodb+srv://mongopract:mongopwd@cluster0.32bputm.mongodb.net/data-users?retryWrites=true&w=majority")
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch((err)=>{
    console.log("error while connecting MongoDB")
})
const userSchema = mongoDB.Schema({
    username : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : false
    }

})
const user = new mongoDB.model("patient",userSchema)
module.exports = user;