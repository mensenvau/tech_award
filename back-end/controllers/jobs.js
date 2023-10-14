const { contestIDError } = require("../database/message");
const { getRow, getOneRow } = require("../database/mysql");

let getJobs = async (req, res, next) => {
    try {
        let q = `%${req.query.q || ''}%`
        let env = req.query.env
        if (env == 'all')
            return res.success({ jobs: await getRow("SELECT id,name,info,country FROM jobs_list WHERE name like ? LIMIT 100", [q]) });

        res.success({ jobs: await getRow("SELECT id,name,info,country FROM jobs_list WHERE name like ? and source = ? LIMIT 100", [q, env]) });

    } catch (err) {
        return next(err);
    }
}

let getJobsWithId = async (req, res, next) => {
    try {
        let cid = req.params.cid;
        let [jobs] = await Promise.all([
            getOneRow("SELECT * FROM jobs_list WHERE id = ?", [cid]),
        ]);

        if (!jobs) throw new Error(contestIDError);
        res.success({ jobs });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getJobs, getJobsWithId
}