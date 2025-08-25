const Reclamation = require("../model/reclamation");
const User = require("../model/usermodel");

// ✅ GET all reclamations
module.exports.getAll = async (req, res) => {
    try {
        const reclamations = await Reclamation.find()
            .populate("user"); // récupère infos utilisateur
        res.status(200).json(reclamations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ GET one reclamation
module.exports.getOne = async (req, res) => {
    try {
        const reclamation = await Reclamation.findById(req.params.id)
            .populate("user");
        if (!reclamation) return res.status(404).json({ message: "Réclamation introuvable" });
        res.status(200).json(reclamation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ CREATE a new reclamation
module.exports.addReclamation = async (req, res) => {
    try {
        const { user, Objet, Description } = req.body;

        // Vérifier que l'utilisateur existe
        const userExist = await User.findById(user);
        if (!userExist) return res.status(400).json({ message: "Utilisateur invalide" });

        const newReclamation = new Reclamation({ user, Objet, Description });
        const savedReclamation = await newReclamation.save();
        res.status(201).json(savedReclamation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ UPDATE reclamation
module.exports.updateReclamation = async (req, res) => {
    try {
        const updatedReclamation = await Reclamation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedReclamation) return res.status(404).json({ message: "Réclamation introuvable" });
        res.status(200).json(updatedReclamation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ✅ DELETE reclamation
module.exports.deleteReclamation = async (req, res) => {
    try {
        const deletedReclamation = await Reclamation.findByIdAndDelete(req.params.id);
        if (!deletedReclamation) return res.status(404).json({ message: "Réclamation introuvable" });
        res.status(200).json({ message: "Réclamation supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
