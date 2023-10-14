const express = require('express');
const router = express.Router();
const { getJobs, getJobsWithId } = require('../../controllers/jobs');

// POST 

// GET 
router.get("/list", getJobs)
router.get("/list/:pid", getJobsWithId)

module.exports = router; 
