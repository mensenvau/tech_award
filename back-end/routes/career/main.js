const express = require('express');
const router = express.Router();
const { getCareerInfo, getCareerWithId } = require('../../controllers/career');

// POST 

// GET 
router.get("/list", getCareerInfo)
router.get("/list/:id", getCareerWithId)


module.exports = router; 
