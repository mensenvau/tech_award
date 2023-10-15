const express = require('express');
const app = express();
const logger = require('./models/logger');
const cors = require('cors')
const { notFoundPage } = require('./database/message');

require('dotenv').config()

app.use(cors({
    origin: ["https://smartjob.uz", "http://localhost:3000", "http://localhost:3001", "https://smartjob.datatech.uz", "http://localhost:6003",],
    optionsSuccessStatus: 200
}));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./controllers/answer"));
app.use('/', require("./routes/main"));

// waiting error messages!  
app.use("/", (err, req, res, next) => {
    logger.error(err.message, "error")
    res.json({
        status: 404,
        message: err.message
    });
})

// waiting all routers messages! 
app.use("/", (req, res, next) => {
    res.json({
        status: 404,
        message: notFoundPage
    });
})

app.listen(process.env.PORT, () => {
    logger.log(`Server is running on port ${process.env.PORT}`);
});
