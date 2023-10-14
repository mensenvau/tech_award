const { contestIDError } = require("../database/message");
const { getRow, getOneRow } = require("../database/mysql");

let getJobs = async (req, res, next) => {
    try {
        console.time();
        res.success({ contests: await getRow("SELECT * FROM jobs_list") });
        console.timeEnd();
    } catch (err) {
        return next(err);
    }
}

let getJobsWithId = async (req, res, next) => {
    try {
        let cid = req.params.cid;
        let [contest] = await Promise.all([
            getOneRow("SELECT * FROM jobs_list WHERE id = ?", [cid]),
        ]);

        if (!contest) throw new Error(contestIDError);
        res.success({ contest });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getJobs, getJobsWithId
}