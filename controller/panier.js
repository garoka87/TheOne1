const usermodel = require("../model/usermodel")
module.exports.getpp = async(req,res)=>{
    try{
      
        res.status(200).json({})
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}