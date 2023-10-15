let similarity = require('sentence-similarity')
let similarityScore = require('similarity-score');
const { getRow } = require('../database/mysql');

const matchCategory = (matchScore) => {
    if (isNaN(matchScore)) return { category: "Not-maching", matching_percentage: 0 }

    if (matchScore >= 0 && matchScore < 30) return { category: "Low", matching_percentage: matchScore }
    if (matchScore >= 30 && matchScore < 50) return { category: "Upper low", matching_percentage: matchScore }
    if (matchScore >= 50 && matchScore < 70) return { category: "Good", matching_percentage: matchScore }
    if (matchScore >= 70 && matchScore < 90) return { category: "Better", matching_percentage: matchScore }
    if (matchScore >= 90 && matchScore < 101) return { category: "Great", matching_percentage: matchScore }

    return { category: "Not found", matching_percentage: matchScore }
}


let reComment = (user_jobs, candidate_job, threshold) => {
    try {
        let winkOpts = { f: similarityScore.winklerMetaphone, options: { threshold } };
        let { score, exact, order, size, matched } = similarity(candidate_job, user_jobs, winkOpts);

        const match = score * size;

        let check = []; let res = 0;
        for (let i = 0; i < matched.length; i++) {
            const match_score = matched[i];
            const match_label = candidate_job[i];
            if (match_score > 0) { check.push({ name: match_label, is: 1 }); res++ }
            else check.push({ name: match_label, is: 0 })
        }

        // final match
        let { matching_percentage, category } = matchCategory(res / matched.length * 100);

        // return matchScore
        return { score, order, size, exact, check, user_jobs, matched, matching_percentage, match, category }
    } catch (err) {
    }
}

let checkMatch = async (jid, uid = 1) => {
    let jobs_dt = await getRow("SELECT distinct job_id, name FROM tech_award.jobs_keys WHERE job_id = ?", [jid]);
    let users_dt = await getRow("SELECT distinct user_id, name FROM user_keys WHERE user_id = ?", [uid]);

    let jobs = [];
    let users = [];

    for (let i = 0; i < users_dt.length; i++)
        users.push(users_dt[i].name);

    for (let i = 0; i < jobs_dt.length; i++)
        jobs.push(jobs_dt[i].name);

    return reComment(jobs, users)
}


module.exports = checkMatch