const mongoose=require('mongoose')
const CommandeSchema = new mongoose.Schema({
  paniers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Panier" }], // plusieurs paniers
  prix: Number,
  date: { type: Date, default: Date.now },
  etat: { type: String, enum: ["en attente", "payée", "livrée"], default: "en attente" }
});

module.exports = mongoose.model("commande", CommandeSchema);

