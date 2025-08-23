const mongoose=require('mongoose')
const Panierschema =new mongoose.Schema({
    Name : String,
    lastname :String,
    email : String ,
    password : String,
    telephone : String})