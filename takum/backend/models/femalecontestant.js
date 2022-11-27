const Sequelize = require("sequelize");


const sequelize = require("./orm_setup");


const FemaleContestant = sequelize.define("femalecontestants", {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey : true,
    },

    lastName : {
        type : Sequelize.STRING,
        allowNull : false,
    },


    firstName : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    
    middleName : {
        type : Sequelize.STRING,
        allowNull : true,
    },


    dateOfBirth: {
        type: Sequelize.DATEONLY,
        allowNull : false,
    },

    email : {
        type : Sequelize.STRING,
        allowNull : false,
    },

    phoneNumber : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },

    highestEducationalQualification : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    
    votes : {
        type : Sequelize.INTEGER,
        allowNull : false,

    },
    
    nextOfKinName : {
            type : Sequelize.STRING,
            allowNull : false,
    },

    nextOfKinPhoneNumber : {
        type : Sequelize.INTEGER,
        allowNull : false,
    },

    roleModel : {
        type : Sequelize.STRING,
        allowNull : false,
    },

    isHealthChallenge : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    
    healthChallenge : {
        type : Sequelize.STRING,
        allowNull : true,
    },

    managerName : {
        type : Sequelize.STRING,
        allowNull : false,
    },

    permission: {
        type : Sequelize.STRING,
        allowNull : false,
    },

    contestReason : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    
    hobbies: {
        type : Sequelize.STRING,
        allowNull : false,
    },

    image : {
        type : Sequelize.STRING,
        allowNull : false,
    },

    favouriteShow : {
        type : Sequelize.STRING,
        allowNull : false,
    },

    
})



module.exports = FemaleContestant;