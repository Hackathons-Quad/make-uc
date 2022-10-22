const express = require("express");
const route = express.Router();
const users = require("../models/userschema");
const jobs = require("../models/jobschema");
const feedbacks = require("../models/feedbackschema");
const bookmarks = require("../models/bookmarkschema");



// To register user in our system
route.post("/register", async (req, res) => {
  try {
    const newUser= new User({
      role: req.body.role,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    }) ;

    newUser.save();
  } catch (err) {
    console.log(err)
  }
});



// To get particular note from the database
route.get("/:id", async (req, res) => {
  try {
    const user1 = await users.findById(req.params.id);
    res.json(user1);
  } catch (err) {
    res.json({msg: "Error getting the note"})
  }
});

// To add a new note to the database
route.post("/add", async (req, res) => {
    let date = new Date();
  const user1 = new users({
    title: req.body.title,
    description: req.body.description,
    date: date
  });

  try {
    const note11 = await user1.save();
    res.json(note11);
  } catch (err) {
    res.json({ msg:err.message });
  }
});

// To edit a note in the database
route.post("/edit", async (req, res) => {
  try {
    let date = new Date();
    const { title, description } = req.body.users;
    const user1 = await users.findOneAndUpdate(
      { _id: req.body.users._id },
      {
        title,
        description,
        date
      }
    );
    res.json({ msg: "Note Edited successfully" });
  } catch (err) {
    res.json({ msg: "Error Updating the note" });
  }
});

// To delete a note from the database
route.post("/delete", async (req, res) => {
  try {
    const user1 = await users.findById(req.body.id);
    user1.remove();
    res.json({ msg: "Note deleted successfully" });
  } catch (err) {
    res.json({ msg: "Error Deleting the note" });
  }
});

module.exports = route;
