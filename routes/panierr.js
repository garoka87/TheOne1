const express = require("express");
const router = express.Router();
const commandeController = require("../controller/panier");

// GET all commandes
router.get("/panier", commandeController.getAll);

// GET one commande by id
router.get("/:id", commandeController.getOne);

// POST (ajout commande)
router.post("/", commandeController.addPanier);

// PUT (modifier commande)
router.put("/:id", commandeController.updatePanier);

// DELETE commande
router.delete("/:id", commandeController.deletePanier);

module.exports = router;
