const express = require("express");
const router = express.Router();
const produitController = require("../controller/produitc");

// GET all produits
router.get("/prod", produitController.getAll);

// GET one produit
router.get("/:id", produitController.getOne);

// POST (ajout produit)
router.post("/create", produitController.AddProduit);

// PUT (modifier produit)
router.put("/:id", produitController.updateProduit);

// DELETE produit
router.delete("/:id", produitController.DeleteProduit);

module.exports = router;
