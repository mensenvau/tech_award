const { genIDError } = require("../database/message");
const { getRow } = require("../database/mysql");

let getCareerInfo = async (req, res, next) => {
    try {
        let q = `%${req.query.q || ''}%`
        return res.success({
            jobs: await getRow(`
            SELECT *, CONCAT(SUBSTRING(job_details, 1, 100),'...') AS truncated_job_details FROM gen_job_info WHERE job_name like ? LIMIT 100            `, [q])
        });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getCareerInfo
}