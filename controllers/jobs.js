const express = require("express");
const route = express.Router();
const users = require("../models/userschema");
const jobs = require("../models/jobschema");
const bookmarks = require("../models/bookmarkschema");

// To add job
route.post("/add", async (req, res) => {
  try {
    const user1 = await users.find({});
    res.json(user1);
  } catch (err) {
    res.json({ msg: "Error getting the users" });
  }
});

// To get all jobs
route.get("/", async (req, res) => {
    try {
        const notes1 = await jobs.find({});
        res.json(notes1);
      } catch (err) {
        res.json({msg: "Error getting jobs"})
      }
});

// To delete a job from the database
route.put("/delete", async (req, res) => {
  try {
    jobid = req.body.jobId;
    const job = await jobs.find({ jobId: jobid });
    if (job.length === 0) {
      res.json({ msg: "Invalid Job Id" });
    }
    job[0].remove();
    res.json({ msg: "Job deleted successfully" });
  } catch (err) {
    res.json({ msg: "Error Deleting Job" });
  }
});


// To add job to the wishlist
route.post("/bookmark", async (req, res) => {
    try {
        const notes1 = await jobs.find({});
        res.json(notes1);
      } catch (err) {
        res.json({msg: "Error getting jobs"})
      }
});

// To get job wishlist
route.get("/bookmark", async (req, res) => {
    try {
        const notes1 = await jobs.find({});
        res.json(notes1);
      } catch (err) {
        res.json({msg: "Error getting jobs"})
      }
});

// // To edit a note in the database
// route.post("/edit", async (req, res) => {
//   try {
//     let date = new Date();
//     const { title, description } = req.body.users;
//     const user1 = await users.findOneAndUpdate(
//       { _id: req.body.users._id },
//       {
//         title,
//         description,
//         date
//       }
//     );
//     res.json({ msg: "Note Edited successfully" });
//   } catch (err) {
//     res.json({ msg: "Error Updating the note" });
//   }
// });

// // To delete a note from the database
// route.post("/delete", async (req, res) => {
//   try {
//     const user1 = await users.findById(req.body.id);
//     user1.remove();
//     res.json({ msg: "Note deleted successfully" });
//   } catch (err) {
//     res.json({ msg: "Error Deleting the note" });
//   }
// });

// // To get particular note from the database
// route.get("/:id", async (req, res) => {
//     try {
//       const user1 = await users.findById(req.params.id);
//       res.json(user1);
//     } catch (err) {
//       res.json({msg: "Error getting the note"})
//     }
//   });

module.exports = route;
