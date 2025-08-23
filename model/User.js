
const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const Usershema =new mongoose.Schema({

    Name : String,
    lastname :String,
    email : {type :String ,unique : true , lowercase : false },
    password : {type :String,minlength : 6},
    telephone :{type: Number, length : 8},
    role :{type: String ,enum:["admin","user"]},

    },{timestamps:true})
    const user =mongoose.model('user',Usershema);
    module.exports = user