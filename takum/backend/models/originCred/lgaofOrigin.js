const Sequelize = require("sequelize");

const sequelize = require("../orm_setup");
const StateOfOrigin = require("./stateOfOrigin");
const Ward = require("./ward")

const LgaOfOrigin = sequelize.define("lga_of_origin", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false,
    },
    lga : {
        type : Sequelize.STRING,
        allowNull : false,
    }
});
LgaOfOrigin.hasMany(Ward,{
    foreignKey: "lga_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"

})

module.exports = LgaOfOrigin;