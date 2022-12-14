const Sequelize = require("sequelize");

const sequelize = require("../orm_setup");

const MaleContestant = require("../malecontestant")

const FemaleContestant = require('../femalecontestant')

Address = sequelize.define("address", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true,
    },

    address : {
        type : Sequelize.STRING,
        allowNull : false,
    },   
});
Address.hasMany(MaleContestant,{
    foreignKey : "address_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
})

Address.hasMany(FemaleContestant,{
    foreignKey : "address_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
})

module.exports = Address;