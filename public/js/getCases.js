const fetch = require("node-fetch");
async function getCases() {
    const data = await (
        await fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
    ).json();
    return {
        total: data.totalCases,
        active: data.activeCases,
        recovered: data.recovered,
        deaths: data.deaths,
    };
}
module.exports = {
    getCases: getCases,
};