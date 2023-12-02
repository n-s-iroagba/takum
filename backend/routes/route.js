//import controllers module

const maleContestantController = require('../controllers/maleContestantController')
const femaleContestantController = require('../controllers/femaleContestantController')


const adminController = require ('../controllers/adminController')

express = require('express')

router = express.Router()


//use router to handle different routes using already set controllers

router.get("/", maleContestantController.index) //index router

router.get("/malecontestants", maleContestantController.getMaleContestants) //all male contestants router
router.get("/femalecontestants", femaleContestantController.getFemaleContestants)

router.patch("/malecontestants/:id", maleContestantController.votemale) //vote increment
router.patch("/femalecontestants/:id", femaleContestantController.votefemale)

router.post("/malecontestants", maleContestantController.upload, maleContestantController.maleRegister)
router.post("/femalecontestants", femaleContestantController.upload, femaleContestantController.femaleRegister)

router.post("/adminlogin",adminController.login)

router.delete("/malecontestants/:id", maleContestantController.deleteOneMale)// delete one contestant at a time(in case of disqualification)
router.delete("/femalecontestants/:id", femaleContestantController.deleteOneFemale)

//router.patch("/contestants/:id", controller.approve) // approve contestant

//router.delete("/malecontestants",maleContestantController.deleteAllMale)
//router.delete("/femalecontestants",femaleContestantController.deleteAllFemale)

//router.post("/sponsors", controller.registerSponsor) //register sponsor

//router.get("/sponsors", controller.getsponsors) //get sponsors for render to view

//router.delete("/sponsors",controller.deleteAllSponsors) //delete every sponsor

//router.post("/winners/:id",controller.updateWinner)//update winner(admin only)

//router.get("/winners",controller.getWinners) // gets the current winners

//router.post("/past-winners/:id", controller.registerPastWinners)// updates winners to past winners

//router.post("/history", controller.postHistory) //post history

//router.patch("/history", controller.updateHistory) //update history

//router.post("/guests",controller.registerGuest) //register get

//router.get("/guests/:id", controller.getGuest) //verify guest(also sets checked-in to true once visted via bar code scanner)

module.exports = router