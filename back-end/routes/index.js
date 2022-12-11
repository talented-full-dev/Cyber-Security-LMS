const express = require("express");
const models = require("../models");
const router = express.Router();

// Get all users
router.get("/all_user", async (req, res) => {
  try {
    const userAll = await models.User.find();
    res.json(userAll);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Add new user
router.post("/add_user", async (req, res) => {
  const user = new models.User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  console.log("user=>", user);

  try {
    const userSave = await user.save();
    res.status(200).json(userSave);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete user
router.delete("/delete_user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await models.User.findByIdAndDelete(id);
    res.send(`Document with ${user.name} has been deleted..`);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
