const fetch = require("node-fetch");
async function getStateCases() {
    const apidata = await (
      await fetch("https://api.covid19india.org/state_district_wise.json")
    ).json();
    return { ...apidata };
  }
  module.exports = {
    getStateCases: getStateCases,
  };