const Commande = require("../model/commande");
const User = require("../model/usermodel");
const Panier = require("../model/panier");

// ✅ READ ALL (afficher toutes les commandes)
module.exports.getAll = async (req, res) => {
  try {
    const commandes = await Commande.find()
      .populate("user") // info de l'utilisateur
      .populate({
        path: "paniers",
        populate: { path: "produit user" } // chaque panier → produit et user
      });
    res.status(200).json(commandes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ READ ONE (afficher une seule commande par id)
module.exports.getOne = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id)
      .populate("user")
      .populate({
        path: "paniers",
        populate: { path: "produit user" }
      });
    if (!commande) return res.status(404).json({ message: "Commande introuvable" });
    res.status(200).json(commande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE (ajouter une commande avec plusieurs paniers)
module.exports.AddCommande = async (req, res) => {
  try {
    const { user, paniers, prix, etat } = req.body;

    const newCommande = new Commande({ user, paniers, prix, etat });
    const savedCommande = await newCommande.save();
    res.status(201).json(savedCommande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE (modifier une commande)
module.exports.updateCommande = async (req, res) => {
  try {
    const updatedCommande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommande) return res.status(404).json({ message: "Commande introuvable" });
    res.status(200).json(updatedCommande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE (supprimer une commande)
module.exports.DeleteCommande = async (req, res) => {
  try {
    const deletedCommande = await Commande.findByIdAndDelete(req.params.id);
    if (!deletedCommande) return res.status(404).json({ message: "Commande introuvable" });
    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
