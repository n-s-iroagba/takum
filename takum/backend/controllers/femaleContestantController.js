const FemaleContestant = require("../models/femalecontestant");
const Country = require("../models/originCred/country");
const StateOfOrigin = require("../models/originCred/stateOfOrigin");
const LgaOfOrigin = require("../models/originCred/lgaofOrigin");
const db = require("../models/orm_setup");
const Ward = require("../models/originCred/ward");
const Address = require("../models/resCred/address");
const StateOfRes = require("../models/resCred/stateOfRes");
const LgaOfRes = require("../models/resCred/lgaOfRes");
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


// set up controller functions for routes
module.exports = {
  index: (req, res) => {
    res.send("time for takum to online");
  },

  votefemale: async (req, res) => {
    const id = req.params.id
    await Contestant.increment('votes',{
      by : 2,
      where :{
          id:id
      }
    })
  },

  getFemaleContestants : async (req, res) => {
    try{
    FemaleContestants = await FemaleContestant.findAll()
    if (FemaleContestants){
      res.json(FemaleContestants)
      console.log(FemaleContestants)
    }
  }
  catch(err){
    console.log(err)
  }
},

  upload: multer({
    storage: storage
  })
  .single('image'),

  deleteOneFemale : async(req,res) => {
    id = req.params.id
    await FemaleContestant.destroy({
      where :{
        id : id
      }
    })
  },

  deleteAllFemale : async (req,res) => {
    await FemaleContestant.destroy({
      where : {}
    })
  },


  femaleRegister: async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        success: "false",
        message: "title is required",
      });
    }

    try{
    const [country, isCountryCreated] = await Country.findOrCreate({
      where: { country: req.body.country },
    });

    const [stateOfOrigin, isStateOfOrigincreated] =
      await StateOfOrigin.findOrCreate({
        where: {
          ...{ country_id: country.id },
          ...{ state: req.body.stateOfOrigin },
        },
      });
    

    const [lgaOfOrigin, isLgaOfOriginCreated] = await LgaOfOrigin.findOrCreate({
      where: {
        ...{ state_id: stateOfOrigin.id },
        ...{ lga: req.body.lgaOfOrigin },
      },
    });
    
    const [ward, isWardCreated] = await Ward.findOrCreate({
      where: {
        ...{ lga_id: lgaOfOrigin.id },
        ...{ ward: req.body.ward },
      },
    });
    
    const [stateOfRes, isStateOfRescreated] = await StateOfRes.findOrCreate({
      where: {
        state: req.body.stateOfResidence,
      },
    });
    
    const [lgaOfRes, isLgaOfResCreated] = await LgaOfRes.findOrCreate({
      where: {
        ...{ state_id: stateOfRes.id },
        ...{ lga: req.body.lgaOfResidence },
      },
    });

    const [address, isAddressCreated] = await Address.findOrCreate({
      where: {
        ...{ lga_id: lgaOfRes.id },
        ...{ address: req.body.address },
      },
    });
   
    const data = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleName: req.body.middleName,
      dateOfBirth: req.body.dateOfBirth,
      nextOfKinName: req.body.nextOfKinName,
      nextOfKinPhoneNumber: req.body.nextOfKinPhoneNumber,
      email: req.body.email,
      highestEducationalQualification: req.body.highestEducationalQualification,
      phoneNumber: req.body.phoneNumber,
      contestReason: req.body.contestReason,
      hobbies: req.body.hobbies,
      permission: req.body.permission,
      favouriteShow: req.body.favouriteShow,
      isHealthChallenge: req.body.isHealthChallenge,
      healthChallenge: req.body.isHealthChallenge,
      managerName: req.body.managerName,
      roleModel: req.body.roleModel,
      image: req.file.path,
      ward_id: ward.id ,
      votes : 0
    };

    const [contestant, isContestantCreated] = await FemaleContestant.findOrCreate({
      where: {...data,},
    });} 
    catch(error){console.log(error)}
  },
};
