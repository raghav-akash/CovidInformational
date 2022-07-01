const fetch = require("node-fetch");
async function findHospital() {
    const data = await (
        await fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
    ).json();
    return {
        ...data
    };
}
module.exports = {
    findHospital: findHospital,
};
