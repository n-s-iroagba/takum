const Sequelize = require("sequelize");


const sequelize = new Sequelize("takumdb", "nnamdi", "97chocho",{
    dialect : "postgres",
    host: 'postgresql-98535-0.cloudclusters.net',
    port:13750 ,
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
