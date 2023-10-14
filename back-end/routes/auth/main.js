const express = require('express');
const router = express.Router();
const { signIn, signUp, emailConfirm, emailVerify, emailSend } = require('../../controllers/auth');
const { valSignIn, valSignUp } = require('../../validator/auth');

// POST 
router.post("/sign-in", valSignIn, signIn)
router.post("/sign-up", valSignUp, signUp)
router.post("/email/send", emailSend)
router.post("/email/verify", emailVerify)

// GET 
router.get("/email/confirm/:id", emailConfirm)

module.exports = router; 