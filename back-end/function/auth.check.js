const { decode } = require("../models/jwt");
const logger = require("../models/logger");

let authCheck = async (req, res, next) => {
    try {
        console.log(req.headers['Authentication'] || req.headers['authentication'])
        req.user = decode(req.headers['Authentication'] || req.headers['authentication']);
        console.log(req.user)
    } catch (err) {
        logger.error(err.message, "JwtDecoder")
    }
    next();
}


module.exports = { authCheck }