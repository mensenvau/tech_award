const express = require('express');
const router = express.Router();
const { getCareerInfo } = require('../../controllers/career');

// POST 

// GET 
router.get("/list", getCareerInfo)

module.exports = router; 
