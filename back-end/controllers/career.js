const { genIDError } = require("../database/message");
const { getRow, getOneRow } = require("../database/mysql");

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


let getCareerWithId = async (req, res, next) => {
    try {
        let id = req.params.id;
        console.log(id)
        let [info, faq, link, skills, areas] = await Promise.all([
            getOneRow("SELECT * FROM gen_job_info WHERE id = ?", [id]),
            getRow("SELECT * FROM gen_job_faq WHERE job_id = ?", [id]),
            getRow("SELECT * FROM gen_job_link WHERE job_id = ?", [id]),
            getRow("SELECT * FROM gen_job_skills WHERE job_id = ?", [id]),
            getRow("SELECT * FROM gen_work_areas WHERE job_id = ?", [id]),
        ]);

        if (!info) throw new Error(genIDError);
        res.success({ info, faq, link, skills, areas });
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getCareerInfo, getCareerWithId
}