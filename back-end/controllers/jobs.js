const { jobsIDError, tryAgain } = require("../database/message");
const { getRow, getOneRow } = require("../database/mysql");
const GPT = require("../function/gpt");
const checkMatch = require("../function/nlp");
const fs = require("fs");
const path = require("path");

let getJobs = async (req, res, next) => {
    try {
        let q = `%${req.query.q || ''}%`
        let env = req.query.env
        if (env == 'all')
            return res.success({ jobs: await getRow("SELECT id,name,info,country FROM jobs_list WHERE name like ? ORDER BY source LIMIT 100", [q]) });

        res.success({ jobs: await getRow("SELECT id,name,info,country FROM jobs_list WHERE name like ? and source = ? LIMIT 100", [q, env]) });

    } catch (err) {
        return next(err);
    }
}

let getJobsWithId = async (req, res, next) => {

    try {
        let id = req.params.id;
        let [jobs] = await Promise.all([
            getOneRow("SELECT * FROM jobs_list WHERE id = ?", [id]),
        ]);
        if (!jobs) throw new Error(jobsIDError);
        res.success({ jobs, match: await checkMatch(id,) });
    } catch (err) {
        return next(err);
    }
}

buildResumeWithAI = (req, res, next) => {
    try {
        let text = req.body.text;
        GPT(text, (err, data) => {
            try {
                if (err) return next(new Error(tryAgain));
                res.success(data);
            } catch (err) {
                return next(new Error(tryAgain));
            }
        })
    }
    catch (err) {
        return next(err);
    }

}

let saveResume = async (req, res, next) => {
    try {
        data = req.body
        fs.appendFileSync(path.join(__dirname, './data', 'data.txt', data, { encoding: "utf-8" }))
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getJobs, getJobsWithId, buildResumeWithAI, saveResume
}