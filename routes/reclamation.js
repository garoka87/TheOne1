const express = require("express");
const router = express.Router();
const reclamation = require("../controller/reclamationC");

// GET all produits
router.get("/All", reclamation.getAll);

// GET one produit
router.get("/:id", reclamation.getOne);

// POST (ajout produit)
router.post("/Create", reclamation.addReclamation);

// PUT (modifier produit)
router.put("/:id", reclamation.updateReclamation);

// DELETE produit
router.delete("/:id", reclamation.deleteReclamation);

module.exports = router;
