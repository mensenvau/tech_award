let chalk = require('chalk');

class Logger {
    constructor() {
    }

    log(message, tag = "smartjob") {
        console.log(`[${chalk.blue(tag)}]:`, chalk.yellow(message))
    }

    error(message, tag = "smartjob") {
        console.log(`[${chalk.blue(tag)}]:`, chalk.red(message))
    }
}

module.exports = new Logger();
