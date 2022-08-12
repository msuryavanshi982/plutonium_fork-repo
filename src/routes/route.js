const express = require('express');
const router = express.Router();

let persons= [
  {
  name: "SK",
  age: 10,
  votingStatus: false
},
{
  name: "SK",
  age: 20,
  votingStatus: false
},
{
  name: "AA",
  age: 70,
  votingStatus: false
},
{
  name: "PK",
  age: 5,
  votingStatus: false
},
{
  name: "HO",
  age: 40,
  votingStatus: false
}
]

router.post('/voters',(req,res)=>{
  let votingAge = req.query.age 
  let ElegiblePersons = []
  for(let i =0 ; i < persons.length; i++){
    if (persons[i].age > votingAge){
      persons[i].votingStatus = true ;
      ElegiblePersons.push(persons[i])
    }
  }
  res.send({persons: ElegiblePersons, status:true})

  
          
})

module.exports = router;