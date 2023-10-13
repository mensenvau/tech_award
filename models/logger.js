class Logger {
    constructor() {
    }

    log(message, tag = "mycontest") {
        console.log(message)
    }

    error(message, tag = "mycontest") {
        console.log(message)
    }
}

module.exports = new Logger();