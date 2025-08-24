const express = require("express");
const router = express.Router();
const userC = require("../controller/userC");

// GET /fowfa/all
router.get("/all", userC.getAll);

module.exports = router;
