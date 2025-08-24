const express = require("express");
const router = express.Router();
const commandeController = require("../controller/livraison");

// GET all commandes
router.get("/ll", commandeController.getAll);

// GET one commande by id
router.get("/:id", commandeController.getOne);

// POST (ajout commande)
router.post("/", commandeController.addLivraison);

// PUT (modifier commande)
router.put("/:id", commandeController.updateLivraison);

// DELETE commande
router.delete("/:id", commandeController.deleteLivraison);

module.exports = router;
