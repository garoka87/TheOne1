const mongoose=require('mongoose')
const Prodschema =new mongoose.Schema({
    Name : String,
    lastname :String,
    email : String ,
    password : String,
    telephone : String
})