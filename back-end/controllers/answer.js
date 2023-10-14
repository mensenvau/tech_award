const { successMessage, errorMessage, validationError } = require("../database/message");

let answer = (req, res, next) => {

    res.success = function (data, message = successMessage) {
        this.json({
            status: 200,
            message,
            data
        });
    };

    res.move = function (move, message = errorMessage) {
        this.json({
            status: 301,
            message,
            move
        });
    };

    res.error = function (message = errorMessage) {
        this.json({
            status: 404,
            message
        });
    };

    res.valid = function (array = [], message = validationError) {
        this.json({
            status: 403,
            message,
            array
        });
    };

    res.to = function (url) {
        this.redirect(url);
    };

    next();
}

module.exports = answer
