const express = require("express");
const route = express.Router();
const users = require("../models/userschema");
const jobs = require("../models/jobschema");
const bookmarks = require("../models/bookmarkschema");

// To register user in our system
route.post("/register", async (req, res) => {
  try {
    const user1 = await users.find({});
    res.json(user1);
  } catch (err) {
    res.json({ msg: "Error getting the users" });
  }
});

// To validate the user
route.get("/validate/:email", async (req, res) => {
  mail = req.params.email;
  try {
    const user1 = await users.updateOne(
      { email: mail },
      { $set: { isAuthenticated: true } }
    );
    res.send("user authenticated");
  } catch (err) {
    res.send("Error occured while authenticating the user");
  }
});

// To login in the user into our system
route.post("/login", async (req, res) => {
  mail = req.body.email;
  password = req.body.password;
  try {
    const user1 = await users.find({ email: mail });
    console.log(user1);
    if (user1.length === 0) {
      res.send("Invalid User");
    } else {
      if (password == user1[0].password) res.json(user1[0]);
      else res.send("Invalid User");
    }
  } catch (err) {
    console.log(err);
    res.send("Error logging in");
  }
});

// To edit a note in the database
// route.post("/edit", async (req, res) => {
//   try {
//     let date = new Date();
//     const { title, description } = req.body.users;
//     const user1 = await users.findOneAndUpdate(
//       { _id: req.body.users._id },
//       {
//         title,
//         description,
//         date,
//       }
//     );
//     res.json({ msg: "Note Edited successfully" });
//   } catch (err) {
//     res.json({ msg: "Error Updating the note" });
//   }
// });



module.exports = route;
