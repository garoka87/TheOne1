const usermodel = require("../model/usermodel");

// ✅ READ ALL
module.exports.getAll = async (req, res) => {
  try {
    const users = await usermodel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE
module.exports.Adduser = async (req, res) => {
  try {
    const { Name, lastname, email, password, telephone, role, image } = req.body;

    const newUser = new usermodel({
      Name,
      lastname,
      email,
      password,  // tu peux ajouter bcrypt ici pour hasher le password
      telephone,
      role,
      image
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ UPDATE
module.exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await usermodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE
module.exports.Delete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await usermodel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Utilisateur introuvable" });
    }
    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ RECHERCHE par Name
module.exports.searchByName = async (req, res) => {
  try {
    const name = req.params.Name;  // utilisation params
    const users = await usermodel.find({
      Name: { $regex: name, $options: "i" }
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ TRIER par Name
module.exports.sortByName = async (req, res) => {
  try {
    const { order } = req.query; // "asc" ou "desc"
    const sortOrder = order === "desc" ? -1 : 1;

    const users = await usermodel.find().sort({ Name: sortOrder });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

