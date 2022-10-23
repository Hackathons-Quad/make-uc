const express = require("express");
const route = express.Router();
const users = require("../models/userschema");
const jobs = require("../models/jobschema");
const bookmarks = require("../models/bookmarkschema");
var jid=1;
// To add job
route.post("/add", async (req, res) => {

  try {
    const newJob=new jobs({
      jobId:jid,
      jobDescription:req.body.jobTitle,
      email:req.body.email,
      stipend:req.body.stipend,
      duration:req.body.duration,
      location:req.body.location
    })
    jid++;
    newJob.save();
    res.json({ msg: "Added job successfully!" });
  } catch (err) {
    res.json({ msg: "Error adding the job" });
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
        const newBookmark= new bookmarks({
            email: req.body.email,
            jobId: req.body.jobId
          }) ;
          newBookmark.save();
          res.json({msg: "Successfully added jobs in wishlist"});
      } catch (err) {
        res.json({msg: "Error getting jobs"});
      }
});

// To get job wishlist
route.get("/bookmark", async (req, res) => {
    try {
        email = req.body.email;
        const allBookmarks = await bookmarks.find({email : email});
        res.json(allBookmarks);
      } catch (err) {
        res.json({msg: "Error getting bookmarks"});
      }
});

// To delete job from wishlist
route.put("/bookmark", async (req, res) => {
    try {
        mail = req.body.email;
        jobid = req.body.jobId;
        const bookmark = await bookmarks.find({ jobId: jobid, email : mail });
        console.log(bookmark);
        bookmark[0].remove();
        res.json({msg: "Successfully deleted job from wishlist"});
      } catch (err) {
        res.json({msg: "Error deleting job from bookmark list"});
      }
});

module.exports = route;
