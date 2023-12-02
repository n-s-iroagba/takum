const Sequelize = require("sequelize");


const sequelize = new Sequelize("takum", "admin", "du0Zd530",{
    dialect : "mysql",
    host: 'mysql-156300-0.cloudclusters.net',
    port:19917 ,
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
