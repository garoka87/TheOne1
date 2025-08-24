const produitModel = require("../model/produit");

// ✅ READ ALL (afficher tous les produits)
module.exports.getAll = async (req, res) => {
  try {
    const produits = await produitModel.find();
    res.status(200).json(produits);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ READ ONE (afficher un seul produit par id)
module.exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const produit = await produitModel.findById(id);
    if (!produit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.status(200).json(produit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE (ajouter un produit)
module.exports.AddProduit = async (req, res) => {
  try {
    const { Name, image, prix } = req.body;

    const newProduit = new produitModel({
      Name,
      image,
      prix,
    });

    const savedProduit = await newProduit.save();
    res.status(201).json(savedProduit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE (modifier un produit)
module.exports.updateProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedProduit = await produitModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    res.status(200).json(updatedProduit);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE (supprimer un produit)
module.exports.DeleteProduit = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduit = await produitModel.findByIdAndDelete(id);

    if (!deletedProduit) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
