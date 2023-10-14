const { notFoundUser, alreadyRMessage, undetectedError, validationEmail, alreadyEMessage } = require("../database/message")
const { validationResult } = require('express-validator');
const { encode, decode } = require("../models/jwt");
const { getOneRow, insertQuery, updateQuery } = require("../database/mysql");
const { emailSendAuth } = require("../function/send.email");

let signIn = async (req, res, next) => {
    try {
        let { email, password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.valid(errors.array()); }

        let user = await getOneRow("SELECT * FROM users WHERE email=? and password = md5(?)", [email, password + ":" + process.env.PASSWORD_SOLT]);
        if (!user) throw new Error(notFoundUser);

        delete user.password;
        return res.success({ token: encode(user), user });

    } catch (err) {
        return next(err);
    }
}

let signUp = async (req, res, next) => {
    try {
        let { email, full_name, password } = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.valid(errors.array()); }

        let checkUser = await getOneRow("SELECT * FROM users WHERE (email=?)", [email]);
        if (checkUser) throw new Error(alreadyRMessage);

        let ins = await insertQuery("Insert INTO users(full_name,email,password,type) VALUES(?,?,md5(?),'EMAIL')", [full_name, email, password + ":" + process.env.PASSWORD_SOLT]);
        if (!ins) { throw new Error(undetectedError); }

        let user = await getOneRow("SELECT * FROM users WHERE email=?", [email]);
        if (!user) { throw new Error(undetectedError); }

        // send email 
        emailSendAuth(email);

        delete user.password;
        return res.success({
            token: encode(user.id),
            user
        });

    } catch (err) {
        return next(err);
    }
}

let emailSend = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id || !req.user.email) {
            return res.error(notFoundUser)
        }

        let email = req.user.email;
        let data = await getOneRow("SELECT email, email_confirm FROM users WHERE email = ?", [email])

        if (data.email_confirm) {
            return res.error(alreadyEMessage)
        }

        // send email 
        emailSendAuth(email);
        res.success(validationEmail);
    } catch (err) {
        return next(err);
    }
}

let emailVerify = async (req, res, next) => {
    try {
        if (!req.user || !req.user.id || !req.user.email) {
            return res.error(notFoundUser)
        }
        let email = req.user.email;
        let data = await getOneRow("SELECT email, email_confirm FROM users WHERE email = ?", [email])
        res.success(data);
    } catch (err) {
        return next(err);
    }
}

let emailConfirm = async (req, res, next) => {
    try {
        let data = decode(req.params.id);
        await updateQuery("UPDATE users SET email_confirm = true WHERE email = ?", [data.email])
        res.to(process.env.FRONT_END + "/page/confirm");
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    signIn, signUp, emailVerify, emailConfirm, emailSend
}