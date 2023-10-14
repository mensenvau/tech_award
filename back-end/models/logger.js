let chalk = require('chalk');

class Logger {
    constructor() {
    }

    log(message, tag = "smartjob") {
        console.log(tag, ":", message)
    }

    error(message, tag = "smartjob") {
        console.log(tag, ":", message)
    }
}

module.exports = new Logger();
