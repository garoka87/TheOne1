const express = require("express");
const router = express.Router();
const userController = require("../controller/userC");

// GET all users
router.get("/All", userController.getAll);

// CREATE user
router.post("/create", userController.Adduser);

// UPDATE user by id
router.put("/updateuser/:id", userController.update);

// DELETE user by id
router.delete("/delete/:id", userController.Delete);

module.exports = router;
