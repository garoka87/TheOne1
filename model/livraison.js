const mongoose = require('mongoose');

const Livraisonschema = new mongoose.Schema({
  commande: { type: mongoose.Schema.Types.ObjectId, ref: "commande" }, // jointure vers Commande
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },          // jointure vers User
  etat: { type: String, enum: ["Livrée", "en route"], default: "en route" },
  datelivre: { type: Date, default: Date.now } // date de livraison
});

module.exports = mongoose.model('Livraison', Livraisonschema);
