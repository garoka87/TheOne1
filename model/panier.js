const PanierSchema = new mongoose.Schema({
  produit: { type: mongoose.Schema.Types.ObjectId, ref: "produit" }, // jointure vers Produit
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },       // jointure vers User
  prix: Number
});

module.exports = mongoose.model("Panier", PanierSchema);
