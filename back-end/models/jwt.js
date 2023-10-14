let jwt = require('jsonwebtoken');

class JwtWebToken {
    constructor() {
    }

    encode(data) {
        return jwt.sign(data, process.env.KEY);
    }

    decode(token) {
        return jwt.verify(token, process.env.KEY);
    }
}


module.exports = new JwtWebToken();