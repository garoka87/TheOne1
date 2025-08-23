const mongoose=require('mongoose')
const commandeschema =new mongoose.Schema({
    Name : String,
    lastname :String,
    email : String ,
    password : String,
    telephone : String
})