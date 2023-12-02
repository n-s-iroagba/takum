


const sequelize= require("../orm_setup.js");
const Sequelize = require("sequelize");
const lgaOfRes = require("./lgaOfRes");

const stateOfRes = sequelize.define("state_of_res", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true,
    },

    state : {
        type : Sequelize.STRING,
        allowNull : false,
    },
});

stateOfRes.hasMany(lgaOfRes,{
    foreignKey : "state_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE" 
});

module.exports = stateOfRes; 