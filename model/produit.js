const mongoose=require('mongoose')
const Prodschema =new mongoose.Schema({
    Name : String,
    image :{type :String , default : "epuise.jpg" },
    prix: { type: Number, required: true }
    
},{timestamps:true})
    const produit =mongoose.model('produit',Prodschema);
    module.exports = produit