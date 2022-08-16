const express = require('express');
const bodyParser = require('body-Parser');
const route = require('./routes/route');
const {default:mongoose} = require('mongoose');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extnded:true}));

const url = "mongodb+srv://plutonium:htEPohhzxGsMLQQo@cluster0.lcxjxcs.mongodb.net/plutonium";
const port = process.env.PORT||3000;

mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log("MongoDB is connected")).catch((err)=>console.log(err));

app.use('/', route);

app.listen(port, function(){
    console.log("Express app is running on port", 3000);
})

