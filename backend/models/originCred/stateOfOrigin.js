const Sequelize = require("sequelize");
const Country = require("./country");

const sequelize = require("../orm_setup");

lgaOfOrigin = require("./lgaofOrigin");

const StateOfOrigin = sequelize.define("state_of_origin", {
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
    
})

StateOfOrigin.hasMany(lgaOfOrigin,{
    foreignKey : "state_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"

})
module.exports = StateOfOrigin;