const Sequelize = require("sequelize");

const sequelize = require("../orm_setup");
const stateOfRes = require("./stateOfRes");
const Address = require("./address")

const lgaOfRes = sequelize.define("lga_of_res", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false,
    },
    constestant_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    lga : {
        type : Sequelize.STRING,
        allowNull : false,
    }
});

lgaOfRes.hasMany(Address,{
    foreignKey : "lga_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE"
})



module.exports= lgaOfRes;
