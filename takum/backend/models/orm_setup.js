const Sequelize = require("sequelize");


const sequelize = new Sequelize("testtakum", "root", "97chocho",{
    dialect : "mysql",
    host: "localhost",
    port:3306,
});

module.exports = sequelize;

const stateOfRes = require ("./resCred/stateOfRes");
const lgaOfRes  = require("./resCred/lgaOfRes");
const address = require("./resCred/address");
const country = require("./originCred/country")
const stateOfOrigin = require("./originCred/stateOfOrigin");
const lgaOfOrigin = require("./originCred/lgaofOrigin");
const ward = require("./originCred/ward");
const MaleContestant = require("./malecontestant")
const FemaleContestant = require("./malecontestant")

