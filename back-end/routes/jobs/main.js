const express = require('express');
const router = express.Router();
const { getJobs, getJobsWithId } = require('../../controllers/jobs');

// POST 

// GET 
router.get("/list", getJobs)
router.get("/list/:id", getJobsWithId)

module.exports = router; 
