const logger = require("../models/logger");

class MySQL {
    constructor() {
        logger.log("Creaeting connetion to MYSQL!", "database");

        const mysql = require("mysql2");
        this.pool = mysql.createPool({
            user: process.env.MYSQL_USERNAME,
            host: process.env.HOST,
            database: process.env.DATABASE,
            password: process.env.MYSQL_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0,
            multipleStatements: true,
            connectTimeout: 60000
        }).promise();
    }

    getRow = async (query, params) => {
        try {
            let results = await this.pool.query(query, params);
            return results[0];
        } catch (err) {
            throw new Error("Server error, MYSQL has an error!, " + err.message);
        }
    }

    getOneRow = async (query, params) => {
        try {
            return (await this.pool.query(query, params))[0][0];
        } catch (err) {
            throw new Error("Server error, MYSQL has an error!, " + err.message);
        }
    }

    insertQuery = async (query, params) => {
        try {
            return (await this.pool.query(query, params))[0];
        } catch (err) {
            throw new Error("Server error, MYSQL has an error!, " + err.message);
        }
    }

    updateQuery = async (query, params) => {
        try {
            return (await this.pool.query(query, params));
        } catch (err) {
            throw new Error("Server error, MYSQL has an error!, " + err.message);
        }
    }
}



module.exports = new MySQL();
