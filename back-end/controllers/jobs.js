const { jobsIDError } = require("../database/message");
const { getRow, getOneRow } = require("../database/mysql");

let getJobs = async (req, res, next) => {
    try {
        let q = `%${req.query.q || ''}%`
        let env = req.query.env
        console.log(env)
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
        res.success({ jobs });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getJobs, getJobsWithId
}