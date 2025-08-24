const express = require("express");
const router = express.Router();
const commandeController = require("../controller/commandec");

// GET all commandes
router.get("/", commandeController.getAll);

// GET one commande by id
router.get("/:id", commandeController.getOne);

// POST (ajout commande)
router.post("/", commandeController.AddCommande);

// PUT (modifier commande)
router.put("/:id", commandeController.updateCommande);

// DELETE commande
router.delete("/:id", commandeController.DeleteCommande);

module.exports = router;
