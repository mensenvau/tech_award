const express = require('express');
const router = express.Router();
const { getJobs, getJobsWithId, buildResumeWithAI, saveResume } = require('../../controllers/jobs');

// POST 
router.post("/ai", buildResumeWithAI)
router.post("/save", saveResume);

// GET 
router.get("/list", getJobs)
router.get("/list/:id", getJobsWithId)


module.exports = router; 
