const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://plutonium:htEPohhzxGsMLQQo@cluster0.lcxjxcs.mongodb.net/ML_001", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use((req,res,next)=>{
    let date = moment()
    console.log(date.format('YYYY-MM-DD')+","+req.ip+","+ req.path)
    next();
})
app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
