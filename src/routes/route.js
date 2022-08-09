const express = require('express');
const router = express.Router();
//....................answer 1.....................//
router.get('/movies', function (req, res) {
       const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
         res.send(movies);
});
// ..................anwer2 ....................//
router.get('/movies/:indexNumber', function (req, res){
      const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
      const index = req.params.indexNumber;
      console.log(movies[index]);
      res.send(movies[index]);
})
//................answer3....................//
router.get('/movie/:indexNumber', function (req, res){
    const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
    const index = req.params.indexNumber;
       if(index<4){
        res.send(movies[index]);
        console.log(movies[index]);
       }else{
        res.send("use a valid index");
        console.log("use a valid index");
       }
});
//..................answer4........................//
router.get('/films', function (req, res){
       const films = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
       "name": "Finding Nemo"
       }]
       res.send(films);
});
//..............anmswer5....................//
router.get('/films/:filmid', function (req, res){
    const films = [{
     "id": 1,
     "name": "The Shining"
    }, {
     "id": 2,
     "name": "Incendies"
    }, {
     "id": 3,
     "name": "Rang de Basanti"
    }, {
     "id": 4,
    "name": "Finding Nemo"
    }];
    const index1 = req.params.filmid;
    if(index1<5 && index1>0 ){
    res.send(films[index1-1]);
    console.log(films[index1-1]);
    }else{
        res.send("No movie exists with this id");
        console.log("No movie exists witht this id");
    }
});

module.exports = router;