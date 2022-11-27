const Sequelize = require("sequelize");

const sequelize = require("../orm_setup");

const StateOfOrigin = require("./stateOfOrigin");

const Country = sequelize.define("countries", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true,
    },
    country : {
        type : Sequelize.STRING,
        allowNull : false,
    }
  },)
   
    
        Country.prototype.getValue = (data)=>{
          return data
        }
    


Country.hasMany(StateOfOrigin,{
    foreignKey : "country_id",
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
})
module.exports = Country;
