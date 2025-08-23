const pservice = require("../Service/User")
module.exports.getpp = async(req,res)=>{
    try{
        const osinformation =await pservise.getData()
        console.log(osinformation)
        res.status(200).json({osinformation})
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
}