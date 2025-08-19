const mongoose=require('mongoose')
module.exports.connecttoMongoDB = async () =>{
    mongoose.set('stricQuery', false);
    mongoose.connect("").then(
        ()=>{
            console.log("connect to db")
        }
    ).catch(
        (error)=>(console.log(error))
    )
}