const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
const logger = require('../logger/logger');
const  infomation = require('../util/helper');
const formatter = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    
    logger.welcome()
     infomation.today()
     formatter.form()
    abc.printName()
    res.send('My second ever api!')
   
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason
