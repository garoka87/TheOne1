const Panier = require("../model/panier");
const User = require("../model/usermodel");
const Produit = require("../model/produit");

// GET all paniers
module.exports.getAll = async (req, res) => {
    try {
        const paniers = await Panier.find()
            .populate("produit")
            .populate("user");
        res.status(200).json(paniers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one panier
module.exports.getOne = async (req, res) => {
    try {
        const panier = await Panier.findById(req.params.id)
            .populate("produit")
            .populate("user");
        if (!panier) return res.status(404).json({ message: "Panier non trouvé" });
        res.status(200).json(panier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST (ajout panier)
module.exports.addPanier = async (req, res) => {
    try {
        const { produit, user } = req.body; // on ne prend plus "prix"

        // Vérifier que le produit et l'user existent
        const produitExist = await Produit.findById(produit);
        const userExist = await User.findById(user);

        if (!produitExist || !userExist) {
            return res.status(400).json({ message: "Produit ou User invalide" });
        }

        // Récupérer le prix depuis le produit
        const prix = produitExist.prix; 

        const newPanier = new Panier({ produit, user, prix });
        const savedPanier = await newPanier.save();

        res.status(201).json(savedPanier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// PUT (modifier panier)
module.exports.updatePanier = async (req, res) => {
    try {
        const panier = await Panier.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!panier) return res.status(404).json({ message: "Panier non trouvé" });
        res.status(200).json(panier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE panier
module.exports.deletePanier = async (req, res) => {
    try {
        const panier = await Panier.findByIdAndDelete(req.params.id);
        if (!panier) return res.status(404).json({ message: "Panier non trouvé" });
        res.status(200).json({ message: "Panier supprimé" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
