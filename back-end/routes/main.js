const express = require('express');
const app = express();
const { authCheck } = require('../function/auth.check');

app.use(authCheck);

// Auth method Google,GitHub, Email!
app.use("/auth", require("./auth/main"))

// next part!
app.use("/jobs", require("./jobs/main"))
app.use("/career", require("./career/main"))


module.exports = app; 