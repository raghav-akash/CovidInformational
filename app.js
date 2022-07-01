  
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require("lodash");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const app = express();
const utils = require("./public/js/getCases");
const hospital = require("./public/js/findHospital");
const statecases = require("./public/js/getStateCases")
const User = require("./public/js/mongo")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  utils.getCases().then((data) => {
    res.render("index", {
      total: data.total,
      active: data.active,
      recovered: data.recovered,
      deaths: data.deaths,
    });
  });
});

app.get("/hospital", (req, res) => {
  res.render("hospital",{arr:[]})});

app.get("/precautions", (req, res) => {
  res.render("precautions");
});
app.get("/symptoms", (req, res) => {
  res.render("symptoms");
});
app.get("/updates", (req, res) => {
  res.render("updates", { distName: [], distCasesArr: [] });
});
app.get("/newsletter", (req, res) => {
  res.render("newsletter");
});

app.post("/hospital", (req, res) => {
  const selectedstate = req.body.state;
  console.log(selectedstate);
  hospital.findHospital().then((apidata) => {
    const arr = [];
    console.log(apidata);
    apidata.data.medicalColleges.forEach(element => {
      if(selectedstate==element.state){
          arr.push(element)
      }
  });
    console.log(arr);

    res.render("hospital", {arr:arr });
  });
});

app.post("/updates", (req, res) => {
  const selectedState = req.body.state;
  console.log(selectedState);
  statecases.getStateCases().then((dt) => {
    let state = dt[`${selectedState}`];
    let distName = Object.keys(state.districtData);
    let distCasesArr = Object.values(state.districtData);
    res.render("updates", { distName: distName, distCasesArr: distCasesArr });
  });
});

app.post("/newsletter", async (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const gender = req.body.gender;
  const state = req.body.state;
  const city = req.body.city;
  const language = req.body.language;
  const fetchedData = { fname: fname,lname: lname, email: email, gender: gender, state: state, city: city, language: language };
  const saveData = new User(fetchedData);
  try {
    await saveData.save();
    res.status("201").send("YOU HAVE BEEN ADDED TO DATABASE");
    console.log(fetchedData);
  } catch (e) {
    res.status(200).send(e);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Up At 3000");
});