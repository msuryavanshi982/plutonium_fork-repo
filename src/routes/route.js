const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post('/players', function (req, res) {

       let element  = req.body;
       for(let i=0;i <players.length; i++){
        let New = players[i]
        if(New.name == element.name){
            return res.send("this player is alredy exist")
        }
       }
       players.push(element)
       res.send(  { data: players , status: true }  )
   })
  
module.exports = router;
