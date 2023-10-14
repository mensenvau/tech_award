const { decode } = require("../models/jwt");
const logger = require("../models/logger");

let authCheck = async (req, res, next) => {
    try {
        req.user = decode(req.headers['Authentication'] || req.headers['authentication']);
    } catch (err) {
        logger.error(err.message, "JwtDecoder")
    }
    next();
}


module.exports = { authCheck }