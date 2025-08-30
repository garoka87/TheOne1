
const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const Usershema =new mongoose.Schema({

    Name :{type :String},
    lastname  :{type :String},
    email :{type :String ,unique : true , lowercase : false },
    password :{type :String,minlength : 6},
    telephone :{type :Number, length : 8},
    role :{type :String ,enum:["admin","user"], default :"user"},
    image :{type :String , default : "tt.jpg" },

    statu :{type :Boolean, default : false }


    },{timestamps:true})
    const user =mongoose.model('user',Usershema);
    module.exports = user