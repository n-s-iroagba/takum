const MaleContestant = require("../models/malecontestant");
const Country = require("../models/originCred/country");
const StateOfOrigin = require("../models/originCred/stateOfOrigin");
const LgaOfOrigin = require("../models/originCred/lgaofOrigin");
const db = require("../models/orm_setup");
const Ward = require("../models/originCred/ward");
const Address = require("../models/resCred/address");
const StateOfRes = require("../models/resCred/stateOfRes");
const LgaOfRes = require("../models/resCred/lgaOfRes");
var multer = require('multer')
var secretKey = 'takum'
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

  votemale: async (req, res) => {
    const id = req.params.id
    try {
      await MaleContestant.increment('votes', {
        by: req.body.voteNumber,
        where: {
          id: id
        }
      })
      return res.status(200)
    } catch (e) {
      console.log(e)
    }
  },
  deleteVotes: async (req, res) => {
    const id = req.params.id;

    try {
        // Assuming FemaleContestant is the model
        const femaleContestant = await MaleContestant.findByPk(id);

        if (!femaleContestant) {
            return res.status(404).json({ error: 'Female contestant not found' });
        }

        // Decrement the votes by the specified number
        await femaleContestant.decrement('votes', {
            by:305,
        });

        return res.status(200).json({ success: 'Votes deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
},

  getMaleContestants: async (req, res) => {
    try {
      const maleContestants = await MaleContestant.findAll({
        order: ['id']
      })
      if (maleContestants) {
        res.json(maleContestants)
        console.log(maleContestants)
      }
    }
    catch (err) {
      console.log(err)
    }
  },

  upload: multer({
    storage: storage
  })
    .single('image'),

  deleteOneMale: async (req, res) => {
    id = req.params.id
    await MaleContestant.destroy({
      where: {
        id: id
      }
    })
  },

  deleteAllMale: async (req, res) => {
    await MaleContestant.destroy({
      where: {}
    })
  },


  maleRegister: async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        success: "false",
        message: "no request body",
      });
    }

    try {
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
        ward_id: ward.id,
        votes: 0
      };

      const [contestant, isContestantCreated] = await MaleContestant.findOrCreate({
        where: { ...data, },
      })
    }
    catch (error) { console.log(error) }
  },
};
