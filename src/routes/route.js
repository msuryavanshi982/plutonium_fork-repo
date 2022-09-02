const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController");
const weatherController = require("../controllers/weatherController");
const memeController = require("../controllers/memeController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/cowin/byDistrict",CowinController.getSessionByPin);

router.get("/cowin/states", CowinController.getStates);
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts);
router.get("/cowin/getByPin", CowinController.getByPin);
router.get("/cowin/getByDistrict", CowinController.getByDistrict);
router.post("/cowin/getOtp", CowinController.getOtp);
router.get("/getWeatherData", weatherController.getWeatherData);
router.get("/getSortedCities", weatherController.getSortedCities);
router.get("/getMeme", memeController.getMeme);
router.post("/getMemes", memeController.getMemes);

//Q-1// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;
