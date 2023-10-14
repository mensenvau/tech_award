const logger = require("../models/logger");

class PostgreSQL {

    constructor() {
        logger.log("Creaeting connetion to PostgreSQL!", "database");

        const Pool = require("pg").Pool;
        this.pool = new Pool({
            user: process.env.USERNAME,
            host: process.env.HOST,
            database: process.env.DATABASE,
            password: process.env.PASSWORD,
            port: 5432
        });
    }

    getRow = async (query, params) => {
        try {
            let results = await this.pool.query(query, params);
            return results.rows;
        } catch (err) {
            throw new Error("Server error, PosgreSQL has an error!, " + err.message);
        }
    }

    getOneRow = async (query, params) => {
        try {
            return (await this.pool.query(query, params)).rows[0];
        } catch (err) {
            throw new Error("Server error, PosgreSQL has an error!, " + err.message);
        }
    }

    insertQuery = async (query, params) => {
        try {
            return (await this.pool.query(query, params));
        } catch (err) {
            throw new Error("Server error, PosgreSQL has an error!, " + err.message);
        }
    }

    updateQuery = async (query, params) => {
        try {
            return (await this.pool.query(query, params));
        } catch (err) {
            throw new Error("Server error, PosgreSQL has an error!, " + err.message);
        }
    }
}



module.exports = new PostgreSQL();
