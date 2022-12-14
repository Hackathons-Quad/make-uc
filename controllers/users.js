const express = require("express");
const route = express.Router();
const users = require("../models/userschema");
const jobs = require("../models/jobschema");
const bookmarks = require("../models/bookmarkschema");

// To register user in our system
route.post("/register", async (req, res) => {
  try {
    const newUser= new users({
      role: req.body.role,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }) ;
    let email=req.body.email;
    const user1 = await users.find({ email: email });
    if (user1.length === 0) {
      newUser.save();
      res.json({msg: "User registered Successfully "})
    }else
      res.json({msg:"Email already registered, use another email"})
  } catch (err) {
    res.json({ msg: "Unable to register new user" });
  }
});

// To validate the user
// route.get("/validate/:email", async (req, res) => {
//   mail = req.params.email;
//   try {
//     const user1 = await users.updateOne(
//       { email: mail },
//       { $set: { isAuthenticated: true } }
//     );
//     res.send("user authenticated");
//   } catch (err) {
//     res.send("Error occured while authenticating the user");
//   }
// });




// To login in the user into our system
route.post("/login", async (req, res) => {
  mail = req.body.email;
  password = req.body.password;
  try {
    const user1 = await users.find({ email: mail });
    if (user1.length === 0) {
        res.json({msg: "Invalid User"})
    } else {
      if (password == user1[0].password) {
        ourUser = user1[0];
        temp = {role: ourUser.role, username: ourUser.username, password : ourUser.password, email : ourUser.email};
        Object.assign(temp, {msg: "Success"});
        console.log(temp);
        res.json(temp);
      }
      else res.josn({msg : "Pls enter correct Password"});
    }
  } catch (err) {
    console.log(err);
    res.josn({msg : "Error logging in"});
  }
});

module.exports = route;
