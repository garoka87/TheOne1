const Livraison = require("../model/livraison");
const Commande = require("../model/commande");
const User = require("../model/usermodel");

// GET all livraisons
module.exports.getAll = async (req, res) => {
    try {
        const livraisons = await Livraison.find()
            .populate("commande")  // remplace par les infos de la commande
            .populate("user");    // remplace par les infos de l'utilisateur
        res.status(200).json(livraisons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET one livraison
module.exports.getOne = async (req, res) => {
    try {
        const livraison = await Livraison.findById(req.params.id)
            .populate("commande")
            .populate("user");
        if (!livraison) return res.status(404).json({ message: "Livraison non trouvée" });
        res.status(200).json(livraison);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST (ajout livraison)
module.exports.addLivraison = async (req, res) => {
    try {
        const { commande, user, etat, datelivre } = req.body;

        // Vérifier que la commande et l'user existent
        const commandeExist = await Commande.findById(commande);
        const userExist = await User.findById(user);
        if (!commandeExist || !userExist) {
            return res.status(400).json({ message: "Commande ou User invalide" });
        }

        const newLivraison = new Livraison({
            commande,
            user,
            etat,
            datelivre
        });

        const savedLivraison = await newLivraison.save();
        res.status(201).json(savedLivraison);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// PUT (modifier livraison)
module.exports.updateLivraison = async (req, res) => {
    try {
        const livraison = await Livraison.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!livraison) return res.status(404).json({ message: "Livraison non trouvée" });
        res.status(200).json(livraison);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE livraison
module.exports.deleteLivraison = async (req, res) => {
    try {
        const livraison = await Livraison.findByIdAndDelete(req.params.id);
        if (!livraison) return res.status(404).json({ message: "Livraison non trouvée" });
        res.status(200).json({ message: "Livraison supprimée" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
