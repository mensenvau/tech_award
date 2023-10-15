const express = require('express');
const router = express.Router();
const { getJobs, getJobsWithId, buildResumeWithAI } = require('../../controllers/jobs');

// POST 
router.post("/ai", buildResumeWithAI)

// GET 
router.get("/list", getJobs)
router.get("/list/:id", getJobsWithId)


module.exports = router; 
