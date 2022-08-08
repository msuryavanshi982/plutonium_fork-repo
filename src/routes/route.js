const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const logger = require('../logger/logger');
const  infomation = require('../util/helper');
const formatter = require('../validator/formatter')
const _ = require('lodash');


router.get('/test-me', function (req, res) {
    
    logger.welcome()
     infomation.today()
     formatter.form()
    abc.printName()
    res.send('My second ever api!')
   
});
// ---------------------------------// 
router.get('/test-me1', function (req, res) {
    let arr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    res.send(_.chunk(arr,4));
});

// ---------------------------------//
    router.get('/test-me2', function (req, res) {
    let odd = [1,3,5,7,9,11,12,13,14,15];
    let newArr = _.tail(odd); 
    res.send(newArr); 
});

// ---------------------------------//
    router.get('/test-me3', function (req, res) {
    let arrNo = _.union([3,5],[6,9,2],[11,6,2]);
    res.send(arrNo);
});

// ----------------------------------//
    router.get('/test-me4', function (req, res) {
    let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    let un = _.fromPairs(pairs);
    res.send(un);
});



module.exports = router;


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
