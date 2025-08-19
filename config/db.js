const mongoose=require('mongoose')
module.exports.connecttoMongoDB = async () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.Url_Mongo).then(
        ()=>{
            console.log("connect to db")
        }
    ).catch(
        (error)=>(console.log(error))
    )
}
//vz5nb1eJHPcSaGF7
//DOKkup
