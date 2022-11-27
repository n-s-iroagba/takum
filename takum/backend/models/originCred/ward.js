const Sequelize = require("sequelize");
const sequelize = require("../orm_setup");
const MaleContestant = require("../malecontestant")

Ward = sequelize.define("wards",{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true,
    },
    ward: {
        type : Sequelize.STRING,
        allowNull : false,
    },
})
Ward.hasMany(MaleContestant,{
    foreignKey : "ward_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
})

module.exports = Ward;