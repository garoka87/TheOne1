const mongoose=require('mongoose')
const recsheama =new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },          // jointure vers User
    Objet : String,
    Description :String ,
    datereclamation:  { type: Date, default: Date.now }
    
},{timestamps:true})
    const reclamation =mongoose.model('reclamation',recsheama);
    module.exports = reclamation